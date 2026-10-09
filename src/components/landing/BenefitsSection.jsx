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
        <div className="rg-benefit-layout">
          <Reveal className="rg-benefit-highlight">
            <p className="rg-benefit-figure">{benefits.figure}</p>
            <p className="rg-benefit-label">{benefits.figureLabel}</p>
            <p className="rg-benefit-note">{benefits.figureNote}</p>
          </Reveal>
          <ul className="rg-point-list">
            {benefits.items.map((item, i) => (
              <Reveal as="li" delay={80 + i * 80} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
