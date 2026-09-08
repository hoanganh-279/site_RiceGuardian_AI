import { pricingPackages, pricingDisclaimer } from '../../data/pricing'
import { Reveal } from './Reveal'

export function PricingSection() {
  return (
    <section className="rg-section rg-section-alt" id="bang-gia">
      <div className="container">
        <Reveal>
          <p className="rg-kicker">Bảng giá</p>
          <h2 className="rg-section-title">Hai gói dịch vụ theo quy mô</h2>
          <p className="rg-section-lead">{pricingDisclaimer}</p>
        </Reveal>
        <div className="rg-pricing-grid" id="bang-gia">
          {pricingPackages.map((pkg, i) => (
            <Reveal
              as="article"
              key={pkg.id}
              delay={i * 80}
              className={`rg-pricing-card${pkg.featured ? ' is-featured' : ''}`}
            >
              <h3>{pkg.name}</h3>
              <p className="rg-price-note">{pkg.subtitle}</p>
              <table className="rg-price-table">
                <tbody>
                  {pkg.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="rg-price-note mb-0">{pkg.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
