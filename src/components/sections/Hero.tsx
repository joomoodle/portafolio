import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'
import { useInViewCountUp } from '../../hooks/useCountUp'

const stats = [
  { numeric: 10, suffix: '+', label: 'años' },
  { numeric: 30, suffix: '+', label: 'proyectos' },
  { numeric: 4, suffix: '', label: 'empresas' },
]

function InlineStat({ numeric, suffix, label }: { numeric: number; suffix: string; label: string }) {
  const { count, ref } = useInViewCountUp(numeric, 1400)
  return (
    <span ref={ref} className="flex flex-col items-center sm:items-start">
      <span className="heading text-3xl font-bold text-white">{count}{suffix}</span>
      <span className="text-xs text-slate-500 font-mono">{label}</span>
    </span>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle grid — single layer, not multiple orbs */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(248,250,252,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(248,250,252,0.2) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      {/* Single accent glow — bottom left, not center */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-emerald-500/6 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ y: yText, opacity: opacityText }}
      >
        {/* Status pill — fixed to top of content, not viewport center */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          /* pt-24 on mobile clears the fixed nav (h-16 = 64px) + breathing room */
          className="pt-24 md:pt-0 mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs text-emerald-400 font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible · México · Trabajo remoto
          </span>
        </motion.div>

        {/* Name — editorial, big, left-aligned */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading font-bold leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          >
            <span className="text-white block">Juan Pablo</span>
            <span className="block" style={{
              WebkitTextStroke: '2px #22C55E',
              color: 'transparent',
            }}>
              Dionicio.
            </span>
          </motion.h1>
        </div>

        {/* Divider line + role */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="origin-left"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-emerald-500 w-12 flex-shrink-0" />
            <p className="heading text-slate-400 text-lg sm:text-xl font-medium tracking-wide">
              Full Stack Developer · React Native · TypeScript · .NET
            </p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mb-10"
        >
          Construyo aplicaciones móviles, sistemas financieros y APIs
          que resuelven problemas reales de negocio — desde el banco
          hasta el onboarding digital.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 h-12 px-7 rounded-lg btn-primary text-slate-950 font-semibold text-sm cursor-pointer"
          >
            Hablemos de tu proyecto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-400 hover:text-white text-sm font-medium transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-slate-400 cursor-pointer"
          >
            Ver proyectos →
          </button>
        </motion.div>

        {/* Bottom row: stats + socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8 pt-8 border-t border-slate-800/60"
        >
          {/* Stats inline */}
          <div className="flex items-center gap-8 sm:gap-12">
            {stats.map((s) => <InlineStat key={s.label} {...s} />)}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
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
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 cursor-pointer"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
