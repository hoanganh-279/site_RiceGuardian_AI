import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { siteNav } from '../../data/nav'
import { BrandLink } from './BrandLink'
import { LoginButton } from './LoginButton'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="rg-site-header">
      <nav className="navbar navbar-expand-lg container py-2">
        <BrandLink to="/trang-chu" variant="dark" showWordmark />
        <button
          type="button"
          className="rg-navbar-toggler d-lg-none"
          aria-label="Mở menu điều hướng"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">☰</span>
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-lg-auto me-lg-3 gap-lg-1">
            {siteNav.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link rg-nav-link${isActive ? ' active' : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <LoginButton />
        </div>
      </nav>
    </header>
  )
}
