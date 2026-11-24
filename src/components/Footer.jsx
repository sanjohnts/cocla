import { site } from '../data/site'
import { asset, whatsappUrl } from '../lib/helpers'
import { IconFacebook, IconInstagram, IconWhatsApp, IconYouTube } from './svg/icons'

const EXPLORE = [
  ['courses', 'Courses'],
  ['about', 'About COCLA'],
  ['path', 'SSW Route'],
  ['students', 'Our Students'],
  ['sectors', 'Sectors'],
  ['moments', 'Events'],
]

export default function Footer({ openGuide }) {
  const { brand } = site
  return (
    <footer className="footer">
      <svg className="fb" viewBox="0 0 420 280" aria-hidden="true">
        <use href="#br" />
      </svg>
      <div className="footer-grid wrap">
        <div>
          <a className="brand" href="#top" aria-label="Back to top">
            <img src={asset('ccla-logo.jpg')} alt="" width="44" height="44" loading="lazy" />
            <span>
              <b>{brand.shortName}</b>
              <small>Language Academy · Kannur</small>
            </span>
          </a>
          <p>
            College of Commerce Language Academy: Japanese language and skill training in Kannur. COE guidance through our partner
            Astro Academy, an NSDC-authorized Sending Organisation.
          </p>
          <div className="socials">
            <a href={`https://wa.me/${brand.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><IconWhatsApp /></a>
            <a href={brand.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><IconYouTube /></a>
            <a href={brand.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconInstagram /></a>
            <a href={brand.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><IconFacebook /></a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {EXPLORE.map(([id, label]) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
            <li>
              <a href="#book" onClick={(e) => { e.preventDefault(); openGuide() }}>Free Japan career guide</a>
            </li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li>{brand.fullName}</li>
            <li>{brand.place}</li>
            <li><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp {brand.whatsappDisplay}</a></li>
            <li>{brand.hours}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} {brand.fullName}, Kannur</span>
        <span>A College of Commerce institution · since 1990</span>
      </div>
    </footer>
  )
}
