import { landing } from '../../data/siteCopy'
import { mentors } from '../../data/team'
import { Reveal } from './Reveal'

export function PartnersSection() {
  const { socialProof } = landing

  return (
    <section className="rg-section rg-trust-section" id="dong-hanh">
      <div className="container">
        <Reveal>
          <p className="rg-kicker">Đồng hành</p>
          <h2 className="rg-section-title">{socialProof.title}</h2>
          <p className="rg-section-lead">{socialProof.lead}</p>
        </Reveal>
        <div className="rg-trust-layout">
          <Reveal className="rg-trust-mentors">
            <h3>{socialProof.mentorsTitle}</h3>
            <ul>
              {mentors.map((m) => (
                <li key={m.id}>
                  <img
                    src={m.photo}
                    alt={`Chân dung ${m.name}`}
                    width={72}
                    height={72}
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="rg-trust-name">{m.name}</p>
                    <p className="rg-trust-role">{m.major}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <ul className="rg-point-list rg-trust-points">
            {socialProof.items.map((item, i) => (
              <Reveal as="li" delay={80 + i * 60} key={item.title}>
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
