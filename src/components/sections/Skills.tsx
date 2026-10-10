import { SectionHeader } from '../ui/SectionHeader'
import { iconMap } from '../ui/icons'
import { stackGroups } from '../../data/stack'
import { Reveal } from '../../lib/motion'

export function Skills() {
  return (
    <section id="skills" className="section-y border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Stack"
          title="Herramientas que uso en producción"
          description="Del backend en .NET a la app móvil y el pipeline que la despliega."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stackGroups.map((g, i) => {
            const Icon = iconMap[g.icon]
            return (
              <Reveal key={g.id} delay={i * 0.04} className={g.wide ? 'lg:col-span-2' : ''}>
                <div className="h-full rounded-3xl border border-line bg-surface p-6">
                  <div className="mb-6 flex items-center gap-2">
                    <Icon size={20} className="text-emerald-400" />
                    <h3 className="font-semibold text-white">{g.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item} className="rounded-full bg-raised px-3 py-1 font-mono text-xs text-neutral-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-8">
          <p className="text-sm text-neutral-500">
            También: Java (básico), RabbitMQ y arquitectura orientada a eventos (conceptual).
          </p>
        </Reveal>
      </div>
    </section>
  )
}
