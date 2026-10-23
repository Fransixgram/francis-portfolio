import About from './components/About'
import Contact from './components/Contact'
import EngineeringNotes from './components/EngineeringNotes'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <EngineeringNotes />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
