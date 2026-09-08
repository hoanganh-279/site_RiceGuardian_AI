import { Link } from 'react-router-dom'
import logoMark from '../../assets/logo_launcher_foreground.png'
import wordmark from '../../assets/splash_branding.png'

export function BrandLink({ to = '/', variant = 'light', showWordmark = false }) {
  const isDark = variant === 'dark'
  return (
    <Link
      to={to}
      className={`rg-brand ${isDark ? 'rg-brand-dark' : 'rg-brand-light'}`}
    >
      <img
        src={logoMark}
        alt=""
        className="rg-brand-logo"
        width={60}
        height={60}
      />
      {showWordmark ? (
        <img
          src={wordmark}
          alt="RiceGuardian AI"
          className="rg-brand-wordmark d-none d-md-block"
        />
      ) : (
        <span className="rg-brand-text">RiceGuardian AI</span>
      )}
    </Link>
  )
}
