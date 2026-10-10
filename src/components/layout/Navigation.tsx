import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { EASE } from '../../lib/ease'

const navLinks = [
  { label: 'Soluciones', id: 'services' },
  { label: 'Proyectos', id: 'projects' },
  { label: 'Proceso', id: 'process' },
  { label: 'Experiencia', id: 'experience' },
  { label: 'FAQ', id: 'faq' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ;['hero', 'world', ...navLinks.map((l) => l.id), 'contact'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    scrollTo(id)
  }

  return (
    <>
      <motion.header
        initial={{ y: -48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4"
      >
        <nav
          aria-label="Principal"
          className="mx-auto mt-6 flex w-max items-center gap-2 rounded-full border border-white/10 bg-neutral-900/70 p-2 backdrop-blur-xl"
        >
          <button
            onClick={() => go('hero')}
            className="flex h-8 items-center rounded-full px-3 font-mono text-sm font-medium text-white transition-colors duration-700 ease-fluid hover:bg-white/10"
          >
            JPD
          </button>

          <ul className="hidden items-center md:flex">
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  aria-current={active === id ? 'true' : undefined}
                  className={`h-8 rounded-full px-3 text-sm transition-colors duration-700 ease-fluid ${
                    active === id ? 'bg-white/10 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => go('contact')}
            className="hidden h-8 rounded-full bg-white px-3 text-sm font-semibold text-black transition-transform duration-700 ease-fluid hover:scale-[1.03] active:scale-[0.98] md:block"
          >
            Cotizar
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="relative h-8 w-8 rounded-full md:hidden"
          >
            <span
              className={`absolute left-2 h-px w-4 bg-white transition-all duration-700 ease-fluid ${
                open ? 'top-1/2 rotate-45' : 'top-[13px]'
              }`}
            />
            <span
              className={`absolute left-2 h-px w-4 bg-white transition-all duration-700 ease-fluid ${
                open ? 'top-1/2 -rotate-45' : 'top-[19px]'
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-3xl md:hidden"
          >
            <ul className="flex h-full flex-col justify-center gap-2 px-6">
              {[...navLinks, { label: 'Contacto', id: 'contact' }].map(({ label, id }, i) => (
                <li key={id} className="overflow-hidden">
                  <motion.button
                    initial={{ y: 48, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 24, opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: EASE }}
                    onClick={() => go(id)}
                    className={`py-2 text-4xl font-semibold tracking-tight ${active === id ? 'text-white' : 'text-neutral-500'}`}
                  >
                    {label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
