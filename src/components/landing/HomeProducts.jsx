import { Link } from 'react-router-dom'
import monitoringStation from '../../assets/monitoring_station.png'
import shotMobile from '../../assets/product/sp_mobile.png'
import shotDashboard from '../../assets/product/sp_dashboard.png'
import { homePage, landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

const images = [
  {
    src: monitoringStation,
    alt: 'Trạm quan trắc RiceGuardian AI',
  },
  {
    src: shotMobile,
    alt: 'Màn hình kết quả nhận diện bệnh trên ứng dụng di động RiceGuardian AI',
  },
  {
    src: shotDashboard,
    alt: 'Màn hình tổng quan trang quản trị RiceGuardian AI với bản đồ cảnh báo nguy cơ',
  },
]

export function HomeProducts() {
  const { products } = homePage
  const { product } = landing

  return (
    <section className="rg-section" id="san-pham" aria-labelledby="rg-home-products-title">
      <div className="container">
        <Reveal className="rg-home-head-center">
          <p className="rg-kicker">{products.kicker}</p>
          <h2 className="rg-section-title" id="rg-home-products-title">
            {products.title}
          </h2>
          <p className="rg-section-lead">{products.lead}</p>
        </Reveal>
        <ul className="rg-home-products">
          {product.items.map((item, i) => (
            <Reveal as="li" delay={i * 80} key={item.title}>
              <figure className="rg-home-product-media">
                <img
                  src={images[i].src}
                  alt={images[i].alt}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="rg-home-product-copy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <div className="rg-home-section-foot">
          <p className="rg-status-note">{product.status}</p>
          <Link to={products.link.to} className="rg-text-link">
            {products.link.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
