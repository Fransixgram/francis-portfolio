import { Users } from 'lucide-react'
import { collaboration, experienceItems } from '../data/experience'
import Section from './Section'

function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-md border border-line bg-surface-2 px-2 py-0.5 text-xs text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Experience and collaboration">
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
        {experienceItems.map((e, i) => (
          <li key={`${e.role}-${i}`} className="relative">
            {/* timeline dot: hollow while the entry is a placeholder */}
            <span
              className={`absolute -left-[1.9rem] top-5 h-3 w-3 rounded-full border-2 border-accent sm:-left-[2.4rem] ${
                e.placeholder ? 'bg-bg' : 'bg-accent'
              }`}
            />
            <div
              className={`rounded-xl border bg-surface p-5 ${
                e.placeholder ? 'border-dashed border-line' : 'border-line'
              }`}
            >
              {(e.period || e.placeholder) && (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">
                    {e.period}
                  </p>
                  {e.placeholder && (
                    <span className="rounded-full border border-line px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted">
                      Placeholder
                    </span>
                  )}
                </div>
              )}
              <h3 className={`font-semibold ${e.period || e.placeholder ? 'mt-2' : ''}`}>
                {e.role}
                <span className="text-muted"> · {e.company}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{e.summary}</p>
              <Tags tags={e.tags} />
            </div>
          </li>
        ))}
      </ol>

      {/* Team collaboration: shown as its own card because it has no employer or dates */}
      <div className="mt-6 flex gap-4 rounded-xl border border-line bg-surface p-5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent/40 bg-accent-soft text-accent-text">
          <Users size={17} />
        </span>
        <div>
          <h3 className="font-semibold">{collaboration.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{collaboration.summary}</p>
          <Tags tags={collaboration.tags} />
        </div>
      </div>
    </Section>
  )
}
