import { profile } from '../data/profile'
import { socials } from './socialLinks'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer data-scroll-reveal className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6">
        <p className="text-center sm:text-left">
          © {year} {profile.name}. Built with React, TypeScript and Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          {socials.length > 0 && (
            <ul className="flex items-center gap-1">
              {socials.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="grid h-8 w-8 place-items-center rounded-md transition-colors hover:text-fg"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <a href="#top" className="hover:text-fg">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
