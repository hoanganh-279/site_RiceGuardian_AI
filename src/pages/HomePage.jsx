import { Link } from 'react-router-dom'
import { homePage } from '../data/siteCopy'
import { siteNav } from '../data/nav'

export function HomePage() {
  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          <p className="rg-kicker">Trang chủ</p>
          <h1>{homePage.title}</h1>
          <p>{homePage.mission}</p>
        </div>
      </div>
      <section className="rg-section">
        <div className="container">
          <h2 className="rg-section-title">Tầm nhìn</h2>
          <p className="rg-section-lead">{homePage.vision}</p>
          <h2 className="rg-section-title">Giá trị cốt lõi</h2>
          <div className="rg-feature-grid mb-5">
            {homePage.pillars.map((p) => (
              <article className="rg-panel" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
          <h2 className="rg-section-title">Khám phá thêm</h2>
          <div className="d-flex flex-wrap gap-2">
            {siteNav
              .filter((n) => n.to !== '/trang-chu')
              .map((n) => (
                <Link key={n.to} to={n.to} className="rg-btn rg-btn-outline">
                  {n.label}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
