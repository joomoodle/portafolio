import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X, Check } from '@phosphor-icons/react'
import { SectionHeader } from '../ui/SectionHeader'
import { projects } from '../../data/projects'
import type { Project } from '../../data/projects'
import { EASE } from '../../lib/ease'
import { Reveal } from '../../lib/motion'

const categories = ['Todos', 'Fintech', 'Arquitectura', 'Mobile', 'Automatización'] as const

function Chip({ children }: { children: string }) {
  return <span className="rounded-full border border-line px-2 py-1 font-mono text-xs text-neutral-400">{children}</span>
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group flex h-full w-full flex-col rounded-3xl border border-line bg-surface p-2 text-left transition-all duration-700 ease-fluid hover:-translate-y-1 hover:border-line-strong active:scale-[0.99]"
    >
      <div className="flex flex-1 flex-col rounded-2xl bg-ink/60 p-6">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
            {project.category}
            {project.client && <span className="text-neutral-500"> · {project.client}</span>}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-neutral-400 transition-all duration-700 ease-fluid group-hover:rotate-45 group-hover:border-white group-hover:text-white">
            <ArrowUpRight size={14} />
          </span>
        </div>
        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="mb-6 text-neutral-400">{project.summary}</p>
        <ul className="mb-6 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-neutral-300">
              <Check size={14} weight="bold" className="mt-1 shrink-0 text-emerald-400" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
          {project.stack.length > 5 && <Chip>{`+${project.stack.length - 5}`}</Chip>}
        </div>
      </div>
    </button>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 p-4 backdrop-blur-xl sm:items-center"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        initial={{ y: 64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 32, opacity: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="max-h-[88svh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-line bg-surface"
      >
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-line bg-surface p-6">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
              {project.category}
              {project.client && <span className="text-neutral-500"> · {project.client}</span>}
            </p>
            <h2 id="project-title" className="text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            autoFocus
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-raised text-neutral-400 transition-colors duration-700 ease-fluid hover:text-white"
          >
            <X size={14} />
          </button>
        </div>

        <div className="space-y-8 p-6">
          <p className="text-neutral-300">{project.summary}</p>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-500">Lo que hice</p>
            <ul className="space-y-2">
              {project.responsibilities.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-neutral-300">
                  <Check size={14} weight="bold" className="mt-1 shrink-0 text-emerald-400" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {project.components && (
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-500">Componentes</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {project.components.map((c) => (
                  <div key={c.title} className="rounded-xl bg-raised p-4">
                    <p className="mb-2 text-sm font-semibold text-white">{c.title}</p>
                    <p className="text-sm text-neutral-400">{c.items.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-500">Tecnologías</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('Todos')
  const [selected, setSelected] = useState<Project | null>(null)
  const visible = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-y border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Proyectos"
          title="Plataformas que hoy operan en producción"
          description="Fintech, onboarding digital, microservicios y mobile. Abre cada proyecto para ver qué construí y con qué."
        />

        <div className="mt-12 mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar proyectos">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-700 ease-fluid ${
                filter === c ? 'bg-white font-semibold text-black' : 'border border-line text-neutral-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05} className={p.featured && filter === 'Todos' && i === 0 ? 'md:col-span-2' : ''}>
              <ProjectCard project={p} onOpen={() => setSelected(p)} />
            </Reveal>
          ))}
        </div>

        <p className="mt-12 max-w-[680px] text-xs text-neutral-600">
          Los proyectos son propiedad de las empresas para las que fueron desarrollados. Se muestran solo como
          referencia de experiencia técnica, sin información confidencial.
        </p>
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  )
}
