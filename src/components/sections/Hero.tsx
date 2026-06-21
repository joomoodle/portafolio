import { motion } from 'framer-motion'
import { ArrowRight, Mail, ChevronDown, Smartphone, Globe, Server } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'
import { useInViewCountUp } from '../../hooks/useCountUp'

const floatingIcons = [
  { icon: Smartphone, label: 'Mobile', x: '10%', y: '20%', delay: 0 },
  { icon: Globe, label: 'Web', x: '85%', y: '15%', delay: 0.5 },
  { icon: Server, label: 'API', x: '90%', y: '70%', delay: 1 },
]

const stats = [
  { numeric: 10, suffix: '+', label: 'Años de experiencia' },
  { numeric: 30, suffix: '+', label: 'Proyectos entregados' },
  { numeric: 4, suffix: '', label: 'Empresas tech' },
  { numeric: 100, suffix: '%', label: 'Proyectos en producción' },
]

function StatCounter({ numeric, suffix, label }: { numeric: number; suffix: string; label: string }) {
  const { count, ref } = useInViewCountUp(numeric, 1600)
  return (
    <div
      ref={ref}
      className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm px-4 py-4"
    >
      <div className="text-2xl font-bold gradient-text mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs text-zinc-500">{label}</div>
    </div>
  )
}

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map(({ icon: Icon, label, x, y, delay }) => (
        <motion.div
          key={label}
          className="absolute hidden lg:flex items-center gap-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-xl px-3 py-2 text-xs text-zinc-400"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: delay + 1, duration: 0.4 },
            scale: { delay: delay + 1, duration: 0.4 },
            y: { delay: delay + 1, duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Icon className="w-3.5 h-3.5 text-violet-400" />
          {label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-400 mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          Disponible para proyectos freelance y trabajo remoto
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Hola, soy{' '}
          <span className="gradient-text">Juan Pablo</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-300 mb-6"
        >
          Full Stack Developer
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Construyo{' '}
          <span className="text-violet-400 font-medium">aplicaciones móviles</span>,{' '}
          <span className="text-cyan-400 font-medium">sistemas empresariales</span> y{' '}
          <span className="text-emerald-400 font-medium">APIs de alto rendimiento</span>{' '}
          que resuelven problemas reales de negocio. Especialista en React Native, React, TypeScript y .NET.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-base shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all duration-200"
          >
            Hablemos de tu proyecto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 h-14 px-8 rounded-xl border border-zinc-700 text-zinc-300 font-semibold text-base hover:border-zinc-600 hover:text-white hover:bg-zinc-800/50 transition-all duration-200"
          >
            Ver proyectos
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          {[
            { href: 'https://github.com', icon: GithubIcon, label: 'GitHub' },
            { href: 'https://linkedin.com', icon: LinkedinIcon, label: 'LinkedIn' },
            { href: 'mailto:juanpa.ian.1992@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/50 hover:bg-zinc-700/80 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  )
}
