import { useState } from 'react'
import logoMark from '../../assets/logo_riceguardianai.png'
import { useAuth } from '../../auth/AuthContext'

export function VerifyCodeForm() {
  const { pendingEmail, verifyCode, resendCode, busy, error } = useAuth()
  const [code, setCode] = useState('')
  const [localError, setLocalError] = useState('')
  const [resent, setResent] = useState(false)

  if (!pendingEmail) return null

  async function onSubmit(e) {
    e.preventDefault()
    setLocalError('')
    if (!/^\d{6}$/.test(code.trim())) {
      setLocalError('Nhập đủ 6 số trong email RiceGuardian AI.')
      return
    }
    try {
      await verifyCode(code.trim())
    } catch {
      /* error from context */
    }
  }

  async function onResend() {
    setLocalError('')
    setResent(false)
    try {
      await resendCode()
      setResent(true)
    } catch {
      /* error from context */
    }
  }

  return (
    <form className="rg-verify-card" onSubmit={onSubmit}>
      <div className="rg-verify-brand">
        <img src={logoMark} alt="" width={56} height={56} />
        <div>
          <p className="rg-verify-kicker">Xác nhận đăng nhập</p>
          <h2>RiceGuardian AI</h2>
        </div>
      </div>
      <p className="rg-verify-lead">
        Mã 6 số đã gửi tới <strong>{pendingEmail}</strong>. Mở hộp thư đến hoặc thư rác, nhập mã
        trong vòng 10 phút.
      </p>
      <label className="form-label" htmlFor="site-verify-code">
        Mã xác nhận
      </label>
      <input
        id="site-verify-code"
        className="rg-verify-input"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={6}
        placeholder="000000"
        value={code}
        onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
        aria-describedby="site-verify-help"
      />
      <p id="site-verify-help" className="rg-verify-help">
        {code.length}/6 số
      </p>
      {localError || error ? <div className="rg-alert-err mt-3">{localError || error}</div> : null}
      {resent ? (
        <div className="rg-alert-ok mt-3" role="status">
          Đã gửi lại mã tới {pendingEmail}.
        </div>
      ) : null}
      <div className="d-flex flex-wrap gap-2 mt-3">
        <button type="submit" className="rg-btn rg-btn-primary" disabled={busy || code.length !== 6}>
          {busy ? 'Đang xác nhận…' : 'Xác nhận'}
        </button>
        <button type="button" className="rg-btn rg-btn-outline" onClick={onResend} disabled={busy}>
          Gửi lại mã
        </button>
      </div>
    </form>
  )
}
