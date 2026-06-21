import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { projects } from '../../data/projects'
import { X, ArrowRight, TrendingUp, Wrench, Lightbulb, BarChart3 } from 'lucide-react'

const projectIcons: Record<string, string> = {
  fintech: '💳', cobranza: '📱', ecommerce: '🛒', suite: '🏢',
  notifications: '🔔', automation: '⚙️', ai: '🤖', onboarding: '🪪',
}

const categoryColors: Record<string, string> = {
  Fintech: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Mobile: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  Backend: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Enterprise: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  Automatización: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
  IA: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
}

function ProjectCard({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl border border-slate-800/70 bg-slate-900/50 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Image area with hover overlay */}
      <div className="relative h-44 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 font-semibold text-sm px-4 py-2 rounded-lg font-heading">
            Ver caso de estudio
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        <span className="text-5xl group-hover:scale-90 group-hover:opacity-40 transition-all duration-300">
          {projectIcons[project.image] ?? '💡'}
        </span>

        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${categoryColors[project.category] ?? 'text-slate-400 bg-slate-400/10 border-slate-400/20'}`}>
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
              ★ Destacado
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="heading text-white font-bold text-base mb-2 group-hover:text-emerald-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.problem}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-xs font-mono">
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-500 text-xs">
              +{project.stack.length - 3}
            </span>
          )}
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
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/60 shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
          <div>
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border mb-2 ${categoryColors[project.category] ?? ''}`}>
              {project.category}
            </span>
            <h2 className="heading text-white font-bold text-xl">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/15">
            <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-2">
              <TrendingUp className="w-4 h-4" /> El Problema
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
              <Wrench className="w-4 h-4" /> La Solución
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
          </div>

          <div className="space-y-3">
            <p className="flex items-center gap-2 text-white font-semibold text-sm">
              <Lightbulb className="w-4 h-4 text-yellow-400" /> Caso de Estudio
            </p>
            {[
              { label: 'Desafío técnico', value: project.caseStudy.challenge },
              { label: 'Enfoque adoptado', value: project.caseStudy.approach },
              { label: 'Resultado final', value: project.caseStudy.outcome, highlight: true },
            ].map(({ label, value, highlight }) => (
              <div key={label} className={`p-4 rounded-xl ${highlight ? 'bg-emerald-500/5 border border-emerald-500/15' : 'bg-slate-800/50'}`}>
                <p className={`text-xs uppercase tracking-widest font-medium mb-2 font-mono ${highlight ? 'text-emerald-400' : 'text-slate-500'}`}>{label}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="flex items-center gap-2 text-white font-semibold text-sm mb-3">
              <BarChart3 className="w-4 h-4 text-cyan-400" /> Resultados medibles
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.results.map((r) => (
                <div key={r} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/50">
                  <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-slate-300 text-sm">{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-slate-500 text-xs uppercase tracking-widest font-mono mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700/60 text-slate-300 text-xs font-mono">
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

  const filtered = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-padding bg-slate-900/20">
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
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? 'bg-emerald-500 text-slate-950 font-semibold shadow-lg shadow-emerald-500/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <div key={project.id} className="break-inside-avoid mb-5">
                <ProjectCard project={project} onClick={() => setSelected(project)} />
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-center text-xs text-slate-600 leading-relaxed max-w-2xl mx-auto border-t border-slate-800/60 pt-8">
          Todos los proyectos mostrados son propiedad de las empresas para las que fueron desarrollados.
          Se presentan únicamente como referencia para demostrar experiencia técnica y no implican
          divulgación de información confidencial.
        </p>

        <AnimatePresence>
          {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
        </AnimatePresence>
      </div>
    </section>
  )
}
