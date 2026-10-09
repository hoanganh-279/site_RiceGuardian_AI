import { Link } from 'react-router-dom'
import { contact, isPlaceholderContact } from '../../data/contact'
import { landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

export function FinalCta() {
  const { finalCta, primaryCta } = landing
  const hasHotline = !isPlaceholderContact(contact.hotline)
  const hasEmail = !isPlaceholderContact(contact.publicEmail)

  return (
    <section className="rg-section rg-section-alt" id="dang-ky">
      <div className="container">
        <Reveal className="rg-cta-band">
          <h2>{finalCta.title}</h2>
          <p>{finalCta.body}</p>
          <div className="rg-cta-band-actions">
            <Link to={primaryCta.to} className="rg-btn rg-btn-secondary rg-btn-cta">
              {primaryCta.label}
            </Link>
            {hasHotline ? (
              <a href={`tel:${contact.hotline}`} className="rg-btn rg-btn-ghost">
                Gọi {contact.hotline}
              </a>
            ) : null}
            {hasEmail ? (
              <a href={`mailto:${contact.publicEmail}`} className="rg-btn rg-btn-ghost">
                Gửi email
              </a>
            ) : null}
          </div>
          <Link to="/trang-chu" className="rg-text-link rg-text-link-light">
            Đi đến trang chủ
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
