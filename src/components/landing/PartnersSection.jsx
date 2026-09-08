import { landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

export function PartnersSection() {
  const { socialProof } = landing

  return (
    <section className="rg-section" id="dong-hanh">
      <div className="container">
        <Reveal>
          <p className="rg-kicker">Đồng hành</p>
          <h2 className="rg-section-title">{socialProof.title}</h2>
          <p className="rg-section-lead">{socialProof.lead}</p>
        </Reveal>
        <div className="rg-feature-grid">
          {socialProof.items.map((item, i) => (
            <Reveal as="article" className="rg-panel" delay={i * 80} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
