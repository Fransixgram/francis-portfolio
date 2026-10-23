import { skills } from '../data/skills'
import { skillIcons } from './skillIcons'
import Section from './Section'

// Letter badge for skills with no logo: "BullMQ" -> "BM", "AWS" -> "AWS".
function monogram(name: string) {
  if (name.length <= 3) return name.toUpperCase()
  const capitals = name.replace(/[^A-Z]/g, '')
  return capitals.length >= 2 ? capitals.slice(0, 2) : name.slice(0, 2).toUpperCase()
}

export default function TechStack() {
  return (
    <Section id="tech-stack" eyebrow="Tech stack" title="Tools I work with" tinted>
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {skills.map((name) => {
          const icon = skillIcons[name]
          return (
            <li
              key={name}
              className="group flex flex-col items-center gap-2.5 rounded-xl border border-line bg-surface px-2 py-4 text-center transition-colors hover:border-accent/60"
            >
              <span className="grid h-9 w-9 place-items-center text-muted transition-colors group-hover:text-fg">
                {icon ? (
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-hidden="true"
                    className="h-6 w-6 fill-current"
                  >
                    <path d={icon.path} />
                  </svg>
                ) : (
                  <span className="grid h-8 w-8 place-items-center rounded-md border border-line bg-surface-2 text-[11px] font-bold tracking-tight">
                    {monogram(name)}
                  </span>
                )}
              </span>
              <span className="text-xs font-medium">{name}</span>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
