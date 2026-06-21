import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { threshold: 0.4 }
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNav('#hero')}
              className="flex items-center gap-2 text-white font-bold text-lg hover:opacity-80 transition-opacity cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-slate-950" />
              </div>
              <span className="heading gradient-text font-bold">JPD</span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === href.replace('#', '')
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => handleNav('#contact')}
              className="hidden md:inline-flex items-center gap-2 h-9 px-5 rounded-lg btn-primary text-sm cursor-pointer"
            >
              Trabajemos juntos
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white cursor-pointer"
              aria-label="Menú"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-slate-950/97 backdrop-blur-xl border-b border-slate-800 shadow-xl"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 text-left transition-colors cursor-pointer"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="mt-2 px-4 py-3 rounded-lg btn-primary text-sm text-center cursor-pointer"
              >
                Trabajemos juntos
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
