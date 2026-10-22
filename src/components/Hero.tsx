import { ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'
import { GithubIcon } from './icons'

// Shows your photo when profile.portrait.src is set, otherwise a placeholder.
function Portrait() {
  if (profile.portrait.src) {
    return (
      <img
        src={profile.portrait.src}
        alt={profile.portrait.alt}
        className="h-full w-full object-cover"
      />
    )
  }
  return (
    <div className="relative grid h-full w-full place-items-center bg-gradient-to-b from-surface-2 to-surface">
      <svg viewBox="0 0 200 240" className="h-3/4 w-3/4 text-accent/35" aria-hidden="true">
        <circle cx="100" cy="82" r="42" fill="currentColor" />
        <path d="M16 240c0-52 36-88 84-88s84 36 84 88Z" fill="currentColor" />
      </svg>
      <span className="absolute bottom-3 rounded-full border border-line bg-bg/80 px-3 py-1 text-[11px] uppercase tracking-widest text-muted">
        Portrait placeholder
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft blue glow in the top-right corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_80%_-10%,color-mix(in_srgb,var(--accent)_20%,transparent),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        {/* Text (below the portrait on phones, left on desktop) */}
        <div className="order-2 md:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.title}
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
            >
              View projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent"
            >
              Contact
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>

        {/* Portrait (first on phones, right on desktop) */}
        <div className="order-1 mx-auto w-full max-w-[17rem] sm:max-w-xs md:order-2 md:max-w-sm">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-accent/60 via-accent/10 to-transparent p-[2px]">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-surface">
              <Portrait />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
