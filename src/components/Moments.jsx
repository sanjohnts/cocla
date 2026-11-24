import { site } from '../data/site'
import { asset } from '../lib/helpers'

export default function Moments() {
  return (
    <section className="sec" id="moments" aria-labelledby="momT" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="center reveal">
          <p className="label">Moments at COCLA</p>
          <h2 id="momT">Events &amp; Partnerships</h2>
          <p className="lead">Job fairs, seminars and visits that connect our students with Japan.</p>
        </div>
        <div className="moments reveal">
          {site.moments.map((m) => (
            <figure className={`m ${m.slot}`} key={m.slot}>
              <img
                src={asset(m.image)}
                alt={m.alt}
                style={m.objectPosition ? { objectPosition: m.objectPosition } : undefined}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>{m.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
