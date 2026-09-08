import { Link } from 'react-router-dom'
import { landing } from '../../data/siteCopy'
import { Reveal } from './Reveal'

export function FinalCta() {
  const { finalCta } = landing

  return (
    <section className="rg-section rg-section-alt">
      <div className="container">
        <Reveal className="rg-cta-band">
          <h2>{finalCta.title}</h2>
          <p>{finalCta.body}</p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <Link to="/trang-chu" className="rg-btn rg-btn-secondary">
              Đi đến trang chủ
            </Link>
            <Link to="/lien-he" className="rg-btn rg-btn-ghost">
              Liên hệ
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
