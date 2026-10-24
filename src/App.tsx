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
