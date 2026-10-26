import { ArrowRight, Download } from 'lucide-react'
import { profile, stats } from '../data/profile'

// Round portrait with a glowing ring. Shows a placeholder until a photo is set.
function Portrait() {
  const { src, alt } = profile.portrait
  return (
    <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-xs md:max-w-sm">
      {/* soft glow behind the portrait */}
      <div
        aria-hidden="true"
        className="absolute inset-[-12%] rounded-full bg-accent/25 blur-3xl"
      />
      {/* ring */}
      <div className="relative rounded-full bg-gradient-to-br from-accent via-accent/30 to-transparent p-[3px]">
        <div className="aspect-square overflow-hidden rounded-full bg-surface">
          {src ? (
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          ) : (
            <div className="relative grid h-full w-full place-items-center bg-gradient-to-b from-surface-2 to-surface">
              <svg viewBox="0 0 200 240" className="h-[78%] w-[78%] text-accent/35" aria-hidden="true">
                <circle cx="100" cy="82" r="42" fill="currentColor" />
                <path d="M16 240c0-52 36-88 84-88s84 36 84 88Z" fill="currentColor" />
              </svg>
              <span className="absolute top-[14%] rounded-full border border-line bg-bg/80 px-3 py-1 text-[10px] uppercase tracking-widest text-muted">
                Portrait placeholder
              </span>
            </div>
          )}
        </div>
      </div>
      <CodePanel />
    </div>
  )
}

// The small code window that overlaps the portrait. It is always dark, in both themes.
// Its content is built from profile.ts, so it stays in sync with your details.
function CodePanel() {
  const { file, stack } = profile.codePanel
  return (
    <div
      aria-hidden="true"
      className="absolute -bottom-6 right-[-4%] w-[108%] rounded-lg border border-white/10 bg-[#0a1122] shadow-2xl shadow-black/40 sm:right-[-12%] sm:w-[82%]"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[10px] text-slate-400">{file}</span>
      </div>
      <pre className="whitespace-pre-wrap break-words px-3 py-2.5 font-mono text-[10px] leading-relaxed text-slate-300 sm:text-[11px]">
        <span className="text-sky-400">const</span> engineer = {'{'}
        {'\n'}
        {'  '}name: <span className="text-emerald-300">"{profile.name}"</span>,{'\n'}
        {'  '}role: <span className="text-emerald-300">"{profile.title}"</span>,{'\n'}
        {'  '}stack: [
        {stack.map((s, i) => (
          <span key={s}>
            <span className="text-emerald-300">"{s}"</span>
            {i < stack.length - 1 ? ', ' : ''}
          </span>
        ))}
        ],{'\n'}
        {'}'}
      </pre>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" data-scroll-reveal className="relative overflow-hidden">
      {/* Soft blue glow in the top-right corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_80%_-10%,color-mix(in_srgb,var(--accent)_20%,transparent),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-14 pt-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-20">
        {/* Portrait first on phones, on the right on desktop */}
        <div className="order-1 pb-6 md:order-2">
          <Portrait />
        </div>

        <div className="order-2 md:order-1">
          <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.title}
          </p>
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Hi, I’m <span className="text-accent">{profile.name}.</span>
            <br />
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-strong px-5 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
            >
              View my work <ArrowRight size={16} />
            </a>
            {profile.cv.href ? (
              <a
                href={profile.cv.href}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent"
              >
                <Download size={16} /> Download CV
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Add your CV in src/data/profile.ts"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-dashed border-line px-5 py-2.5 text-sm font-semibold text-muted"
              >
                <Download size={16} /> CV coming soon
              </button>
            )}
          </div>

          {/* Stats row. Tiles marked placeholder are dimmed until you fill them in. */}
          <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className={`flex flex-col ${s.placeholder ? 'opacity-60' : ''}`}>
                <dt className="order-2 text-xs text-muted">
                  {s.placeholder ? <em>{s.label}</em> : s.label}
                </dt>
                <dd className="text-2xl font-bold tracking-tight text-fg">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
