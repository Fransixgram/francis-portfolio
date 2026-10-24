import { Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { contact } from '../data/contact'
import Section from './Section'
import { socials } from './socialLinks'

type Item = { text: string; href?: string }
type Row = { id: string; label: string; icon: ReactNode; items: Item[]; empty: string }

const rows: Row[] = [
  {
    id: 'email',
    label: 'Email',
    icon: <Mail size={16} />,
    items: contact.email ? [{ text: contact.email, href: `mailto:${contact.email}` }] : [],
    empty: 'Add your email address',
  },
  {
    id: 'phone',
    label: contact.phones.length > 1 ? 'Phone numbers' : 'Phone',
    icon: <Phone size={16} />,
    items: contact.phones.map((p) => ({ text: p, href: `tel:${p.replace(/[^\d+]/g, '')}` })),
    empty: 'Add your phone number',
  },
  {
    id: 'location',
    label: 'Location',
    icon: <MapPin size={16} />,
    items: contact.location ? [{ text: contact.location }] : [],
    empty: 'Add your location',
  },
]

export default function Contact() {
  // The main button emails you. Until an email is set, it links to GitHub instead.
  const primary = contact.email
    ? { href: `mailto:${contact.email}`, label: contact.buttonLabel, external: false }
    : contact.github
      ? { href: contact.github, label: 'View my GitHub', external: true }
      : null

  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <div className="grid gap-8 rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div>
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{contact.heading}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{contact.text}</p>

          {primary && (
            <a
              href={primary.href}
              target={primary.external ? '_blank' : undefined}
              rel={primary.external ? 'noopener noreferrer' : undefined}
              className="mt-6 inline-block rounded-lg bg-accent-strong px-5 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
            >
              {primary.label}
            </a>
          )}

          {socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-fg"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="space-y-3">
          {rows.map((r) => {
            const live = r.items.length > 0
            return (
              <li
                key={r.id}
                className={`flex items-center gap-3 rounded-lg border bg-bg/40 p-3 ${
                  live ? 'border-line' : 'border-dashed border-line'
                }`}
              >
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
                  {live ? (
                    r.items.map((it) =>
                      it.href ? (
                        <a
                          key={it.text}
                          href={it.href}
                          className="block truncate text-sm font-medium hover:text-accent hover:underline"
                        >
                          {it.text}
                        </a>
                      ) : (
                        <span key={it.text} className="block truncate text-sm font-medium">
                          {it.text}
                        </span>
                      ),
                    )
                  ) : (
                    <span className="block truncate text-sm italic text-muted">{r.empty}</span>
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
