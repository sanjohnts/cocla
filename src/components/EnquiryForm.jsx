import { useState } from 'react'
import { site } from '../data/site'
import { session, validPhone, whatsappUrl } from '../lib/helpers'
import { IconArrowRight, IconBook, IconClock, IconPhone, IconUser } from './svg/icons'

/** The free-counselling form. Sends the details to COCLA on WhatsApp. */
export default function EnquiryForm({ course, setCourse, nameRef }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [time, setTime] = useState('')
  const [msg, setMsg] = useState(null) // { error } or { url }

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim() || !course || !validPhone(phone)) {
      setMsg({ error: 'Please add your name, a 10-digit phone number and a course.' })
      return
    }
    const text =
      `Hi COCLA, I'd like free counselling.\nName: ${name.trim()}\nPhone: ${phone.trim()}\nCourse: ${course}` +
      (time ? `\nBest time to call: ${time}` : '')
    const url = whatsappUrl(text)
    window.open(url, '_blank', 'noopener')
    session.set('cocla_enquiry_sent', '1')
    setMsg({ url })
  }

  return (
    <form className="form" id="enqForm" noValidate onSubmit={submit}>
      <div className="f">
        <IconUser />
        <label className="vh" htmlFor="fName">Your name</label>
        <input id="fName" name="name" autoComplete="name" placeholder="Your Name" required ref={nameRef}
          value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="f">
        <IconPhone />
        <label className="vh" htmlFor="fPhone">Phone or WhatsApp number</label>
        <input id="fPhone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone / WhatsApp Number" required
          value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="f2">
        <div className="f">
          <IconBook />
          <label className="vh" htmlFor="fCourse">Course</label>
          <select id="fCourse" name="course" required value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="" disabled>Course</option>
            {site.courseOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="f">
          <IconClock />
          <label className="vh" htmlFor="fTime">Best time to call</label>
          <select id="fTime" name="time" value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="">Best time to call</option>
            {site.callTimes.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Book on WhatsApp <IconArrowRight />
      </button>
      <p className={'form-msg' + (msg?.error ? ' err' : '')} role="status" aria-live="polite">
        {msg?.error}
        {msg?.url && (
          <>
            WhatsApp is opening. Press <b>send</b> there to reach our counsellor. If nothing opened,{' '}
            <a href={msg.url} target="_blank" rel="noopener noreferrer">tap here</a>.
          </>
        )}
      </p>
    </form>
  )
}
