import { landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

export function PillarsSection() {
  const { features } = landing

  return (
    <section className="rg-section rg-section-ink rg-snap" id="cong-nghe" aria-labelledby="pillars-title">
      <div className="container">
        <Reveal>
          <p className="rg-kicker rg-kicker-light">Công nghệ</p>
          <h2 className="rg-section-title" id="pillars-title">
            {features.title}
          </h2>
        </Reveal>
        <div className="rg-pillar-grid">
          {features.items.map((item, i) => (
            <Reveal as="article" className="rg-pillar-card" delay={i * 80} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
