// Stage 1 foundation preview. This temporary page only proves that Vite, React,
// TypeScript and the Tailwind theme colors work. Stage 2 replaces it with the
// real header and hero.

const swatches = [
  { name: 'bg', className: 'bg-bg' },
  { name: 'surface', className: 'bg-surface' },
  { name: 'surface-2', className: 'bg-surface-2' },
  { name: 'line', className: 'bg-line' },
  { name: 'muted', className: 'bg-muted' },
  { name: 'accent', className: 'bg-accent' },
]

export default function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        Stage 1 · Foundation
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
        CHIDUBEM FRANCIS
      </h1>
      <p className="mt-3 text-lg text-muted">Full-stack Software Engineer</p>

      <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
        <h2 className="text-sm font-semibold text-accent">Theme colors</h2>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {swatches.map((s) => (
            <li key={s.name} className="flex items-center gap-3 text-sm">
              <span className={`h-8 w-8 rounded-md border border-line ${s.className}`} />
              {s.name}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          The real header, hero and sections are added in the next stages.
        </p>
      </div>
    </main>
  )
}
