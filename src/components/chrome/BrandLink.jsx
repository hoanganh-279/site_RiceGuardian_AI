import { Link } from 'react-router-dom'
import logoMark from '../../assets/logo_riceguardianai.png'
import wordmark from '../../assets/RICEGUARDIAN_AI_sharpened_transparent.png'

export function BrandLink({ to = '/', variant = 'light' }) {
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
        width={72}
        height={80}
      />
      {isDark ? (
        <span className="rg-brand-wordtext">RICEGUARDIAN AI</span>
      ) : (
        <img src={wordmark} alt="RiceGuardian AI" className="rg-brand-wordmark" />
      )}
    </Link>
  )
}
