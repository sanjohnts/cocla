import { whatsappUrl } from '../lib/helpers'
import { IconWhatsApp } from './svg/icons'

/** Round green WhatsApp button, bottom-right on every screen size. */
export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" aria-label="Chat with COCLA on WhatsApp">
      <IconWhatsApp />
    </a>
  )
}
