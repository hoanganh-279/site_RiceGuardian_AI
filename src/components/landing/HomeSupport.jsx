import { Link } from 'react-router-dom'
import { contact, isPlaceholderContact } from '../../data/contact'
import { homePage, landing } from '../../data/siteCopy'
import { HomeIcon } from './HomeIcon'
import { Reveal } from './Reveal'

export function HomeCtaBand() {
  const { ctaBand } = homePage
  const hasHotline = !isPlaceholderContact(contact.hotline)

  return (
    <section className="rg-home-cta" aria-labelledby="rg-home-cta-title">
      <div className="container rg-home-cta-inner">
        <div>
          <h2 id="rg-home-cta-title">{ctaBand.title}</h2>
          <p>{ctaBand.body}</p>
        </div>
        <div className="rg-home-cta-actions">
          {hasHotline ? (
            <a href={`tel:${contact.hotline}`} className="rg-btn rg-btn-secondary rg-btn-cta">
              Gọi {contact.hotline}
            </a>
          ) : null}
          <Link to={landing.primaryCta.to} className="rg-btn rg-btn-ghost">
            {landing.primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function HomeSupport() {
  const { support } = homePage
  const hasHotline = !isPlaceholderContact(contact.hotline)
  const hasEmail = !isPlaceholderContact(contact.publicEmail)

  return (
    <section
      className="rg-section rg-section-alt"
      id="ho-tro"
      aria-labelledby="rg-home-support-title"
    >
      <div className="container">
        <Reveal className="rg-home-head-center">
          <p className="rg-kicker">{support.kicker}</p>
          <h2 className="rg-section-title" id="rg-home-support-title">
            {support.title}
          </h2>
        </Reveal>
        <div className="rg-home-support">
          {hasHotline ? (
            <Reveal className="rg-home-support-item">
              <span className="rg-home-tech-icon">
                <HomeIcon name="call" />
              </span>
              <h3>{support.callTitle}</h3>
              <p>{support.callBody}</p>
              <a href={`tel:${contact.hotline}`} className="rg-btn rg-btn-primary">
                {contact.hotline}
              </a>
            </Reveal>
          ) : null}
          <Reveal className="rg-home-support-item" delay={80}>
            <span className="rg-home-tech-icon">
              <HomeIcon name="mail" />
            </span>
            <h3>{support.messageTitle}</h3>
            <p>{contact.note}</p>
            <div className="rg-home-support-actions">
              <Link to={support.messageCta.to} className="rg-btn rg-btn-primary">
                {support.messageCta.label}
              </Link>
              {hasEmail ? (
                <a href={`mailto:${contact.publicEmail}`} className="rg-text-link">
                  {contact.publicEmail}
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
