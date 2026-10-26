import { useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import EngineeringNotes from './components/EngineeringNotes'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import { sections } from './data/profile'

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        {sections.experience && <Experience />}
        <TechStack />
        {sections.notes && <EngineeringNotes />}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
