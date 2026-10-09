import { landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

export function ProblemSection() {
  const { problem } = landing

  return (
    <section className="rg-section rg-snap" id="van-de">
      <div className="container">
        <div className="rg-problem-grid">
          <Reveal>
            <p className="rg-kicker">Vấn đề</p>
            <h2 className="rg-section-title">{problem.title}</h2>
            <p className="rg-section-lead mb-0">{problem.lead}</p>
          </Reveal>
          <ul className="rg-point-list rg-point-list-pain">
            {problem.items.map((item, i) => (
              <Reveal as="li" delay={120 + i * 80} key={item.title}>
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
