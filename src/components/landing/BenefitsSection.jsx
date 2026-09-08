import { landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

export function BenefitsSection() {
  const { benefits } = landing

  return (
    <section className="rg-section rg-snap" id="loi-ich">
      <div className="container">
        <Reveal>
          <p className="rg-kicker">Lợi ích</p>
          <h2 className="rg-section-title">{benefits.title}</h2>
          <p className="rg-section-lead">{benefits.lead}</p>
        </Reveal>
        <div className="rg-benefit-grid">
          {benefits.items.map((item, i) => (
            <Reveal as="article" className="rg-panel rg-benefit-card" delay={i * 80} key={item.title}>
              {i === 0 ? (
                <p className="rg-benefit-figure">
                  <span>{benefits.figure}</span>
                </p>
              ) : (
                <span className="rg-panel-num" aria-hidden="true">
                  {i + 1}
                </span>
              )}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {i === 0 ? <p className="rg-benefit-note">{benefits.figureNote}</p> : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
