import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { Layers, Zap, Target, Users } from 'lucide-react'

const values = [
  {
    icon: Layers,
    title: 'Arquitectura primero',
    description: 'Diseño sistemas pensando en escalabilidad desde el día uno. Una buena arquitectura reduce costos y problemas a largo plazo.',
  },
  {
    icon: Zap,
    title: 'Entrega con impacto',
    description: 'Me enfoco en entregar valor real y medible, no solo código. Cada línea debe responder a un objetivo de negocio.',
  },
  {
    icon: Target,
    title: 'Soluciones a la medida',
    description: 'Sin soluciones genéricas. Entiendo el contexto de cada cliente para proponer la tecnología que mejor se adapta al problema.',
  },
  {
    icon: Users,
    title: 'Comunicación clara',
    description: 'Traduzco lo técnico a lenguaje de negocio. Mis clientes siempre saben el estado de su proyecto y por qué se tomó cada decisión.',
  },
]

const techStack = [
  'React Native', 'React', 'TypeScript', 'ASP.NET Core',
  'C#', 'Firebase', 'SQL Server', 'MySQL',
  'Stripe', 'OpenPay', 'FCM', 'Azure',
  'Framer Motion', 'TailwindCSS', 'Redis', 'Docker',
]

export function About() {
  return (
    <section id="about" className="section-padding bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeader
              label="Sobre mí"
              title="Más de 10 años construyendo "
              highlight="software que importa"
              centered={false}
            />

            <div className="mt-8 space-y-5 text-zinc-400 text-base leading-relaxed">
              <p>
                Soy un desarrollador Full Stack con raíces en sistemas empresariales y una profunda especialización en desarrollo móvil. Mi carrera ha cruzado sectores como{' '}
                <span className="text-zinc-200 font-medium">fintech, cobranza, telecomunicaciones y automatización</span>,
                lo que me da una perspectiva única sobre cómo la tecnología puede transformar operaciones complejas.
              </p>
              <p>
                Empecé programando sistemas de cobranza en C# y SQL Server en SWPlus, donde aprendí la importancia de la integridad de datos en entornos críticos. Luego evoluccioné hacia el mundo móvil con React Native, construyendo aplicaciones que hoy tienen cientos de miles de usuarios.
              </p>
              <p>
                Hoy lidero decisiones técnicas, diseño arquitecturas y entrego proyectos completos — desde la definición hasta el deploy. Mi filosofía es simple:{' '}
                <span className="text-violet-400 font-medium">el mejor software es el que resuelve problemas reales de la manera más simple posible.</span>
              </p>
            </div>

            {/* Tech stack marquee */}
            <div className="mt-8">
              <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4 font-medium">
                Stack tecnológico
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 text-xs font-mono hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Values grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 hover:border-violet-500/30 transition-all duration-300 card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:border-violet-500/40 transition-colors">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{description}</p>
              </motion.div>
            ))}

            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sm:col-span-2 p-6 rounded-2xl border border-zinc-800/60 bg-gradient-to-br from-violet-600/5 to-cyan-500/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  JP
                </div>
                <div>
                  <p className="text-white font-semibold">Juan Pablo Dionicio</p>
                  <p className="text-violet-400 text-sm">Full Stack Developer · México</p>
                  <p className="text-zinc-500 text-xs mt-1">React Native · React · TypeScript · .NET</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
