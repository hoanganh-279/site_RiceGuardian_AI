import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { landing } from '../../data/siteCopy'

const HIDE_WHEN_VISIBLE = '.rg-hero, #dang-ky, .rg-footer'

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const targets = document.querySelectorAll(HIDE_WHEN_VISIBLE)
    if (!targets.length || typeof IntersectionObserver === 'undefined') return undefined

    const onScreen = new Set()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onScreen.add(entry.target)
        else onScreen.delete(entry.target)
      })
      setVisible(onScreen.size === 0)
    })
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`rg-mobile-cta d-lg-none${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <Link
        to={landing.primaryCta.to}
        className="rg-btn rg-btn-secondary rg-btn-cta"
        tabIndex={visible ? undefined : -1}
      >
        {landing.primaryCta.label}
      </Link>
    </div>
  )
}
