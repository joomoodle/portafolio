import { Reveal } from '../../lib/motion'

const facts = [
  { label: 'Rol actual', value: 'Líder Técnico en IT Strategy' },
  { label: 'Enfoque', value: 'Backend .NET, microservicios, mobile y cloud' },
  { label: 'Industrias', value: 'Fintech · Crédito digital · Educación · ERP' },
  { label: 'Idiomas', value: 'Español nativo · Inglés técnico' },
  { label: 'Formación', value: 'Ingeniería en TI, UT Xicotepec de Juárez' },
  { label: 'Modalidad', value: 'Remoto · Proyecto o tiempo completo' },
]

export function About() {
  return (
    <section id="about" className="section-y border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-emerald-400">Sobre mí</p>
          <h2 className="mb-8 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Del ERP escolar al onboarding con biometría
          </h2>
          <div className="space-y-6 text-lg text-neutral-400">
            <p>
              Empecé en 2015 con cobranza escolar y facturación CFDI en C# y SQL Server. Desde entonces he
              participado en todo el ciclo de vida del software: requerimientos, arquitectura, desarrollo, code
              review, pruebas, despliegue, monitoreo y soporte productivo.
            </p>
            <p>
              Hoy como Líder Técnico defino soluciones, estimo y coordino al equipo, y sigo escribiendo código:
              APIs en ASP.NET Core, apps en React Native y pipelines que despliegan en AWS y Google Cloud.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-emerald-400">IA como herramienta</p>
            <p className="text-sm text-neutral-300">
              Uso IA para acelerar el desarrollo y encontrar errores antes de producción. No reemplaza el criterio
              técnico: lo multiplica cuando hay experiencia detrás.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="divide-y divide-line border-y border-line">
            {facts.map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-2 py-4 sm:flex-row sm:gap-6">
                <dt className="w-32 shrink-0 font-mono text-xs uppercase tracking-widest text-neutral-500 sm:pt-1">{label}</dt>
                <dd className="text-neutral-200">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
