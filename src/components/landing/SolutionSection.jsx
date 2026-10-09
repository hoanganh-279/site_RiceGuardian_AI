import { landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

export function SolutionSection() {
  const { solution } = landing

  return (
    <section className="rg-section rg-section-alt rg-snap" id="giai-phap">
      <div className="container">
        <Reveal>
          <p className="rg-kicker">Giải pháp</p>
          <h2 className="rg-section-title">{solution.title}</h2>
          <p className="rg-section-lead">{solution.lead}</p>
        </Reveal>
        <ol className="rg-tier-track">
          {solution.tiers.map((tier, i) => (
            <Reveal as="li" className="rg-tier-card" delay={i * 90} key={tier.title}>
              <span className="rg-panel-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{tier.title}</h3>
              <p>{tier.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
