import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Metrics from './components/Metrics'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import CaseStudies from './components/CaseStudies'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  // Re-observe after mount to catch all elements
  useEffect(() => {
    const t = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
        { threshold: 0.07 }
      )
      document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    }, 200)
    return () => clearTimeout(t)
  }, [])

  const downloadResume = () => {
    const a = document.createElement('a')
    a.href = '/resume.pdf'
    a.download = 'Shorya_Pratap_Singh_Resume.pdf'
    a.click()
  }

  return (
    <>
      <Cursor />
      <Nav onResume={downloadResume} />
      <main>
        <Hero onResume={downloadResume} />
        <Ticker />
        <Metrics />
        <About />
        <Experience />
        <Skills />
        <CaseStudies />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
