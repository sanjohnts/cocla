import { site } from '../data/site'

/** Path to a file in public/assets that works in dev and in a built dist/ folder. */
export const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`

/** wa.me link to the COCLA number with a pre-filled message. */
export const whatsappUrl = (text = site.brand.defaultWhatsAppMessage) =>
  `https://wa.me/${site.brand.whatsappNumber}?text=${encodeURIComponent(text)}`

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** sessionStorage that never throws (private mode, blocked storage). */
export const session = {
  get(key) {
    try { return sessionStorage.getItem(key) } catch { return null }
  },
  set(key, value) {
    try { sessionStorage.setItem(key, value) } catch { /* ignore */ }
  },
}

/** At least 10 digits, ignoring spaces, + and dashes. */
export const validPhone = (phone) => phone.replace(/\D/g, '').length >= 10
