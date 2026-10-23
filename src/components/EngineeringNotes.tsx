import { ArrowUpRight } from 'lucide-react'
import { noteItems } from '../data/placeholders'
import Section from './Section'

export default function EngineeringNotes() {
  return (
    <Section id="notes" eyebrow="Engineering notes" title="Notes and writing">
      <div className="grid gap-4 md:grid-cols-2">
        {noteItems.map((n, i) => (
          <article
            key={`${n.title}-${i}`}
            className={`flex flex-col rounded-xl border bg-surface p-5 ${
              n.placeholder ? 'border-dashed border-line' : 'border-line'
            }`}
          >
            <div className="flex items-center justify-between gap-2 text-xs text-muted">
              <span>{n.meta}</span>
              {n.placeholder && (
                <span className="rounded-full border border-line px-2 py-0.5 text-[10px] uppercase tracking-widest">
                  Placeholder
                </span>
              )}
            </div>
            <h3 className="mt-3 font-semibold leading-snug">{n.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{n.summary}</p>
            {n.href && (
              <a
                href={n.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Read note <ArrowUpRight size={14} />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
