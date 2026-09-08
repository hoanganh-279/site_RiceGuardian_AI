import { Link } from 'react-router-dom'
import { brand } from '../../data/siteCopy'
import { siteNav, footerSupportLinks } from '../../data/nav'
import { contact, isPlaceholderContact } from '../../data/contact'
import { BrandLink } from './BrandLink'

export function SiteFooter() {
  const emailReady = !isPlaceholderContact(contact.publicEmail)
  const phoneReady = !isPlaceholderContact(contact.hotline)

  return (
    <footer className="rg-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <BrandLink to="/" variant="light" />
            <p className="mt-3 mb-0" style={{ color: 'rgba(255,255,255,0.72)', fontSize: '0.95rem' }}>
              {brand.shortDescription}
            </p>
          </div>
          <div className="col-6 col-lg-3">
            <h2 className="rg-footer-title">Liên kết</h2>
            <ul className="rg-footer-list">
              {siteNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h2 className="rg-footer-title">Hỗ trợ</h2>
            <ul className="rg-footer-list">
              {footerSupportLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-3">
            <h2 className="rg-footer-title">Liên hệ</h2>
            <ul className="rg-footer-list">
              <li>
                {emailReady ? (
                  <a href={`mailto:${contact.publicEmail}`}>{contact.publicEmail}</a>
                ) : (
                  <span>{contact.publicEmail}</span>
                )}
              </li>
              <li>
                {phoneReady ? (
                  <a href={`tel:${contact.hotline}`}>{contact.hotline}</a>
                ) : (
                  <span>{contact.hotline}</span>
                )}
              </li>
              <li>{contact.address}</li>
              <li>
                <Link to="/lien-he">Form liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="rg-footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>© {new Date().getFullYear()} {brand.name}</span>
          <span>Website giới thiệu sản phẩm</span>
        </div>
      </div>
    </footer>
  )
}
