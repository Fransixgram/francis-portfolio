import type { ReactNode } from 'react'

type Props = {
  id: string // matches the nav link, e.g. "about" for href="#about"
  eyebrow: string // small blue label above the heading
  title: string
  children: ReactNode
  tinted?: boolean // gives alternating sections a slightly different background
}

// Shared wrapper so every section has the same spacing, divider and heading style.
export default function Section({ id, eyebrow, title, children, tinted }: Props) {
  return (
    <section id={id} className={`border-t border-line ${tinted ? 'bg-surface/50' : ''}`}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
