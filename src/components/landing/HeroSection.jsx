import { Link } from 'react-router-dom'
import wordmark from '../../assets/RICEGUARDIAN_AI_sharpened_transparent.png'
import heroBg from '../../assets/login_background.jpg'
import { landing } from '../../data/siteCopy'

export function HeroSection() {
  return (
    <section className="rg-hero rg-snap" aria-label="Giới thiệu RiceGuardian AI">
      <div
        className="rg-hero-media"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Cánh đồng lúa lúc bình minh"
      />
      <div className="rg-hero-overlay" aria-hidden="true" />
      <div className="container rg-hero-content">
        <img
          src={wordmark}
          alt="RiceGuardian AI"
          className="rg-hero-wordmark"
        />
        <h1 className="rg-hero-headline">{landing.heroHeadline}</h1>
        <p className="rg-hero-support">{landing.heroSupport}</p>
        <div className="rg-hero-ctas">
          <Link to={landing.primaryCta.to} className="rg-btn rg-btn-secondary rg-btn-cta">
            {landing.primaryCta.label}
          </Link>
          <a href={landing.heroSecondary.href} className="rg-btn rg-btn-ghost">
            {landing.heroSecondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}
