import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { asset } from '../lib/helpers'
import useScrollSpy from '../hooks/useScrollSpy'
import { IconCalendar, IconUser } from './svg/icons'

const SPY_IDS = site.navLinks.map((l) => l.id)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(SPY_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')} id="nav">
      <div className="nav-in wrap">
        <a className="brand" href="#top" aria-label="COCLA home">
          <img src={asset('ccla-logo.jpg')} alt="" width="44" height="44" />
          <span>
            <b>{site.brand.shortName}</b>
            <small>Language Academy · Kannur</small>
          </span>
        </a>
        <nav className="links" aria-label="Main">
          {site.navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'on' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-ghost" href={site.brand.loginUrl}>
            <IconUser />
            {site.brand.loginLabel}
          </a>
          <a className="btn btn-primary" href="#book">
            <IconCalendar />
            Book Counselling
          </a>
        </div>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="mnav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
      </div>
      <nav
        className={'mnav' + (open ? ' open' : '')}
        id="mnav"
        aria-label="Mobile"
        onClick={(e) => e.target.closest('a') && setOpen(false)}
      >
        {site.navLinks.slice(1).map((l) => (
          <a key={l.id} href={`#${l.id}`}>
            {l.label}
          </a>
        ))}
        <div className="mnav-actions">
          <a className="btn btn-primary" href="#book">
            Book Free Counselling →
          </a>
          <a className="btn btn-ghost" href={site.brand.loginUrl}>
            <IconUser />
            {site.brand.loginLabel}
          </a>
        </div>
      </nav>
    </header>
  )
}
