import { faqItems } from '../../data/siteCopy'
import { Reveal } from './Reveal'

export function FaqSection() {
  return (
    <section className="rg-section" id="faq">
      <div className="container">
        <Reveal>
          <p className="rg-kicker">FAQ</p>
          <h2 className="rg-section-title">Câu hỏi thường gặp</h2>
        </Reveal>
        <div className="rg-faq">
          {faqItems.map((item, i) => (
            <Reveal as="details" delay={i * 60} key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
