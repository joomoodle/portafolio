import { motion } from 'framer-motion'

const techStack = [
  'React Native', 'React', 'TypeScript', 'C# / .NET',
  'SQL Server', 'MySQL', 'Firebase', 'WhatsApp API',
  'Stripe', 'OpenPay', 'Microfrontends', 'WebSockets',
]

export function About() {
  return (
    <section id="about" className="section-padding border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono text-emerald-500 uppercase tracking-[0.2em] mb-16"
        >
          — Sobre mí
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: big statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
              Más de 10 años construyendo software{' '}
              <span className="text-emerald-400">que importa.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Empecé con sistemas de cobranza escolar y facturación electrónica para el SAT. Con los años pasé a sistemas de crédito digitales con validación facial, plataformas de cobro y call center sobre WhatsApp, y suites empresariales con microfrontends.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Hoy lidero decisiones técnicas y entrego proyectos completos — desde la arquitectura hasta el deploy. Me interesa la IA aplicada al software, pero siempre con enfoque en resolver problemas reales, no en usar tecnología por usarla.
            </p>
          </motion.div>

          {/* Right: details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-between gap-12"
          >
            {/* Quick facts */}
            <div className="space-y-6">
              {[
                { label: 'Enfoque', value: 'Sistemas financieros, mobile y APIs empresariales' },
                { label: 'Industrias', value: 'Fintech · Cobranza · Educación · Telecomunicaciones' },
                { label: 'Modo de trabajo', value: 'Freelance / Remoto · Proyectos y retainer' },
                { label: 'Ubicación', value: 'México · Disponible globalmente' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-6 pb-6 border-b border-slate-800/60 last:border-0 last:pb-0">
                  <span className="text-xs font-mono text-slate-600 uppercase tracking-widest w-28 flex-shrink-0 mt-0.5">{label}</span>
                  <span className="text-slate-300 text-sm">{value}</span>
                </div>
              ))}
            </div>

            {/* Stack */}
            <div>
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-4">Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono text-slate-400 border border-slate-800 rounded hover:border-emerald-500/40 hover:text-emerald-300 transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
