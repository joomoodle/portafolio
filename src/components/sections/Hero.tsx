import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Mail, ChevronDown, Smartphone, Globe, Server } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'
import { useInViewCountUp } from '../../hooks/useCountUp'

const floatingChips = [
  { icon: Smartphone, label: 'React Native', x: '8%', y: '22%', delay: 0.2 },
  { icon: Globe, label: 'React + TS', x: '82%', y: '18%', delay: 0.5 },
  { icon: Server, label: 'ASP.NET Core', x: '88%', y: '68%', delay: 0.8 },
]

const stats = [
  { numeric: 10, suffix: '+', label: 'Años de experiencia' },
  { numeric: 30, suffix: '+', label: 'Proyectos entregados' },
  { numeric: 4, suffix: '', label: 'Empresas tech' },
  { numeric: 100, suffix: '%', label: 'En producción' },
]

function StatCounter({ numeric, suffix, label }: { numeric: number; suffix: string; label: string }) {
  const { count, ref } = useInViewCountUp(numeric, 1600)
  return (
    <div ref={ref} className="rounded-xl border border-slate-800/80 bg-slate-900/50 px-4 py-4 text-center">
      <div className="heading text-2xl font-bold gradient-text mb-1">{count}{suffix}</div>
      <div className="text-xs text-slate-500 font-mono">{label}</div>
    </div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })

  // Parallax layers
  const yOrb1 = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const yOrb2 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax layer 1 — deep orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: yOrb1 }}>
        <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-3xl" />
      </motion.div>

      {/* Parallax layer 2 — mid orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: yOrb2 }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/4 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(248,250,252,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.15) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />

      {/* Floating chips — parallax layer 3 */}
      {floatingChips.map(({ icon: Icon, label, x, y, delay }) => (
        <motion.div
          key={label}
          className="absolute hidden lg:flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm border border-slate-700/60 rounded-xl px-3 py-2 text-xs text-slate-400 font-mono"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay, duration: 0.4 },
            scale: { delay, duration: 0.4 },
            y: { delay, duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Icon className="w-3.5 h-3.5 text-emerald-400" />
          {label}
        </motion.div>
      ))}

      {/* Main content — parallax layer */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ y: yContent, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 mb-8 font-mono"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible para proyectos freelance y trabajo remoto
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-none"
        >
          Hola, soy{' '}
          <span className="gradient-text">Juan Pablo</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="heading text-xl sm:text-2xl md:text-3xl font-medium text-slate-400 mb-8 tracking-tight"
        >
          Full Stack Developer · React Native · .NET · TypeScript
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Construyo{' '}
          <span className="text-emerald-400 font-semibold">aplicaciones móviles</span>,{' '}
          <span className="text-cyan-400 font-semibold">sistemas empresariales</span> y{' '}
          <span className="text-white font-semibold">APIs de alto rendimiento</span>{' '}
          que resuelven problemas reales de negocio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 h-14 px-8 rounded-xl btn-primary text-slate-950 font-semibold text-base cursor-pointer"
          >
            Hablemos de tu proyecto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 h-14 px-8 rounded-xl border border-slate-700 text-slate-300 font-semibold text-base hover:border-slate-600 hover:text-white hover:bg-slate-800/50 transition-all duration-200 cursor-pointer"
          >
            Ver proyectos
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          {[
            { href: 'https://github.com/joomoodle', icon: GithubIcon, label: 'GitHub' },
            { href: 'https://linkedin.com', icon: LinkedinIcon, label: 'LinkedIn' },
            { href: 'mailto:juanpa.ian.1992@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-700/60 transition-all duration-300 cursor-pointer"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((s) => <StatCounter key={s.label} {...s} />)}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.5, duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-mono">scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  )
}
