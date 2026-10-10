import { Check, ArrowRight } from '@phosphor-icons/react'
import { SectionHeader } from '../ui/SectionHeader'
import { iconMap } from '../ui/icons'
import { services } from '../../data/services'
import { contact } from '../../data/contact'
import { Reveal } from '../../lib/motion'

function quoteHref(title: string) {
  return `${contact.whatsappUrl}?text=${encodeURIComponent(`Hola Juan Pablo, quiero cotizar: ${title}.`)}`
}

export function Services() {
  return (
    <section id="services" className="section-y border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Soluciones"
          title="Si te suena alguno de estos problemas, lo puedo resolver"
          description="Desarrollo a la medida para empresas, startups y emprendedores. Cada solución se apoya en algo que ya construí y opera en producción."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <Reveal key={s.id} delay={i * 0.05}>
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-surface p-2 transition-colors duration-700 ease-fluid hover:border-line-strong">
                  <div className="rounded-2xl bg-raised p-6">
                    <p className="text-neutral-300">“{s.pain}”</p>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Icon size={24} className="text-emerald-400" />
                      <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                    </div>
                    <p className="mb-6 text-neutral-400">{s.description}</p>
                    <ul className="mb-6 space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-neutral-300">
                          <Check size={14} weight="bold" className="mt-1 shrink-0 text-emerald-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="mb-6 border-t border-line pt-4 text-sm text-neutral-500">{s.proof}</p>
                    <a
                      href={quoteHref(s.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex w-max items-center gap-2 text-sm font-semibold text-white transition-colors duration-700 ease-fluid hover:text-emerald-400"
                    >
                      Cotizar esta solución
                      <ArrowRight size={14} className="transition-transform duration-700 ease-fluid group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8">
          <p className="text-neutral-400">
            ¿Tu caso no está aquí?{' '}
            <a href="#contact" className="text-white underline decoration-line-strong underline-offset-4 hover:decoration-white">
              Cuéntamelo
            </a>
            . Si se puede resolver con software, lo platicamos.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
