import { Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { contact } from '../data/contact'
import { GithubIcon } from './icons'
import Section from './Section'

type Row = { id: string; label: string; icon: ReactNode; value: string; href: string; empty: string }

const rows: Row[] = [
  {
    id: 'email',
    label: 'Email',
    icon: <Mail size={16} />,
    value: contact.email,
    href: contact.email ? `mailto:${contact.email}` : '',
    empty: 'Add your email address',
  },
  {
    id: 'phone',
    label: 'Phone',
    icon: <Phone size={16} />,
    value: contact.phone,
    href: contact.phone ? `tel:${contact.phone.replace(/\s+/g, '')}` : '',
    empty: 'Add your phone number',
  },
  {
    id: 'location',
    label: 'Location',
    icon: <MapPin size={16} />,
    value: contact.location,
    href: '',
    empty: 'Add your location',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: <span className="text-[11px] font-bold">in</span>,
    value: contact.linkedin ? 'LinkedIn profile' : '',
    href: contact.linkedin,
    empty: 'Add your LinkedIn URL',
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: <GithubIcon className="h-4 w-4" />,
    value: contact.github ? contact.github.replace(/^https?:\/\//, '') : '',
    href: contact.github,
    empty: 'Add your GitHub URL',
  },
]

export default function Contact() {
  const emailReady = Boolean(contact.email)
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <div className="grid gap-8 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div>
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{contact.heading}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{contact.text}</p>
          {emailReady ? (
            <a
              href={`mailto:${contact.email}`}
              className="mt-6 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
            >
              {contact.buttonLabel}
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="Add your email in src/data/contact.ts"
              className="mt-6 cursor-not-allowed rounded-lg border border-dashed border-line px-5 py-2.5 text-sm font-semibold text-muted"
            >
              {contact.buttonLabel} (add email first)
            </button>
          )}
        </div>

        <ul className="space-y-3">
          {rows.map((r) => {
            const live = Boolean(r.value)
            const inner = (
              <>
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border ${
                    live ? 'border-accent/50 text-accent' : 'border-line text-muted'
                  }`}
                >
                  {r.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-widest text-muted">
                    {r.label}
                  </span>
                  <span
                    className={`block truncate text-sm ${
                      live ? 'font-medium' : 'italic text-muted/80'
                    }`}
                  >
                    {live ? r.value : r.empty}
                  </span>
                </span>
              </>
            )
            const base = 'flex items-center gap-3 rounded-lg border bg-bg/40 p-3'
            return (
              <li key={r.id}>
                {live && r.href ? (
                  <a
                    href={r.href}
                    target={r.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`${base} border-line transition-colors hover:border-accent`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={`${base} ${live ? 'border-line' : 'border-dashed border-line'}`}>
                    {inner}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
