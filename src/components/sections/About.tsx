import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { Layers, Zap, Target, Users } from 'lucide-react'

const values = [
  { icon: Layers, title: 'Arquitectura primero', description: 'Diseño sistemas pensando en escalabilidad desde el día uno. Una buena arquitectura reduce costos y problemas a largo plazo.' },
  { icon: Zap, title: 'Entrega con impacto', description: 'Me enfoco en entregar valor real y medible, no solo código. Cada línea debe responder a un objetivo de negocio.' },
  { icon: Target, title: 'Soluciones a la medida', description: 'Sin soluciones genéricas. Entiendo el contexto de cada cliente para proponer la tecnología que mejor se adapta.' },
  { icon: Users, title: 'Comunicación clara', description: 'Traduzco lo técnico a lenguaje de negocio. Mis clientes siempre saben el estado de su proyecto.' },
]

const techStack = [
  'React Native', 'React', 'TypeScript', 'ASP.NET Core',
  'C#', 'Firebase', 'SQL Server', 'MySQL',
  'WhatsApp API', 'Stripe', 'OpenPay', 'Azure',
  'Microfrontends', 'WebSockets', 'FCM', 'JWT',
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Sobre mí"
              title="Más de 10 años construyendo "
              highlight="software que importa"
              centered={false}
            />
            <div className="mt-8 space-y-5 text-slate-400 text-base leading-relaxed">
              <p>
                Soy un desarrollador Full Stack con raíces en sistemas empresariales y una profunda especialización en desarrollo móvil. Mi carrera ha cruzado sectores como{' '}
                <span className="text-slate-200 font-medium">fintech, cobranza, telecomunicaciones y automatización</span>.
              </p>
              <p>
                Empecé construyendo sistemas de cobranza para escuelas privadas y facturación electrónica en SWPlus. Luego evolucioné hacia sistemas de crédito digitales con validación facial, plataformas de cobro sobre WhatsApp y suites empresariales con microfrontends.
              </p>
              <p>
                Hoy lidero decisiones técnicas y entrego proyectos completos — desde la definición hasta el deploy.{' '}
                <span className="text-emerald-400 font-medium">El mejor software es el que resuelve problemas reales de la manera más simple posible.</span>
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs text-slate-600 uppercase tracking-widest mb-4 font-mono font-medium">Stack tecnológico</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono hover:border-emerald-500/40 hover:text-emerald-300 transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-emerald-500/30 transition-all duration-300 card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/15 transition-colors">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="heading text-white font-semibold mb-2 text-sm">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="sm:col-span-2 p-6 rounded-2xl border border-slate-800/70 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-slate-950 text-xl font-bold heading flex-shrink-0">
                  JP
                </div>
                <div>
                  <p className="heading text-white font-bold">Juan Pablo Dionicio</p>
                  <p className="text-emerald-400 text-sm">Full Stack Developer · México</p>
                  <p className="text-slate-500 text-xs mt-1 font-mono">React Native · React · TypeScript · .NET</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
