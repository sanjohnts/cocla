import { useCallback, useRef, useState } from 'react'
import useReveal from './hooks/useReveal'
import SvgSprite from './components/svg/SvgSprite'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Courses from './components/Courses'
import About from './components/About'
import Path from './components/Path'
import Students from './components/Students'
import Sectors from './components/Sectors'
import Moments from './components/Moments'
import Faq from './components/Faq'
import Book from './components/Book'
import Footer from './components/Footer'
import GuidePopup from './components/GuidePopup'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const [course, setCourse] = useState('')
  const nameRef = useRef(null)
  const guideRef = useRef(null)
  useReveal()

  // Enrol buttons: pick the course in the form, then focus the name field once the page has scrolled.
  const enrol = useCallback((value) => {
    setCourse(value)
    setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 700)
  }, [])

  const openGuide = useCallback(() => guideRef.current?.open(), [])

  return (
    <>
      <SvgSprite />
      <Nav />
      <main>
        <Hero />
        <Courses onEnrol={enrol} />
        <About />
        <Path />
        <Students />
        <Sectors />
        <Moments />
        <Faq />
        <Book course={course} setCourse={setCourse} nameRef={nameRef} openGuide={openGuide} />
      </main>
      <Footer openGuide={openGuide} />
      <GuidePopup ref={guideRef} />
      <WhatsAppFloat />
    </>
  )
}
