import { asset } from '../lib/helpers'

export default function CourseCard({ course, onEnrol }) {
  const { mark, level, title, description, meta, syllabus, enrolValue, buttonText, featured, headerGradient, texture } = course
  return (
    <article
      className={'cc' + (featured ? ' feat' : '')}
      // Absolute URL: a relative url() inside a CSS variable is resolved against the stylesheet, not the page.
      style={{ '--grad': headerGradient, '--img': `url("${new URL(asset(texture), document.baseURI).href}")` }}
    >
      <div className="cc-head" data-mark={mark}>
        <span className="cc-level">{level}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="cc-body">
        <dl className="cc-meta">
          {Object.entries(meta).map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <ul className="cc-list">
          {syllabus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="cc-btn" href="#book" onClick={() => onEnrol(enrolValue)}>
          {buttonText}
        </a>
      </div>
    </article>
  )
}
