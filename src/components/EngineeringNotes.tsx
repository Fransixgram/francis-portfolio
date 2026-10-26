import { ChevronLeft, ChevronRight, Layers3 } from 'lucide-react'
import { useState } from 'react'
import { noteItems } from '../data/notes'
import Section from './Section'

export default function EngineeringNotes() {
  const [activeIndex, setActiveIndex] = useState(0)
  const previous = () => setActiveIndex((index) => (index - 1 + noteItems.length) % noteItems.length)
  const next = () => setActiveIndex((index) => (index + 1) % noteItems.length)

  if (noteItems.length === 0) return null

  return (
    <Section id="notes" eyebrow="Engineering notes" title="Notes and writing">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Engineering notes"
        className="mx-auto max-w-4xl"
      >
        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex items-stretch transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${(activeIndex * 100) / noteItems.length}%)` }}
          >
            {noteItems.map((note, index) => (
              <article
                key={note.title}
                id={`engineering-note-${index}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${noteItems.length}`}
                aria-hidden={index !== activeIndex}
                data-scroll-reveal
                className="flex min-h-64 w-full shrink-0 flex-col justify-between border border-line bg-surface p-6 sm:min-h-72 sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-text">
                      <Layers3 size={13} /> {note.meta}
                    </span>
                    <span className="hidden font-mono text-sm text-muted sm:block">
                      {String(index + 1).padStart(2, '0')} / {String(noteItems.length).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-8 max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                    {note.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                    {note.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2" aria-label="Choose a note">
            {noteItems.map((note, index) => (
              <button
                key={note.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show note ${index + 1}: ${note.title}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-accent' : 'w-2.5 bg-line hover:bg-accent/50'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span aria-live="polite" className="mr-2 text-xs font-medium text-muted">
              {String(activeIndex + 1).padStart(2, '0')} of {String(noteItems.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={previous}
              aria-label="Previous engineering note"
              aria-controls={`engineering-note-${activeIndex}`}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-fg transition hover:border-accent hover:text-accent focus-visible:outline-offset-4"
            >
              <ChevronLeft size={19} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next engineering note"
              aria-controls={`engineering-note-${activeIndex}`}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-fg transition hover:border-accent hover:text-accent focus-visible:outline-offset-4"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
