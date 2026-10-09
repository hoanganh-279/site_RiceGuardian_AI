import { Link } from 'react-router-dom'
import wordmark from '../../assets/RICEGUARDIAN_AI_sharpened_transparent.png'
import heroBg from '../../assets/login_background.jpg'
import { brand, homePage, landing } from '../../data/siteCopy'

export function HomeHero() {
  return (
    <section className="rg-home-hero" aria-label="Giới thiệu RiceGuardian AI">
      <div
        className="rg-home-hero-media"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Cánh đồng lúa lúc bình minh"
      />
      <div className="rg-hero-overlay" aria-hidden="true" />
      <div className="container rg-home-hero-content">
        <img src={wordmark} alt="RiceGuardian AI" className="rg-home-hero-wordmark" />
        <h1 className="rg-home-hero-headline">{brand.tagline}</h1>
        <p className="rg-home-hero-support">{landing.heroSupport}</p>
        <div className="rg-hero-ctas">
          <Link to={landing.primaryCta.to} className="rg-btn rg-btn-secondary rg-btn-cta">
            {landing.primaryCta.label}
          </Link>
          <Link to={homePage.hero.secondaryCta.to} className="rg-btn rg-btn-ghost">
            {homePage.hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
