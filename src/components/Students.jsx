import { site } from '../data/site'
import { asset } from '../lib/helpers'

export default function Students() {
  return (
    <section className="sec" id="students" aria-labelledby="stuT" style={{ paddingTop: 'clamp(50px,6vw,80px)' }}>
      <div className="students wrap">
        <div className="s-intro reveal">
          <p className="label">Real journeys</p>
          <h2 id="stuT">Our Students&apos; Japan Journeys</h2>
          <p>From first Hiragana in Kannur to the arrivals board in Japan. A few of the students who made the move.</p>
          <span className="pill-stat">
            <b>20+</b>students now working in Japan
          </span>
        </div>
        <div className="s-cards reveal">
          {site.students.map((s, i) => (
            <figure className="s-card" key={s.image}>
              <img
                src={asset(s.image)}
                alt={s.alt}
                style={s.objectPosition ? { objectPosition: s.objectPosition } : undefined}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <h3>{s.title}</h3>
                <p>{s.caption}</p>
              </figcaption>
              {i !== 1 && (
                <svg className="fl" viewBox="-13 -13 26 26" aria-hidden="true">
                  <use href="#sk" />
                </svg>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
