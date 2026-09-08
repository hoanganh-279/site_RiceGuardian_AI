import monitoringStation from '../assets/monitoring_station.png'
import { productPage } from '../data/pages'

export function ProductPage() {
  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          <p className="rg-kicker">Sản phẩm</p>
          <h1>{productPage.title}</h1>
          <p>{productPage.lead}</p>
        </div>
      </div>
      <section className="rg-section">
        <div className="container">
          <div className="rg-split mb-5">
            <img
              src={monitoringStation}
              alt="Trạm quan trắc RiceGuardian AI với tấm pin mặt trời và cảm biến"
              className="rg-product-shot"
            />
            <div>
              <h2 className="rg-section-title">Phần cứng</h2>
              <ul className="rg-list-check mb-3">
                {productPage.hardware.map((h) => (
                  <li key={h.title}>
                    <strong>{h.title}.</strong> {h.body}
                  </li>
                ))}
              </ul>
              <p className="rg-section-lead mb-0">{productPage.statusNote}</p>
            </div>
          </div>
          <h2 className="rg-section-title">Phần mềm</h2>
          <div className="rg-feature-grid">
            {productPage.software.map((s) => (
              <article className="rg-panel" key={s.title}>
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
