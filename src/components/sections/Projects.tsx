import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { projects } from '../../data/projects'
import { X, ArrowRight, TrendingUp, Wrench, Lightbulb, BarChart3 } from 'lucide-react'

const projectIcons: Record<string, string> = {
  fintech: '💳',
  cobranza: '📱',
  ecommerce: '🛒',
  suite: '🏢',
  notifications: '🔔',
  automation: '⚙️',
  ai: '🤖',
  onboarding: '🪪',
}

function ProjectCard({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden card-hover cursor-pointer"
      onClick={onClick}
    >
      {/* Card image area */}
      <div className="relative h-48 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {projectIcons[project.image] ?? '💡'}
        </span>
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${project.categoryColor}`}>
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
              ★ Destacado
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.problem}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 text-xs">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-violet-400 text-sm font-medium">
          Ver caso de estudio
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  )
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-zinc-700/60 shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
          <div>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${project.categoryColor} mb-2`}>
              {project.category}
            </span>
            <h2 className="text-white font-bold text-xl">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Problem */}
          <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/15">
            <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-3">
              <TrendingUp className="w-4 h-4" />
              El Problema
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="p-5 rounded-xl bg-violet-500/5 border border-violet-500/15">
            <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm mb-3">
              <Wrench className="w-4 h-4" />
              La Solución
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">{project.solution}</p>
          </div>

          {/* Case Study */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              Caso de Estudio
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-zinc-800/40">
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium mb-2">Desafío técnico</p>
                <p className="text-zinc-300 text-sm leading-relaxed">{project.caseStudy.challenge}</p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-800/40">
                <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium mb-2">Enfoque adoptado</p>
                <p className="text-zinc-300 text-sm leading-relaxed">{project.caseStudy.approach}</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                <p className="text-emerald-400 text-xs uppercase tracking-widest font-medium mb-2">Resultado final</p>
                <p className="text-zinc-300 text-sm leading-relaxed">{project.caseStudy.outcome}</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="flex items-center gap-2 text-white font-semibold mb-4">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              Resultados medibles
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.results.map((result) => (
                <div
                  key={result}
                  className="flex items-start gap-3 p-3 rounded-xl bg-zinc-800/40"
                >
                  <span className="text-emerald-400 font-bold text-lg leading-none mt-0.5">✓</span>
                  <span className="text-zinc-300 text-sm">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div>
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-medium mb-3">
              Stack tecnológico
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700/50 text-zinc-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const categories = ['Todos', 'Fintech', 'Mobile', 'Backend', 'Enterprise', 'Automatización', 'IA']

export function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)
  const [filter, setFilter] = useState('Todos')

  const filtered = filter === 'Todos'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-padding bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Portafolio"
          title="Proyectos que generaron "
          highlight="resultados reales"
          description="Casos de estudio con problemas concretos, soluciones técnicas y métricas de impacto."
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mt-10 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700/80 border border-zinc-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selected && (
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
