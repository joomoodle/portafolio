import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { experiences } from '../../data/experience'
import { ExternalLink, MapPin } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Trayectoria"
          title="Experiencia "
          highlight="profesional"
          description="10+ años de experiencia construyendo software en producción para empresas tech en México."
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-cyan-500/20 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`relative flex flex-col sm:flex-row gap-8 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 hidden sm:flex">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? 'bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/50'
                      : 'bg-slate-800 border-slate-600'
                  }`} />
                </div>

                {/* Period */}
                <div className={`hidden sm:flex sm:w-[calc(50%-2rem)] items-start justify-${index % 2 === 0 ? 'end' : 'start'} pt-4`}>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-slate-500 text-sm font-mono">{exp.period}</span>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Actual
                      </span>
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="sm:w-[calc(50%-2rem)]">
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 transition-all duration-300 card-hover">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-1 sm:hidden">
                        <span className="text-slate-600 text-xs font-mono">{exp.period}</span>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-xs text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Actual
                          </span>
                        )}
                      </div>
                      <h3 className="heading text-white font-semibold text-lg">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {exp.url ? (
                          <a href={exp.url} target="_blank" rel="noopener noreferrer"
                            className="text-emerald-400 font-medium text-sm hover:text-emerald-300 flex items-center gap-1 transition-colors">
                            {exp.company} <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-emerald-400 font-medium text-sm">{exp.company}</span>
                        )}
                        <span className="text-slate-700">·</span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <MapPin className="w-3 h-3" /> México
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                    <ul className="space-y-2 mb-5">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-emerald-500 mt-1.5 shrink-0 text-xs">▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700/60 text-slate-400 text-xs font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
