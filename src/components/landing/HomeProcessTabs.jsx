import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { servicesPage } from '../../data/pages'
import { homePage } from '../../data/siteCopy'
import { Reveal } from './Reveal'

function splitStage(title) {
  const [step, ...rest] = title.split(' — ')
  return { step, label: rest.join(' — ') || step }
}

export function HomeProcessTabs() {
  const { process } = homePage
  const stages = servicesPage.stages.map((s) => ({ ...s, ...splitStage(s.title) }))
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])

  function focusTab(index) {
    const next = (index + stages.length) % stages.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      focusTab(active + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      focusTab(active - 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      focusTab(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      focusTab(stages.length - 1)
    }
  }

  return (
    <section
      className="rg-section rg-section-alt"
      id="quy-trinh"
      aria-labelledby="rg-home-process-title"
    >
      <div className="container">
        <Reveal className="rg-home-head-center">
          <p className="rg-kicker">{process.kicker}</p>
          <h2 className="rg-section-title" id="rg-home-process-title">
            {process.title}
          </h2>
          <p className="rg-section-lead">{servicesPage.lead}</p>
        </Reveal>

        <Reveal className="rg-home-tabs d-none d-md-block">
          <div className="rg-home-tablist" role="tablist" aria-label={process.title}>
            {stages.map((s, i) => (
              <button
                key={s.title}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                type="button"
                role="tab"
                id={`rg-home-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`rg-home-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                className={`rg-home-tab${active === i ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                onKeyDown={onKeyDown}
              >
                <span className="rg-home-tab-step">{s.step}</span>
                <span className="rg-home-tab-label">{s.label}</span>
              </button>
            ))}
          </div>
          {stages.map((s, i) => (
            <div
              key={s.title}
              role="tabpanel"
              id={`rg-home-panel-${i}`}
              aria-labelledby={`rg-home-tab-${i}`}
              hidden={active !== i}
              className="rg-home-tabpanel"
            >
              <p className="rg-kicker">{s.step}</p>
              <h3>{s.label}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </Reveal>

        <ol className="rg-home-steps d-md-none">
          {stages.map((s) => (
            <li key={s.title}>
              <p className="rg-kicker">{s.step}</p>
              <h3>{s.label}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="rg-home-section-foot">
          <Link to={process.link.to} className="rg-text-link">
            {process.link.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
