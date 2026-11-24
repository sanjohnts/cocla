import { site } from '../data/site'
import { whatsappUrl } from '../lib/helpers'
import { IconWhatsApp } from './svg/icons'

export default function Faq() {
  return (
    <section className="sec" id="faq" aria-labelledby="faqT" style={{ paddingTop: 0 }}>
      <div className="faq-grid wrap">
        <div className="faq-side reveal">
          <p className="label">Questions</p>
          <h2 id="faqT">Frequently Asked</h2>
          <p>Still unsure? Free counselling answers everything for your situation.</p>
          <a className="btn btn-ghost" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <IconWhatsApp />
            Chat on WhatsApp
          </a>
        </div>
        <div className="faq-list reveal">
          {site.faq.map((item) => (
            <details key={item.q}>
              <summary>
                {item.q}
                <span className="pm" aria-hidden="true" />
              </summary>
              <p className="a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
