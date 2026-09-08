import { Link } from 'react-router-dom'
import monitoringStation from '../../assets/monitoring_station.png'
import { landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

const icons = ['station', 'app', 'web']

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
        <div className="rg-product-layout">
          <Reveal className="rg-product-stage">
            <div className="rg-product-frame">
              <img
                src={monitoringStation}
                alt="Trạm quan trắc RiceGuardian AI"
                className="rg-product-shot"
              />
            </div>
            <p className="rg-product-caption">{product.hardwareNote}</p>
            <ul className="rg-sensor-list" aria-label="Chỉ số cảm biến">
              {product.sensors.map((sensor) => (
                <li key={sensor}>{sensor}</li>
              ))}
            </ul>
          </Reveal>
          <div className="rg-product-cards">
            {product.items.map((item, i) => (
              <Reveal
                as="article"
                className="rg-panel rg-product-card"
                delay={i * 80}
                key={item.title}
              >
                <span className={`rg-ico rg-ico-${icons[i] || 'station'}`} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={240}>
              <p className="rg-status-note">{product.status}</p>
              <Link to="/san-pham" className="rg-btn rg-btn-outline">
                Xem chi tiết sản phẩm
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
