import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { services } from '../../data/services'
import {
  Smartphone,
  Server,
  Globe,
  CreditCard,
  Zap,
  Lightbulb,
  Check,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Server,
  Globe,
  CreditCard,
  Zap,
  Lightbulb,
}

export function Services() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="section-padding bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Servicios"
          title="¿En qué puedo "
          highlight="ayudarte?"
          description="Desarrollo end-to-end para startups y empresas que necesitan software confiable, escalable y orientado a resultados."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Globe
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 transition-all duration-300 card-hover overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`}
                />

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-zinc-500">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-violet-600/10 to-cyan-500/10 border border-violet-500/20 text-center"
        >
          <h3 className="text-white font-bold text-2xl mb-3">
            ¿No ves lo que necesitas?
          </h3>
          <p className="text-zinc-400 max-w-lg mx-auto mb-6">
            Cuéntame tu problema y juntos diseñamos la solución más adecuada para tu negocio. Sin compromiso.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-violet-500/25"
          >
            Platica conmigo →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
