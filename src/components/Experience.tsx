import { experienceItems } from '../data/placeholders'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I have worked">
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
        {experienceItems.map((e, i) => (
          <li key={`${e.role}-${i}`} className="relative">
            {/* timeline dot: hollow while the entry is a placeholder */}
            <span
              className={`absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent sm:-left-[2.4rem] ${
                e.placeholder ? 'bg-bg' : 'bg-accent'
              }`}
            />
            <div
              className={`rounded-xl border bg-surface p-5 ${
                e.placeholder ? 'border-dashed border-line' : 'border-line'
              }`}
            >
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
              <h3 className="mt-2 font-semibold">
                {e.role}
                <span className="text-muted"> · {e.company}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{e.summary}</p>
              {e.tags.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-line bg-surface-2 px-2 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
