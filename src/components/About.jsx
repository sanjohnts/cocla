import OptionalPhoto from './OptionalPhoto'
import AboutInk from './svg/AboutInk'
import AboutDeco from './svg/AboutDeco'
import { asset } from '../lib/helpers'
import { IconArrowRight, IconAward, IconUsers, IconPlane, IconCap } from './svg/icons'

const STATS = [
  { Icon: IconAward, value: '35+', label: 'Years in education' },
  { Icon: IconUsers, value: '100+', label: 'Students trained' },
  { Icon: IconPlane, value: '20+', label: 'Now in Japan' },
  { Icon: IconCap, value: '75%', label: 'JLPT / JFT pass rate' },
]

export default function About() {
  return (
    <section className="sec about" id="about" aria-labelledby="aboutT">
      <div className="about-visual reveal" aria-hidden="true">
        <OptionalPhoto src={asset('about-wood.jpg')} srcMobile={asset('about-wood-mobile.jpg')} />
        <div className="medallion">
          <img src={asset('ccla-logo.jpg')} alt="" width="256" height="256" loading="lazy" />
        </div>
        <svg className="bl" viewBox="0 0 420 280">
          <use href="#br" />
        </svg>
      </div>
      <AboutInk />
      <div className="about-copy reveal">
        <AboutDeco />
        <p className="label">Meet the academy</p>
        <h2 id="aboutT">College of Commerce Language Academy</h2>
        <p className="sub">JLPT · JFT-Basic · SSW · Kannur, Kerala</p>
        <p>
          COCLA is the Japanese language and skill-training centre of College of Commerce, Kannur, an institution that has been
          teaching since 1990. We take you from your first Hiragana to a JLPT or JFT-Basic certificate, prepare you for the SSW
          skill test, and get you ready for employer interviews. COE and visa paperwork is guided through our partner{' '}
          <strong>Astro Academy</strong>, an NSDC-authorized Sending Organisation for Japan.
        </p>
        <div className="stats">
          {STATS.map(({ Icon, value, label }) => (
            <div className="stat" key={label}>
              <Icon />
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p className="promise">
          We don&apos;t promise jobs. We prepare you properly.
          <small>Japanese employers make the final hiring decision. Our job is to make you ready for it.</small>
        </p>
        <a className="btn btn-ghost" href="#book">
          Talk to a Counsellor <IconArrowRight />
        </a>
      </div>
    </section>
  )
}
