import { servicesPage } from '../data/pages'

export function ServicesPage() {
  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          <p className="rg-kicker">Dịch vụ</p>
          <h1>{servicesPage.title}</h1>
          <p>{servicesPage.lead}</p>
        </div>
      </div>
      <section className="rg-section">
        <div className="container">
          <div className="rg-step-grid">
            {servicesPage.stages.map((s, i) => (
              <article className="rg-panel" key={s.title}>
                <span className="rg-panel-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
