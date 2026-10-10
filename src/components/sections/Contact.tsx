import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { EnvelopeSimple, WhatsappLogo, GithubLogo, LinkedinLogo, MapPin, PaperPlaneTilt } from '@phosphor-icons/react'
import { contact } from '../../data/contact'
import { Reveal } from '../../lib/motion'

const projectTypes = [
  'OCR y procesamiento de documentos',
  'Plataforma SaaS o MVP',
  'Herramienta interna o panel',
  'Automatización o integración',
  'App móvil',
  'Backend, cloud o rescate de sistema',
  'Otro',
]

type Form = { name: string; email: string; type: string; message: string }
type Errors = Partial<Record<keyof Form, string>>

function validate(f: Form): Errors {
  const e: Errors = {}
  if (!f.name.trim()) e.name = 'Escribe tu nombre.'
  if (!f.email.trim()) e.email = 'Escribe tu correo.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Revisa el formato del correo.'
  if (f.message.trim().length < 20) e.message = 'Cuéntame un poco más, al menos 20 caracteres.'
  return e
}

function composeBody(f: Form) {
  return `Hola Juan Pablo, soy ${f.name} (${f.email}).\n\nTipo de proyecto: ${f.type || 'Sin especificar'}\n\n${f.message}`
}

export function Contact() {
  const [form, setForm] = useState<Form>({ name: '', email: '', type: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setErrors((er) => ({ ...er, [e.target.name]: undefined }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) return
    const subject = encodeURIComponent(`Proyecto: ${form.type || 'Contacto desde el portafolio'}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${encodeURIComponent(composeBody(form))}`
    setSent(true)
  }

  const whatsappHref = `${contact.whatsappUrl}?text=${encodeURIComponent(
    form.message ? composeBody(form) : 'Hola Juan Pablo, quiero cotizar un proyecto.',
  )}`

  const field = (name: keyof Form) =>
    `w-full rounded-xl border bg-ink px-4 py-3 text-base text-white placeholder:text-neutral-600 transition-colors duration-700 ease-fluid focus:outline-none focus:border-emerald-400 ${
      errors[name] ? 'border-red-400' : 'border-line'
    }`

  return (
    <section id="contact" className="section-y border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-emerald-400">Contacto</p>
          <h2 className="hero-text mb-6 max-w-[680px] text-4xl font-semibold tracking-tight md:text-6xl">
            Cuéntame qué quieres
            <br />
            dejar de hacer a mano
          </h2>
          <p className="mb-10 max-w-[680px] text-lg text-neutral-400">
            Respondo en menos de 24 horas en días hábiles. La primera llamada es para entender tu negocio, sin costo ni compromiso, y después recibes una propuesta con alcance, tiempos y costo.
          </p>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition-transform duration-700 ease-fluid hover:scale-[1.03] active:scale-[0.98]"
          >
            <WhatsappLogo size={20} weight="fill" />
            Cotiza tu proyecto gratis
          </a>

          <ul className="space-y-4">
            {[
              { icon: EnvelopeSimple, label: contact.email, href: `mailto:${contact.email}` },
              { icon: WhatsappLogo, label: contact.phoneDisplay, href: contact.whatsappUrl },
              { icon: LinkedinLogo, label: 'LinkedIn', href: contact.linkedin },
              { icon: GithubLogo, label: 'GitHub', href: contact.github },
              { icon: MapPin, label: contact.location, href: null },
            ].map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-4 text-neutral-300">
                <Icon size={20} className="text-neutral-500" />
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="transition-colors duration-700 ease-fluid hover:text-white"
                  >
                    {label}
                  </a>
                ) : (
                  label
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-line bg-surface p-2">
            {sent ? (
              <div className="flex min-h-96 flex-col justify-center rounded-2xl bg-ink/60 p-8">
                <h3 className="mb-2 text-2xl font-semibold text-white">Tu mensaje está listo para enviarse</h3>
                <p className="mb-6 text-neutral-400">
                  Abrimos tu app de correo con todo prellenado. Si no se abrió, escríbeme directo a {contact.email} o por WhatsApp.
                </p>
                <button onClick={() => setSent(false)} className="w-max text-sm text-emerald-400 hover:text-emerald-300">
                  Editar mensaje
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-ink/60 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-neutral-400">Nombre</label>
                    <input id="name" name="name" value={form.name} onChange={onChange} autoComplete="name"
                      aria-invalid={!!errors.name} aria-describedby="name-error" className={field('name')} />
                    {errors.name && <p id="name-error" className="mt-2 text-sm text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-neutral-400">Correo</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={onChange} autoComplete="email"
                      aria-invalid={!!errors.email} aria-describedby="email-error" className={field('email')} />
                    {errors.email && <p id="email-error" className="mt-2 text-sm text-red-400">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="type" className="mb-2 block text-sm text-neutral-400">Tipo de proyecto</label>
                  <select id="type" name="type" value={form.type} onChange={onChange} className={`${field('type')} cursor-pointer`}>
                    <option value="">Selecciona una opción</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-neutral-400">Tu proyecto</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange}
                    placeholder="Qué haces hoy a mano, cuánto tiempo te toma y qué te gustaría automatizar"
                    aria-invalid={!!errors.message} aria-describedby="message-error" className={`${field('message')} resize-none`} />
                  {errors.message && <p id="message-error" className="mt-2 text-sm text-red-400">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3 text-base font-semibold text-white transition-colors duration-700 ease-fluid hover:bg-white hover:text-black active:scale-[0.98]"
                >
                  <PaperPlaneTilt size={16} />
                  Enviar por correo
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
