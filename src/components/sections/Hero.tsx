import { motion } from 'framer-motion'
import { ArrowDown, WhatsappLogo } from '@phosphor-icons/react'
import { contact } from '../../data/contact'
import { useInViewCountUp } from '../../hooks/useCountUp'
import { EASE } from '../../lib/ease'

const stats = [
  { value: 10, suffix: '+', label: 'años construyendo software' },
  { value: 5, suffix: '', label: 'plataformas destacadas' },
  { value: 24, suffix: 'h', label: 'para responderte' },
]

const flow = [
  { step: 'POST /onboarding/registro', status: '201' },
  { step: 'ocr.extraer(INE)', status: 'ok' },
  { step: 'veridas.compararRostro()', status: 'ok' },
  { step: 'credito.generarOferta()', status: 'ok' },
  { step: 'wetrust.firmar(contrato)', status: 'ok' },
  { step: 'whatsapp.notificar(cliente)', status: 'ok' },
]

function Stat({ value, suffix, label }: (typeof stats)[number]) {
  const { count, ref } = useInViewCountUp(value, 1400)
  return (
    <div ref={ref}>
      <p className="font-mono text-3xl font-medium text-white">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-neutral-500">{label}</p>
    </div>
  )
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 32, filter: 'blur(12px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.9, delay, ease: EASE },
})

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center pt-32 pb-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_400px] lg:px-8">
        <div>
          <motion.p {...rise(0)} className="mb-6 flex items-center gap-2 font-mono text-sm text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Juan Pablo Dionicio · Desarrollo de software a la medida
          </motion.p>

          <motion.h1
            {...rise(0.1)}
            className="hero-text mb-6 max-w-[680px] text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Tu trabajo manual,
            <br />
            convertido en software
            <br />
            que lo hace solo.
          </motion.h1>

          <motion.p {...rise(0.2)} className="mb-10 max-w-[680px] text-lg text-neutral-400">
            OCR para tus documentos, plataformas SaaS, herramientas internas, automatizaciones con WhatsApp
            y apps móviles. Más de 10 años construyendo sistemas que hoy operan en fintechs y empresas en México.
          </motion.p>

          <motion.div {...rise(0.3)} className="mb-16 flex flex-wrap items-center gap-6">
            <a
              href={`${contact.whatsappUrl}?text=${encodeURIComponent('Hola Juan Pablo, quiero cotizar un proyecto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition-transform duration-700 ease-fluid hover:scale-[1.03] active:scale-[0.98]"
            >
              <WhatsappLogo size={20} weight="fill" />
              Cotiza tu proyecto gratis
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-700 ease-fluid hover:text-white"
            >
              Ver qué puedo resolver
              <ArrowDown size={14} />
            </a>
          </motion.div>

          <motion.div {...rise(0.4)} className="flex flex-wrap gap-12 border-t border-line pt-8">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </motion.div>
        </div>

        {/* Hero visual: a real onboarding flow, step by step */}
        <motion.div
          {...rise(0.35)}
          aria-label="Flujo de onboarding digital"
          className="hidden rounded-2xl border border-line bg-surface p-2 lg:block"
        >
          <div className="flex items-center gap-2 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="ml-2 font-mono text-xs text-neutral-500">onboarding.log</span>
          </div>
          <ol className="space-y-2 rounded-xl bg-ink p-4 font-mono text-xs">
            {flow.map((f, i) => (
              <motion.li
                key={f.step}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.25, ease: EASE }}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-neutral-300">
                  <span className="text-neutral-600">{String(i + 1).padStart(2, '0')} </span>
                  {f.step}
                </span>
                <span className="text-emerald-400">{f.status}</span>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}
