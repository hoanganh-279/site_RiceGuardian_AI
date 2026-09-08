import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrandLink } from './BrandLink'
import { LoginButton } from './LoginButton'

const landingNav = [
  { href: '/gioi-thieu', label: 'Giới thiệu' },
  { href: '#van-de', label: 'Vấn đề' },
  { href: '#giai-phap', label: 'Giải pháp' },
  { href: '#san-pham', label: 'Sản phẩm' },
  { href: '#dich-vu', label: 'Dịch vụ' },
  { href: '#bang-gia', label: 'Bảng giá' },
  { href: '/tin-tuc', label: 'Tin tức' },
]

function NavItem({ href, label, onNavigate }) {
  const className = 'nav-link rg-nav-link rg-landing-nav-link'
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className} onClick={onNavigate}>
        {label}
      </a>
    )
  }
  return (
    <Link to={href} className={className} onClick={onNavigate}>
      {label}
    </Link>
  )
}

export function LandingHeader() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="rg-landing-header">
      <nav className="navbar navbar-expand-lg container py-2" aria-label="Điều hướng landing">
        <BrandLink to="/" variant="light" />
        <button
          type="button"
          className="rg-navbar-toggler d-lg-none"
          aria-label={open ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-lg-auto me-lg-2 gap-lg-0">
            {landingNav.map((item) => (
              <li className="nav-item" key={item.href}>
                <NavItem href={item.href} label={item.label} onNavigate={close} />
              </li>
            ))}
          </ul>
          <div className="rg-header-actions">
            <Link to="/lien-he" className="rg-btn rg-btn-secondary" onClick={close}>
              Liên hệ
            </Link>
            <LoginButton ghost compact />
          </div>
        </div>
      </nav>
    </header>
  )
}
