import { Link } from 'react-router-dom'
import { landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

export function ServiceTimeline() {
  const { howItWorks } = landing

  return (
    <section className="rg-section rg-section-alt rg-service-section rg-snap" id="dich-vu">
      <div className="container">
        <Reveal>
          <p className="rg-kicker">Dịch vụ</p>
          <h2 className="rg-section-title">{howItWorks.title}</h2>
          <p className="rg-section-lead">
            Bốn giai đoạn từ tiếp nhận nhu cầu đến vận hành và bảo trì — theo quy trình trong thuyết minh dự án.
          </p>
        </Reveal>
        <ol className="rg-timeline">
          {howItWorks.steps.map((step, i) => (
            <Reveal as="li" className="rg-timeline-step" delay={i * 80} key={step.title}>
              <span className="rg-timeline-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={160}>
          <Link to="/dich-vu" className="rg-btn rg-btn-outline">
            Xem quy trình dịch vụ
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
