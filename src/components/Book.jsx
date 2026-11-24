import { site } from '../data/site'
import { asset, whatsappUrl } from '../lib/helpers'
import OptionalPhoto from './OptionalPhoto'
import WindowScene from './svg/WindowScene'
import EnquiryForm from './EnquiryForm'
import { IconBook, IconClock, IconPin, IconWhatsApp } from './svg/icons'

export default function Book({ course, setCourse, nameRef, openGuide }) {
  return (
    <section className="sec book" id="book" aria-labelledby="bookT">
      <div className="book-visual reveal" aria-hidden="true">
        <WindowScene />
        <OptionalPhoto src={asset('counselling-room.jpg')} />
      </div>
      <div className="book-copy reveal">
        <p className="label">Free counselling</p>
        <h2 id="bookT">Book Your Free Counselling</h2>
        <p className="lead">Take the first step toward a career in Japan. A counsellor will call you back.</p>
        <button className="link-guide" type="button" onClick={openGuide}>
          <IconBook />
          Or get the free Japan career guide first
        </button>
        <EnquiryForm course={course} setCourse={setCourse} nameRef={nameRef} />
        <div className="contact-line">
          <div>
            <IconWhatsApp />
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp {site.brand.whatsappDisplay}
            </a>
          </div>
          <div>
            <IconClock />
            {site.brand.hours}
          </div>
          <div>
            <IconPin />
            <a href={site.brand.mapsUrl} target="_blank" rel="noopener noreferrer">
              {site.brand.place}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
