import { useEffect, useState } from 'react'
import teamContact from '../assets/team_contact.jpg'
import { useAuth } from '../auth/AuthContext'
import { VerifyCodeForm } from '../components/auth/VerifyCodeForm'
import { contact, isPlaceholderContact } from '../data/contact'
import { siteRequest } from '../services/siteApi'

const emptyForm = {
  name: '',
  role: '',
  phone: '',
  org: '',
  message: '',
}

export function ContactPage() {
  const { user, isAuthenticated, pendingEmail, loginWithGoogle, accessToken, busy } = useAuth()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [loginError, setLoginError] = useState('')

  const emailReady = !isPlaceholderContact(contact.publicEmail)
  const phoneReady = !isPlaceholderContact(contact.hotline)

  useEffect(() => {
    if (user?.name) {
      setForm((prev) => ({ ...prev, name: prev.name || user.name }))
    }
  }, [user?.name])

  function validate() {
    const next = {}
    if (!isAuthenticated) next.form = 'Đăng nhập Google và xác nhận mã trước khi gửi.'
    if (!form.name.trim()) next.name = 'Vui lòng nhập họ tên.'
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Nội dung cần ít nhất 10 ký tự.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus(null)
    if (!validate()) return

    try {
      await siteRequest('/api/site/contact', {
        method: 'POST',
        token: accessToken,
        body: {
          name: form.name.trim(),
          role: form.role.trim(),
          phone: form.phone.trim(),
          org: form.org.trim(),
          message: form.message.trim(),
        },
      })
      setForm((prev) => ({ ...emptyForm, name: prev.name }))
      setStatus('success')
    } catch (err) {
      setErrors((prev) => ({ ...prev, form: err.message }))
    }
  }

  async function onLogin() {
    setLoginError('')
    try {
      await loginWithGoogle()
    } catch (err) {
      setLoginError(err.message)
    }
  }

  function onChange(field) {
    return (e) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
      setErrors((prev) => ({ ...prev, [field]: undefined, form: undefined }))
      setStatus(null)
    }
  }

  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          <p className="rg-kicker">Liên hệ</p>
          <h1>Liên hệ với chúng tôi</h1>
          <p>{contact.note}</p>
        </div>
      </div>

      <section className="rg-section">
        <div className="container">
          <div className="row g-3 g-lg-4 mb-5">
            <div className="col-md-4">
              <article className="rg-contact-card">
                <div className="rg-contact-icon" aria-hidden="true">
                  ⌖
                </div>
                <h2>Địa chỉ</h2>
                <p>{contact.address}</p>
              </article>
            </div>
            <div className="col-md-4">
              <article className="rg-contact-card">
                <div className="rg-contact-icon" aria-hidden="true">
                  ✉
                </div>
                <h2>Gửi Email</h2>
                <p>
                  {emailReady ? contact.publicEmail : 'Email công khai chưa cấu hình (TODO_PUBLIC_EMAIL).'}
                </p>
                {emailReady ? (
                  <a className="rg-btn rg-btn-primary mt-auto" href={`mailto:${contact.publicEmail}`}>
                    Gửi Email
                  </a>
                ) : (
                  <span className="rg-btn rg-btn-outline mt-auto disabled" aria-disabled="true">
                    Chưa có email
                  </span>
                )}
              </article>
            </div>
            <div className="col-md-4">
              <article className="rg-contact-card">
                <div className="rg-contact-icon" aria-hidden="true">
                  ☎
                </div>
                <h2>Gọi nhanh</h2>
                <p>
                  {phoneReady
                    ? contact.hotline
                    : 'Hotline chưa cấu hình (TODO_HOTLINE).'}
                </p>
                {phoneReady ? (
                  <a className="rg-contact-call" href={`tel:${contact.hotline}`}>
                    Gọi ngay
                  </a>
                ) : (
                  <span className="rg-contact-call is-muted">Cập nhật sau</span>
                )}
              </article>
            </div>
          </div>

          <div className="text-center mb-4 mb-lg-5">
            <h2 className="rg-section-title mb-2">Trao đổi với chúng tôi</h2>
            <p className="rg-section-lead mx-auto mb-0">
              Gửi câu hỏi về giải pháp, hợp tác hoặc thử nghiệm vùng trồng — chúng tôi sẽ phản hồi qua
              email.
            </p>
          </div>

          <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-lg-5">
              <div className="rg-contact-blob">
                <img
                  src={teamContact}
                  alt="Đội ngũ RiceGuardian AI với nguyên mẫu trạm quan trắc"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <VerifyCodeForm />
              {!isAuthenticated && !pendingEmail ? (
                <div className="rg-form-card rg-form-card-soft">
                  <h2 className="h5 mb-2">Đăng nhập Google để gửi</h2>
                  <p className="mb-3">
                    Cần đăng nhập Gmail trước. Lần đầu hệ thống gửi mã xác nhận về đúng hộp thư đó,
                    rồi gửi câu hỏi tới {contact.publicEmail} kèm địa chỉ để trả lời.
                  </p>
                  <button type="button" className="rg-btn rg-btn-danger" onClick={onLogin} disabled={busy}>
                    {busy ? 'Đang mở Google…' : 'Đăng nhập với Google'}
                  </button>
                  {loginError ? <div className="rg-alert-err mt-3">{loginError}</div> : null}
                </div>
              ) : null}
              {isAuthenticated ? (
              <form className="rg-form-card rg-form-card-soft" onSubmit={onSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contact-name">
                      Họ tên
                    </label>
                    <input
                      id="contact-name"
                      className={`form-control${errors.name ? ' is-invalid' : ''}`}
                      value={form.name}
                      onChange={onChange('name')}
                      autoComplete="name"
                    />
                    {errors.name ? (
                      <div className="invalid-feedback d-block">{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contact-role">
                      Chức vụ
                    </label>
                    <input
                      id="contact-role"
                      className="form-control"
                      value={form.role}
                      onChange={onChange('role')}
                      autoComplete="organization-title"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contact-email">
                      Gmail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-control"
                      value={user?.email || ''}
                      readOnly
                      placeholder="Đăng nhập Google để hiện Gmail"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="contact-phone">
                      Số điện thoại
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="form-control"
                      value={form.phone}
                      onChange={onChange('phone')}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="contact-org">
                      Đơn vị / Hợp tác xã
                    </label>
                    <input
                      id="contact-org"
                      className="form-control"
                      value={form.org}
                      onChange={onChange('org')}
                      autoComplete="organization"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="contact-message">
                      Nội dung / câu hỏi
                    </label>
                    <textarea
                      id="contact-message"
                      className={`form-control${errors.message ? ' is-invalid' : ''}`}
                      rows={5}
                      value={form.message}
                      onChange={onChange('message')}
                    />
                    {errors.message ? (
                      <div className="invalid-feedback d-block">{errors.message}</div>
                    ) : null}
                  </div>
                </div>

                {errors.form ? <div className="rg-alert-err mt-3">{errors.form}</div> : null}
                {status === 'success' ? (
                  <div className="rg-alert-ok mt-3" role="status">
                    Đã gửi câu hỏi tới {contact.publicEmail}. Phản hồi sẽ về Gmail {user?.email}.
                  </div>
                ) : null}

                <div className="d-flex flex-wrap gap-2 mt-4">
                  <button type="submit" className="rg-btn rg-btn-primary" disabled={busy}>
                    Gửi nhanh
                  </button>
                  <button
                    type="button"
                    className="rg-btn rg-btn-outline"
                    onClick={() => {
                      setForm(emptyForm)
                      setErrors({})
                      setStatus(null)
                    }}
                  >
                    Xóa form
                  </button>
                </div>
              </form>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
