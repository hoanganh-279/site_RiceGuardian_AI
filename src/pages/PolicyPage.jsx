import { policyPage } from '../data/pages'

export function PolicyPage() {
  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          <p className="rg-kicker">Chính sách</p>
          <h1>{policyPage.title}</h1>
          <p>{policyPage.lead}</p>
        </div>
      </div>
      <section className="rg-section" id="hau-mai">
        <div className="container">
          <h2 className="rg-section-title">Bán hàng & hậu mãi</h2>
          <div className="rg-feature-grid mb-5">
            {policyPage.sales.map((s) => (
              <article className="rg-panel" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <h2 className="rg-section-title" id="khuyen-mai">
            Khuyến mãi & kích cầu
          </h2>
          <div className="rg-feature-grid">
            {policyPage.promotions.map((p) => (
              <article className="rg-panel" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
