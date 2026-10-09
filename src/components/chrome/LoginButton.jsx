import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'

export function LoginButton({ ghost = false, compact = false, onError }) {
  const { isAuthenticated, user, pendingEmail, loginWithGoogle, logout, busy } = useAuth()
  const navigate = useNavigate()

  async function onLogin() {
    onError?.('')
    try {
      const data = await loginWithGoogle()
      if (data?.needsVerification) navigate('/lien-he')
    } catch (err) {
      onError?.(err.message || 'Không đăng nhập được. Thử lại sau.')
    }
  }

  if (isAuthenticated && user) {
    return (
      <div className="rg-header-actions">
        <Link
          to="/tai-khoan"
          className={`rg-user-chip${ghost ? ' rg-user-chip-light' : ''}`}
          title="Tài khoản"
        >
          <span className="rg-avatar" aria-hidden="true">
            {user.name.slice(0, 1)}
          </span>
          <span className="d-none d-sm-inline">{user.name}</span>
        </Link>
        <button
          type="button"
          className={`rg-btn ${ghost ? 'rg-btn-ghost' : 'rg-btn-outline'}`}
          onClick={logout}
        >
          Đăng xuất
        </button>
      </div>
    )
  }

  return (
    <div className="rg-header-actions">
      <button type="button" className="rg-btn rg-btn-danger" onClick={onLogin} disabled={busy}>
        {busy ? 'Đang mở Google…' : compact ? 'Đăng nhập' : 'Đăng nhập với Google'}
      </button>
      {pendingEmail ? (
        <Link to="/lien-he" className={`rg-btn ${ghost ? 'rg-btn-ghost' : 'rg-btn-outline'}`}>
          Nhập mã
        </Link>
      ) : null}
    </div>
  )
}
