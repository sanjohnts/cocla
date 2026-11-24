import { useCallback, useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { prefersReducedMotion } from '../lib/helpers'
import Enso from './svg/Enso'
import CourseCard from './CourseCard'
import { IconChevronLeft, IconChevronRight } from './svg/icons'

export default function Courses({ onEnrol }) {
  const track = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = useCallback(() => {
    const t = track.current
    if (!t) return
    setAtStart(t.scrollLeft < 8)
    setAtEnd(t.scrollLeft + t.clientWidth > t.scrollWidth - 8)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  const step = (dir) => {
    const t = track.current
    const card = t.querySelector('.cc')
    const left = t.scrollLeft + dir * (card ? card.offsetWidth + 24 : 300)
    // Start the scroll on the next frame: a smooth scroll begun inside React's click handling gets cancelled.
    requestAnimationFrame(() => t.scrollTo({ left, behavior: prefersReducedMotion() ? 'auto' : 'smooth' }))
  }

  return (
    <section className="sec" id="courses" aria-labelledby="coursesT">
      <div className="wrap">
        <div className="cc-intro center reveal">
          <Enso />
          <p className="label">Our courses</p>
          <h2 id="coursesT">A Complete Path to Japan</h2>
          <p className="lead">From your first Hiragana to the level Japanese employers ask for, with exam practice at every step.</p>
        </div>
        <div className="cc-wrap reveal">
          <button className="cc-arrow prev" type="button" aria-label="Previous courses" aria-controls="ccTrack" disabled={atStart} onClick={() => step(-1)}>
            <IconChevronLeft />
          </button>
          <div className="cc-track" id="ccTrack" tabIndex={0} role="region" aria-label="Courses" ref={track} onScroll={update}>
            {site.courses.map((c) => (
              <CourseCard key={c.mark} course={c} onEnrol={onEnrol} />
            ))}
          </div>
          <button className="cc-arrow next" type="button" aria-label="More courses" aria-controls="ccTrack" disabled={atEnd} onClick={() => step(1)}>
            <IconChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
