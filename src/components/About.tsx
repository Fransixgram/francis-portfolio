import { Code, Database, Globe, Layers, Server, Smartphone, type LucideIcon } from 'lucide-react'
import { about } from '../data/profile'
import Section from './Section'

// Names allowed for "icon" in src/data/profile.ts
const icons: Record<string, LucideIcon> = {
  code: Code,
  server: Server,
  smartphone: Smartphone,
  database: Database,
  layers: Layers,
  globe: Globe,
}

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title={about.heading}>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {about.chips.map((c) => {
              const Icon = icons[c.icon] ?? Code
              return (
                <li
                  key={c.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-1.5 text-sm"
                >
                  <Icon size={14} className="text-accent" />
                  {c.label}
                </li>
              )
            })}
          </ul>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {about.featureCards.map((f) => {
            const Icon = icons[f.icon] ?? Code
            return (
              <li key={f.title} data-scroll-reveal className="rounded-xl border border-line bg-surface p-4">
                <span className="grid h-8 w-8 place-items-center rounded-md border border-accent/40 bg-accent-soft text-accent">
                  <Icon size={16} />
                </span>
                <h3 className="mt-3 text-sm font-semibold">{f.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{f.items}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
