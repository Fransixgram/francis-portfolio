import { ArrowRight, ArrowUpRight, Plus, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
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
      {tech.map((item) => (
        <li
          key={item}
          className="rounded-md border border-line bg-surface-2 px-2 py-0.5 text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function ViewProjectButton({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      aria-label={`View project details for ${project.name}`}
      className="mt-5 inline-flex items-center gap-2 self-start rounded-lg border border-accent/40 px-3.5 py-2 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent-soft"
    >
      View project <ArrowRight size={15} />
    </button>
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

function FeaturedCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: (project: Project) => void
}) {
  return (
    <article data-scroll-reveal className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/60">
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
          <ViewProjectButton project={project} onOpen={onOpen} />
        </div>
      </div>
    </article>
  )
}

function SmallCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <article data-scroll-reveal className="flex flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/60">
      <h4 className="break-words text-base font-semibold">{project.name}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
      <TechTags tech={project.tech} />
      <div className="mt-auto">
        <ViewProjectButton project={project} onOpen={onOpen} />
      </div>
    </article>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (selectedProject && dialog && !dialog.open) dialog.showModal()
    if (!selectedProject && dialog?.open) dialog.close()
  }, [selectedProject])

  const openProject = (project: Project) => setSelectedProject(project)

  return (
    <Section id="projects" eyebrow="Featured work" title="Projects I have built" tinted>
      <div className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <FeaturedCard key={project.name} project={project} index={index} onOpen={openProject} />
        ))}
      </div>

      <h3 className="mb-5 mt-14 text-lg font-semibold">More projects</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {secondaryProjects.map((project) => (
          <SmallCard key={project.name} project={project} onOpen={openProject} />
        ))}

        <div data-scroll-reveal className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line p-5 text-center">
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

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={() => setSelectedProject(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close()
        }}
        className="m-auto max-h-[88vh] w-[min(92vw,48rem)] max-w-none overflow-y-auto rounded-3xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm"
      >
        {selectedProject && (
          <div>
            <div className="relative">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt ?? `Screenshot of ${selectedProject.name}`}
                  className="max-h-72 w-full object-cover object-top"
                />
              ) : (
                <div className="grid h-36 place-items-center bg-gradient-to-br from-surface-2 to-surface">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-accent/40 bg-accent-soft text-lg font-extrabold text-accent">
                    {selectedProject.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close project details"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-slate-950/70 text-white backdrop-blur transition hover:bg-slate-950"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Project details</p>
              <h3 id="project-dialog-title" className="mt-2 break-words text-2xl font-bold tracking-tight sm:text-3xl">
                {selectedProject.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{selectedProject.summary}</p>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Built with</h4>
                <TechTags tech={selectedProject.tech} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-5">
                <a
                  href={selectedProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent-strong px-4 py-3 text-sm font-semibold text-accent-fg transition hover:opacity-90"
                >
                  <GithubIcon /> View GitHub repository <ArrowUpRight size={15} />
                </a>
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-3 text-sm font-semibold transition hover:border-accent"
                  >
                    View live project <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </Section>
  )
}
