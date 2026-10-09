import { Link } from 'react-router-dom'
import monitoringStation from '../assets/monitoring_station.png'
import shotMobile from '../assets/product/sp_mobile.png'
import shotDashboard from '../assets/product/sp_dashboard.png'
import { productPage } from '../data/pages'
import { landing } from '../data/siteCopy'
import { Reveal } from '../components/landing/Reveal'

const [twoTierModel, mobileApp, webAdmin] = productPage.software
const showcasePoints = Object.fromEntries(
  landing.product.showcases.map((s) => [s.id, s.points]),
)

const softwareShowcases = [
  {
    id: 'mobile',
    kicker: 'Dành cho nông dân',
    ...mobileApp,
    points: showcasePoints.mobile,
    img: {
      src: shotMobile,
      width: 282,
      height: 376,
      alt: 'Màn hình kết quả nhận diện bệnh trên ứng dụng di động RiceGuardian AI',
    },
  },
  {
    id: 'dashboard',
    kicker: 'Dành cho hợp tác xã / doanh nghiệp',
    ...webAdmin,
    points: showcasePoints.dashboard,
    img: {
      src: shotDashboard,
      width: 574,
      height: 376,
      alt: 'Màn hình tổng quan trang quản trị RiceGuardian AI với bản đồ cảnh báo nguy cơ',
    },
  },
]

export function ProductPage() {
  return (
    <>
      <div className="rg-page-hero">
        <div className="container">
          <p className="rg-kicker">Sản phẩm</p>
          <h1>{productPage.title}</h1>
          <p>{productPage.lead}</p>
          <nav className="rg-product-jump" aria-label="Danh mục sản phẩm">
            <a href="#phan-mem" className="rg-btn rg-btn-primary">
              Phần mềm
            </a>
            <a href="#phan-cung" className="rg-btn rg-btn-outline">
              Phần cứng
            </a>
          </nav>
        </div>
      </div>

      <section className="rg-section rg-product-anchor" id="phan-mem" aria-labelledby="rg-sw-title">
        <div className="container">
          <Reveal className="rg-product-intro">
            <p className="rg-kicker">Phần mềm</p>
            <h2 className="rg-section-title" id="rg-sw-title">
              {twoTierModel.title}
            </h2>
            <p className="rg-section-lead">{twoTierModel.body}</p>
          </Reveal>

          {softwareShowcases.map((item, i) => (
            <div
              className={`rg-showcase${i % 2 === 1 ? ' is-reversed' : ''} rg-showcase-${item.id}`}
              key={item.id}
            >
              <Reveal as="figure" className="rg-showcase-media">
                <img
                  src={item.img.src}
                  width={item.img.width}
                  height={item.img.height}
                  alt={item.img.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{landing.product.screenshotNote}</figcaption>
              </Reveal>
              <Reveal className="rg-showcase-copy" delay={100}>
                <p className="rg-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p className="rg-product-body">{item.body}</p>
                <ul className="rg-check-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section
        className="rg-section rg-section-alt rg-product-anchor"
        id="phan-cung"
        aria-labelledby="rg-hw-title"
      >
        <div className="container">
          <div className="rg-split">
            <Reveal as="figure" className="rg-showcase-media mb-0">
              <img
                src={monitoringStation}
                alt="Trạm quan trắc RiceGuardian AI với tấm pin mặt trời và cảm biến"
                className="rg-product-shot"
                loading="lazy"
                decoding="async"
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="rg-kicker">Phần cứng</p>
              <h2 className="rg-section-title" id="rg-hw-title">
                {productPage.hardware[0].title}
              </h2>
              <p className="rg-product-body">{productPage.hardware[0].body}</p>
              <ul className="rg-sensor-list mb-4" aria-label="Chỉ số cảm biến">
                {landing.product.sensors.map((sensor) => (
                  <li key={sensor}>{sensor}</li>
                ))}
              </ul>
              <h3 className="rg-product-subtitle">{productPage.hardware[1].title}</h3>
              <p className="rg-product-body mb-0">{productPage.hardware[1].body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="rg-section">
        <div className="container rg-product-footer-row">
          <p className="rg-status-note mb-0">{productPage.statusNote}</p>
          <Link to={landing.primaryCta.to} className="rg-btn rg-btn-secondary rg-btn-cta">
            {landing.primaryCta.label}
          </Link>
        </div>
      </section>
    </>
  )
}
