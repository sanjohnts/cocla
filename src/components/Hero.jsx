import HeroInk from './svg/HeroInk'
import HeroScene from './svg/HeroScene'
import OptionalPhoto from './OptionalPhoto'
import Petals from './Petals'
import { asset } from '../lib/helpers'
import { IconArrowRight, IconPlay } from './svg/icons'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="heroT">
      <HeroInk />

      <div className="hero-copy reveal">
        <p className="jp-label" lang="ja">日本語を学ぶ・未来を拓く</p>
        <h1 id="heroT">
          Learn Japanese.
          <br />
          <em>Work in Japan.</em>
        </h1>
        <p className="lead">
          JLPT N5 to N3, JFT-Basic and SSW training in Kannur. Classes in Malayalam and English, at our centre or live online.
        </p>
        <p className="ml" lang="ml" style={{ margin: '-14px 0 28px' }}>
          ജപ്പാനിൽ ജോലി നേടാം
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#book">
            Book Free Counselling <IconArrowRight />
          </a>
          <a className="link-play" href="#courses">
            <span className="c">
              <IconPlay />
            </span>
            See the courses
          </a>
        </div>
        <div className="proof">
          <span className="laurel">
            <svg aria-hidden="true">
              <use href="#laurel" />
            </svg>
            <span>100+ students trained</span>
            <svg aria-hidden="true" style={{ transform: 'scaleX(-1)' }}>
              <use href="#laurel" />
            </svg>
          </span>
          <span className="dot" aria-hidden="true" />
          <span className="laurel">20+ now working in Japan</span>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <HeroScene />
        <OptionalPhoto src={asset('hero.jpg')} loading="eager" />
      </div>

      <figure className="hero-photo">
        <img
          src={asset('ccla-team.jpg')}
          alt="The COCLA team at the College of Commerce office in Kannur"
          width="1280"
          height="853"
          decoding="async"
        />
        <figcaption>
          <b>Kerala → Japan</b>
          <span>Language &amp; Skill Training</span>
        </figcaption>
        <svg className="fl" viewBox="-13 -13 26 26" aria-hidden="true">
          <use href="#sk" />
        </svg>
      </figure>

      <svg className="corner-branch" viewBox="0 0 420 280" aria-hidden="true">
        <use href="#br" />
      </svg>
      <Petals />
    </section>
  )
}
