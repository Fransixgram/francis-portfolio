import Header from './components/Header'
import Hero from './components/Hero'

// TEMPORARY: empty anchors so the header links have somewhere to scroll to.
// Each one is replaced by its real section in Stage 3 (About, Projects) and
// Stage 4 (Experience, Tech Stack, Notes, Contact).
const upcoming = [
  { id: 'about', label: 'About', stage: 3 },
  { id: 'projects', label: 'Projects', stage: 3 },
  { id: 'experience', label: 'Experience', stage: 4 },
  { id: 'tech-stack', label: 'Tech Stack', stage: 4 },
  { id: 'notes', label: 'Engineering Notes', stage: 4 },
  { id: 'contact', label: 'Contact', stage: 4 },
]

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {upcoming.map((s) => (
          <section key={s.id} id={s.id} className="border-t border-line">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
              <h2 className="text-2xl font-bold tracking-tight">{s.label}</h2>
              <p className="mt-2 text-sm text-muted">Coming in Stage {s.stage}.</p>
            </div>
          </section>
        ))}
      </main>
    </>
  )
}
