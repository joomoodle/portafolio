import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { testimonials } from '../../data/testimonials'
import { Star } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonios"
          title="Lo que dicen mis "
          highlight="clientes"
          description="Proyectos reales, clientes satisfechos, resultados medibles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 transition-all duration-300 card-hover flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                "{t.content}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/70">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 text-xs font-bold heading flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="heading text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
