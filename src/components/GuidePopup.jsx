import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { session, validPhone, whatsappUrl } from '../lib/helpers'
import useExitIntent from '../hooks/useExitIntent'
import { IconClose } from './svg/icons'

/**
 * "Free Japan Career Guide" pop-up.
 * Opens by itself once per visit when a desktop visitor heads for the top of the
 * window (after 5 s), or when a parent calls ref.current.open().
 */
const GuidePopup = forwardRef(function GuidePopup(_props, ref) {
  const dialog = useRef(null)
  const nameInput = useRef(null)
  const lastFocus = useRef(null)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState(null) // { error } or { url }

  const open = useCallback(() => {
    const d = dialog.current
    if (!d || d.open) return
    lastFocus.current = document.activeElement
    if (d.showModal) d.showModal()
    else d.setAttribute('open', '')
    session.set('cocla_guide_shown', '1')
    setTimeout(() => nameInput.current?.focus(), 60)
  }, [])

  const close = () => {
    const d = dialog.current
    if (d.close) d.close()
    else d.removeAttribute('open')
  }

  useImperativeHandle(ref, () => ({ open }), [open])

  // Put focus back where it was when the dialog closes (X, backdrop or Esc).
  useEffect(() => {
    const d = dialog.current
    const onClose = () => lastFocus.current?.focus?.({ preventScroll: true })
    d.addEventListener('close', onClose)
    return () => d.removeEventListener('close', onClose)
  }, [])

  const onExit = useCallback(() => {
    if (session.get('cocla_guide_shown') || session.get('cocla_enquiry_sent')) return
    open()
  }, [open])
  useExitIntent(onExit)

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim() || !validPhone(phone)) {
      setMsg({ error: 'Please add your name and a 10-digit phone number.' })
      return
    }
    const url = whatsappUrl(`Hi COCLA, please send me the free Japan Career Guide.\nName: ${name.trim()}\nPhone: ${phone.trim()}`)
    window.open(url, '_blank', 'noopener')
    session.set('cocla_enquiry_sent', '1')
    setMsg({ url })
  }

  return (
    <dialog
      className="guide"
      id="guideDlg"
      ref={dialog}
      aria-labelledby="guideT"
      aria-describedby="guideD"
      onClick={(e) => e.target === dialog.current && close()}
    >
      <div className="guide-in">
        <svg className="fl" viewBox="-13 -13 26 26" aria-hidden="true"><use href="#sk" /></svg>
        <svg className="fl2" viewBox="-13 -13 26 26" aria-hidden="true"><use href="#sk" /></svg>
        <button className="x" type="button" aria-label="Close" onClick={close}>
          <IconClose />
        </button>
        <span className="tag">Free guide</span>
        <h2 id="guideT">Wait! Get Your Free Japan Career Guide</h2>
        <p className="sub" id="guideD">Our step-by-step guide to JLPT, SSW and the visa process, sent to you on WhatsApp.</p>
        <form noValidate onSubmit={submit}>
          <label className="vh" htmlFor="gName">Your name</label>
          <input id="gName" name="name" autoComplete="name" placeholder="Your name" required ref={nameInput}
            value={name} onChange={(e) => setName(e.target.value)} />
          <label className="vh" htmlFor="gPhone">Phone / WhatsApp number</label>
          <input id="gPhone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone / WhatsApp number" required
            value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button type="submit">Send Me the Free Guide</button>
          <p className={'g-msg' + (msg?.error ? ' err' : '')} role="status" aria-live="polite">
            {msg?.error}
            {msg?.url && (
              <>
                WhatsApp is opening. Press <b>send</b> and our counsellor will share the guide. Nothing opened?{' '}
                <a href={msg.url} target="_blank" rel="noopener noreferrer">Tap here</a>.
              </>
            )}
          </p>
        </form>
      </div>
    </dialog>
  )
})

export default GuidePopup
