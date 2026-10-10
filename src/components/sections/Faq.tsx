import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from '@phosphor-icons/react'
import { SectionHeader } from '../ui/SectionHeader'
import { EASE } from '../../lib/ease'
import { faqs } from '../../data/faqs'
import { Reveal } from '../../lib/motion'

const steps = [
  { n: '01', title: 'Entender el problema', body: 'Una llamada para conocer el negocio, los requerimientos y las restricciones antes de hablar de tecnología.' },
  { n: '02', title: 'Diseñar la solución', body: 'Propuesta técnica con arquitectura, diagramas, alternativas evaluadas y una estimación de tiempos.' },
  { n: '03', title: 'Construir y desplegar', body: 'Entregas incrementales con code review, ambientes de QA y despliegues automatizados hasta producción.' },
]


const faqSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
})

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <li className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg text-white"
      >
        {q}
        <Plus size={16} className={`shrink-0 text-neutral-400 transition-transform duration-700 ease-fluid ${open ? 'rotate-45' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-[680px] pb-6 text-neutral-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export function Process() {
  return (
    <section id="process" className="section-y border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Cómo trabajo" title="Tres pasos, sin sorpresas" />
        <ol className="mt-16 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.08} className="rounded-3xl border border-line bg-surface p-6">
              <p className="mb-8 font-mono text-sm text-emerald-400">{s.n}</p>
              <h3 className="mb-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="text-neutral-400">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section id="faq" className="section-y border-t border-line">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[360px_1fr] lg:px-8">
        <SectionHeader label="Preguntas frecuentes" title="Antes de escribirme" />
        <Reveal>
          <ul className="border-t border-line">
            {faqs.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
