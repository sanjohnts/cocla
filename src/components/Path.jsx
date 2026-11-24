import { useRef } from 'react'
import { site } from '../data/site'
import { prefersReducedMotion } from '../lib/helpers'
import { IconArrowLeft, IconArrowRight } from './svg/icons'

export default function Path() {
  const list = useRef(null)
  const scroll = (dir) => {
    const el = list.current
    const card = el.querySelector('.step')
    const left = el.scrollLeft + dir * (card.offsetWidth + 18)
    // Next frame: a smooth scroll begun inside React's click handling gets cancelled.
    requestAnimationFrame(() => el.scrollTo({ left, behavior: prefersReducedMotion() ? 'auto' : 'smooth' }))
  }

  return (
    <section className="sec path" id="path" aria-labelledby="pathT">
      <div className="path-grid wrap">
        <div className="reveal">
          <p className="label">Your path</p>
          <h2 id="pathT">Kannur to Japan in Five Steps</h2>
          <p>
            SSW (Specified Skilled Worker, <span lang="ja">特定技能</span>) is Japan&apos;s work visa for trained foreign workers.
            Here is how you get there.
          </p>
          <div className="path-nav">
            <button type="button" aria-label="Previous steps" onClick={() => scroll(-1)}>
              <IconArrowLeft />
            </button>
            <button type="button" aria-label="Next steps" onClick={() => scroll(1)}>
              <IconArrowRight />
            </button>
          </div>
        </div>
        <div className="reveal">
          <ol className="steps" ref={list}>
            {site.steps.map((s, i) => (
              <li key={s.n} className={'step' + (i === site.steps.length - 1 ? ' last' : '')}>
                <div className="top">
                  <span className="n">{s.n}</span>
                  <span className="k" lang="ja" aria-hidden="true">
                    {s.kanji}
                  </span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="note">
            <b>Usually 9–13 months</b> from your first class to your flight, depending on your starting level, exam dates and the
            employer&apos;s process.
          </p>
        </div>
      </div>
    </section>
  )
}
