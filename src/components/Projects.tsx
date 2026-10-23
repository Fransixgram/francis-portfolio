import { ArrowUpRight, Plus } from 'lucide-react'
import {
  featuredProjects,
  githubProfile,
  secondaryProjects,
  type Project,
} from '../data/projects'
import { GithubIcon } from './icons'
import Section from './Section'

function TechTags({ tech }: { tech: string[] }) {
  if (!tech.length) return null
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md border border-line bg-surface-2 px-2 py-0.5 text-xs text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

// "Repository" link, plus a "Live site" link when the project has one
function LinkRow({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name} repository on GitHub`}
        className="inline-flex items-center gap-1.5 text-accent hover:underline"
      >
        <GithubIcon className="h-3.5 w-3.5" /> Repository
      </a>
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} live site`}
          className="inline-flex items-center gap-1 text-accent hover:underline"
        >
          Live site <ArrowUpRight size={14} />
        </a>
      )}
    </div>
  )
}

// Preview image on a featured card. With no image set, a designed placeholder shows.
function Thumb({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt ?? `Screenshot of ${project.name}`}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover object-top"
      />
    )
  }
  return (
    <div className="grid aspect-[16/10] w-full place-items-center bg-gradient-to-br from-surface-2 to-surface">
      <div className="text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-accent/40 bg-accent-soft text-sm font-extrabold text-accent">
          {project.name.slice(0, 2).toUpperCase()}
        </span>
        <p className="mt-3 text-[11px] uppercase tracking-widest text-muted">
          Screenshot placeholder
        </p>
      </div>
    </div>
  )
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/60">
      <div className="border-b border-line">
        <Thumb project={project} />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Featured {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-2 break-words text-lg font-bold tracking-tight">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        <TechTags tech={project.tech} />
        <div className="mt-auto">
          <LinkRow project={project} />
        </div>
      </div>
    </article>
  )
}

function SmallCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/60">
      <h4 className="break-words text-base font-semibold">{project.name}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      <TechTags tech={project.tech} />
      <div className="mt-auto">
        <LinkRow project={project} />
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Featured work" title="Projects I have built" tinted>
      <div className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <FeaturedCard key={p.name} project={p} index={i} />
        ))}
      </div>

      <h3 className="mb-5 mt-14 text-lg font-semibold">More projects</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {secondaryProjects.map((p) => (
          <SmallCard key={p.name} project={p} />
        ))}

        {/* Placeholder for future work. It is a plain box, not a link. */}
        <div className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line p-5 text-center">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted">
            <Plus size={18} />
          </span>
          <span className="text-sm font-semibold">Next project</span>
          <span className="text-xs text-muted">Coming soon</span>
        </div>
      </div>

      <div className="mt-8">
        <a
          href={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-accent"
        >
          <GithubIcon /> View all repositories on GitHub <ArrowUpRight size={14} />
        </a>
      </div>
    </Section>
  )
}
