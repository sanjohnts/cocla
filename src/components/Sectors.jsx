import { site } from '../data/site'

export default function Sectors() {
  return (
    <section className="sec" id="sectors" aria-labelledby="secT">
      <div className="wrap">
        <div className="center reveal">
          <p className="label">Where you can work</p>
          <h2 id="secT">Careers Across Japan</h2>
          <p className="lead">SSW opens legal, long-term jobs in these sectors, depending on the skill test you pass and current openings.</p>
        </div>
        <div className="sectors reveal">
          {site.sectors.map((s, i) => (
            <div className={'sector' + (i === site.sectors.length - 1 ? ' more' : '')} key={s.title}>
              <span className="k" lang="ja">
                {s.kanji}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
