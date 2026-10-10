import { ArrowUpRight } from '@phosphor-icons/react'
import { SectionHeader } from '../ui/SectionHeader'
import { experiences } from '../../data/experience'
import { Reveal } from '../../lib/motion'

export function Experience() {
  return (
    <section id="experience" className="section-y border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Experiencia"
          title="Más de 10 años, de programador a líder técnico"
          description="Cuatro empresas, sistemas empresariales, ERP y plataformas financieras en México."
        />

        <ol className="mt-16 divide-y divide-line border-y border-line">
          {experiences.map((exp) => (
            <Reveal as="li" key={exp.id} className="grid gap-6 py-12 lg:grid-cols-[280px_1fr]">
              <div>
                <p className="mb-2 font-mono text-sm text-neutral-500">{exp.period}</p>
                {exp.current && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-2 py-1 font-mono text-xs text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    Actual
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">{exp.role}</h3>
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-emerald-400 transition-colors duration-700 ease-fluid hover:text-emerald-300"
                  >
                    {exp.company}
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <p className="mt-2 text-emerald-400">{exp.company}</p>
                )}
                <p className="mt-4 max-w-[680px] text-neutral-400">{exp.description}</p>

                <ul className="mt-6 grid gap-2 md:grid-cols-2">
                  {exp.achievements.map((a) => (
                    <li key={a} className="rounded-xl border border-line bg-surface p-4 text-sm text-neutral-300">
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.stack.map((t) => (
                    <span key={t} className="rounded-full border border-line px-2 py-1 font-mono text-xs text-neutral-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
