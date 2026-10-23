import { profile } from '../data/profile'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:px-6">
        <p>
          © {year} {profile.name}. Built with React, TypeScript and Tailwind CSS.
        </p>
        <a href="#top" className="hover:text-fg">
          Back to top
        </a>
      </div>
    </footer>
  )
}
