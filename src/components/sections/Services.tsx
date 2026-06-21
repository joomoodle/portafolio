import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { services } from '../../data/services'
import { Smartphone, Server, Globe, CreditCard, Zap, Lightbulb, Check } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Smartphone, Server, Globe, CreditCard, Zap, Lightbulb,
}

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Servicios"
          title="¿En qué puedo "
          highlight="ayudarte?"
          description="Desarrollo end-to-end para startups y empresas que necesitan software confiable, escalable y orientado a resultados."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 transition-all duration-300 card-hover overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-500">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-center"
        >
          <h3 className="heading text-white font-bold text-2xl mb-3">¿No ves lo que necesitas?</h3>
          <p className="text-slate-400 max-w-lg mx-auto mb-6">
            Cuéntame tu problema y juntos diseñamos la solución más adecuada para tu negocio. Sin compromiso.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl btn-primary text-slate-950 font-semibold cursor-pointer"
          >
            Platica conmigo →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
