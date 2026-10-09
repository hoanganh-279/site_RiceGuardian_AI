import { Link } from 'react-router-dom'
import monitoringStation from '../../assets/monitoring_station.png'
import shotMobile from '../../assets/product/sp_mobile.png'
import shotDashboard from '../../assets/product/sp_dashboard.png'
import { landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

const shots = {
  mobile: {
    src: shotMobile,
    width: 282,
    height: 376,
    alt: 'Màn hình kết quả nhận diện bệnh trên ứng dụng di động RiceGuardian AI',
  },
  dashboard: {
    src: shotDashboard,
    width: 574,
    height: 376,
    alt: 'Màn hình tổng quan trang quản trị RiceGuardian AI với bản đồ cảnh báo nguy cơ',
  },
}

export function ProductSection() {
  const { product } = landing

  return (
    <section className="rg-section rg-product-section rg-snap" id="san-pham">
      <div className="container">
        <Reveal>
          <p className="rg-kicker">Sản phẩm</p>
          <h2 className="rg-section-title">{product.title}</h2>
          <p className="rg-section-lead">{product.lead}</p>
        </Reveal>

        {product.showcases.map((item, i) => {
          const shot = shots[item.id]
          return (
            <div
              className={`rg-showcase${i % 2 === 1 ? ' is-reversed' : ''} rg-showcase-${item.id}`}
              key={item.id}
            >
              <Reveal as="figure" className="rg-showcase-media">
                <img
                  src={shot.src}
                  width={shot.width}
                  height={shot.height}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{product.screenshotNote}</figcaption>
              </Reveal>
              <Reveal className="rg-showcase-copy" delay={100}>
                <p className="rg-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <ul className="rg-check-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )
        })}

        <Reveal className="rg-station-row">
          <img
            src={monitoringStation}
            width={261}
            height={291}
            alt="Trạm quan trắc RiceGuardian AI"
            loading="lazy"
            decoding="async"
            className="rg-station-shot"
          />
          <div>
            <p className="rg-kicker">{product.items[0].title}</p>
            <p className="rg-station-note">{product.hardwareNote}</p>
            <ul className="rg-sensor-list" aria-label="Chỉ số cảm biến">
              {product.sensors.map((sensor) => (
                <li key={sensor}>{sensor}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="rg-product-footer">
          <p className="rg-status-note">{product.status}</p>
          <Link to="/san-pham" className="rg-text-link">
            Xem chi tiết sản phẩm
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
