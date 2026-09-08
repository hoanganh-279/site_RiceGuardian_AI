import { useState } from 'react'
import teamContact from '../assets/team_contact.jpg'
import { contact, isPlaceholderContact } from '../data/contact'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const emptyForm = {
  name: '',
  role: '',
  email: '',
  phone: '',
  org: '',
  message: '',
}

export function ContactPage() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const emailReady = !isPlaceholderContact(contact.publicEmail)
  const phoneReady = !isPlaceholderContact(contact.hotline)

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Vui lòng nhập họ tên.'
    if (!form.email.trim()) next.email = 'Vui lòng nhập email.'
    else if (!emailPattern.test(form.email.trim())) next.email = 'Email không hợp lệ.'
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Nội dung cần ít nhất 10 ký tự.'
    }
    if (!emailReady) {
      next.form = 'Chưa cấu hình email công khai (TODO_PUBLIC_EMAIL). Không thể mở mailto.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e) {
    e.preventDefault()
    setStatus(null)
    if (!validate()) return

    const subject = encodeURIComponent(`[RiceGuardian] Liên hệ từ ${form.name.trim()}`)
    const body = encodeURIComponent(
      [
        `Họ tên: ${form.name.trim()}`,
        `Chức vụ: ${form.role.trim() || '(không ghi)'}`,
        `Email: ${form.email.trim()}`,
        `Điện thoại: ${form.phone.trim() || '(không ghi)'}`,
        `Đơn vị: ${form.org.trim() || '(không ghi)'}`,
        '',
        form.message.trim(),
      ].join('\n'),
    )
    window.location.href = `mailto:${contact.publicEmail}?subject=${subject}&body=${body}`
    setStatus('success')
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
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={`form-control${errors.email ? ' is-invalid' : ''}`}
                      value={form.email}
                      onChange={onChange('email')}
                      autoComplete="email"
                    />
                    {errors.email ? (
                      <div className="invalid-feedback d-block">{errors.email}</div>
                    ) : null}
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
                    Đã mở ứng dụng thư của bạn (mailto). Nếu không thấy cửa sổ thư, hãy kiểm tra trình
                    duyệt hoặc cập nhật email công khai trong dữ liệu liên hệ.
                  </div>
                ) : null}

                <div className="d-flex flex-wrap gap-2 mt-4">
                  <button type="submit" className="rg-btn rg-btn-primary">
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
