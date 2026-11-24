import { prefersReducedMotion } from '../lib/helpers'

/** Random size, drift and timing for each petal (none when reduced motion is on). */
function makePetals(count) {
  if (prefersReducedMotion()) return []
  return Array.from({ length: count }, () => {
    const size = 8 + Math.random() * 8
    return {
      left: `${30 + Math.random() * 70}%`,
      width: `${size}px`,
      height: `${size * 0.8}px`,
      '--dx': `${-120 - Math.random() * 160}px`,
      animationDuration: `${9 + Math.random() * 9}s`,
      animationDelay: `${-Math.random() * 16}s`,
      opacity: 0.55 + Math.random() * 0.4,
    }
  })
}

// Made once when the page loads, so every render shows the same petals.
const PETALS = makePetals(16)

/** Falling sakura petals in the hero. */
export default function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {PETALS.map((style, i) => (
        <span key={i} className="petal" style={style} />
      ))}
    </div>
  )
}
