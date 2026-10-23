import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { headerCta, navLinks, profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark'

  // Pressing Escape closes the mobile menu
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand: initials badge + name */}
        <a href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-7 w-7 place-items-center rounded-md border border-accent/60 bg-accent-soft text-[10px] font-extrabold tracking-tight text-accent">
            {profile.initials}
          </span>
          <span className="text-[13px] font-semibold tracking-wide">{profile.name}</span>
        </a>

        {/* Desktop navigation (hidden on small screens) */}
        <nav aria-label="Primary" className="hidden items-center md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-2.5 py-1.5 text-[13px] text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side: theme toggle, call-to-action, mobile menu button */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid h-8 w-8 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-fg"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href={headerCta.href}
            className="hidden rounded-md bg-accent px-3.5 py-1.5 text-[13px] font-semibold text-accent-fg transition-opacity hover:opacity-90 sm:inline-block"
          >
            {headerCta.label}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-8 w-8 place-items-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-fg md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pb-2 pt-1 sm:hidden">
              <a
                href={headerCta.href}
                onClick={() => setOpen(false)}
                className="block rounded-md bg-accent px-3 py-3 text-center text-sm font-semibold text-accent-fg"
              >
                {headerCta.label}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
