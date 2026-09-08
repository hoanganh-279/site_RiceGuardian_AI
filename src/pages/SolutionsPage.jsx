import { solutionsPage } from '../data/pages'
import { landing } from '../data/siteCopy'

export function SolutionsPage() {
  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          <p className="rg-kicker">Giải pháp</p>
          <h1>{solutionsPage.title}</h1>
          <p>{solutionsPage.lead}</p>
        </div>
      </div>
      <section className="rg-section">
        <div className="container">
          <h2 className="rg-section-title">Ba đột phá</h2>
          <div className="rg-feature-grid mb-5">
            {solutionsPage.breakthroughs.map((b) => (
              <article className="rg-panel" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
          <h2 className="rg-section-title">{landing.solution.title}</h2>
          <p className="rg-section-lead">{landing.solution.lead}</p>
          <div className="row g-3">
            {landing.solution.tiers.map((t, i) => (
              <div className="col-md-6" key={t.title}>
                <article className="rg-panel">
                  <span className="rg-panel-num">{i + 1}</span>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
