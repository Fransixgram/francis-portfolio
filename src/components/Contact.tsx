import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '../data/contact'
import { profile } from '../data/profile'
import Section from './Section'
import { socials } from './socialLinks'

const contactItems = [
  ...(contact.email
    ? [{ label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: <Mail size={17} /> }]
    : []),
  ...contact.phones.map((phone) => ({
    label: 'Phone',
    value: phone,
    href: `tel:${phone.replace(/[^\d+]/g, '')}`,
    icon: <Phone size={17} />,
  })),
  ...(contact.location
    ? [{ label: 'Location', value: contact.location, href: '', icon: <MapPin size={17} /> }]
    : []),
]

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <div
        data-scroll-reveal
        className="relative isolate overflow-hidden rounded-[2rem] border border-slate-800 bg-[#071322] p-6 text-white shadow-2xl shadow-slate-950/10 sm:p-9 lg:p-11"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="flex flex-col items-start justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-200">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Contact and links
            </span>
            <h3 className="mt-5 max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
              {contact.heading}
              <span className="text-sky-300">. Let&apos;s talk.</span>
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300 sm:text-base">
              {contact.text}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100"
                >
                  <Mail size={16} /> Send me an email <ArrowUpRight size={15} />
                </a>
              )}
              {profile.cv.href && (
                <a
                  href={profile.cv.href}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <Download size={16} /> Download CV
                </a>
              )}
            </div>

            {socials.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs font-medium text-slate-400">Find me on</span>
                {socials.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-sky-300/50 hover:bg-white/10 hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur sm:p-5">
            <div className="mb-3 px-1">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Direct details
              </p>
              <p className="mt-1 text-sm text-slate-300">Choose the easiest way to reach me.</p>
            </div>
            <ul className="space-y-2.5">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-sky-300">
                      {item.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {item.label}
                      </span>
                      <span className="mt-1 block truncate text-sm font-medium text-white">
                        {item.value}
                      </span>
                    </span>
                    {item.href && <ArrowUpRight size={15} className="ml-auto shrink-0 text-slate-500" />}
                  </>
                )

                return (
                  <li key={`${item.label}-${item.value}`}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-slate-950/30 p-3 transition hover:border-sky-300/30 hover:bg-slate-950/50"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-slate-950/30 p-3">
                        {content}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
