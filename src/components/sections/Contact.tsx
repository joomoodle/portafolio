import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { Mail, MessageSquare, Send, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'juanpa.ian.1992@gmail.com',
    href: 'mailto:juanpa.ian.1992@gmail.com',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/juanpablo-dionicio',
    href: 'https://linkedin.com',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/jdionicio',
    href: 'https://github.com',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'México · Trabajo remoto global',
    href: null,
  },
]

const projectTypes = [
  'App Móvil (iOS/Android)',
  'Sistema Web / Dashboard',
  'API / Backend',
  'Integración de Pagos',
  'Automatización de Procesos',
  'Consultoría Técnica',
]

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contacto"
          title="Hablemos de tu "
          highlight="próximo proyecto"
          description="¿Tienes una idea, un problema o un proyecto en mente? Cuéntame. Respondo en menos de 24 horas."
        />

        <div className="grid lg:grid-cols-5 gap-10 mt-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-600/10 to-cyan-500/5 border border-violet-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Respuesta rápida</p>
                  <p className="text-zinc-500 text-xs">Generalmente en menos de 24h</p>
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Prefiero entender bien el problema antes de proponer una solución. En nuestra primera llamada te haré preguntas sobre el negocio, no solo sobre tecnología.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-zinc-600 text-xs">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-zinc-300 text-sm hover:text-violet-400 transition-colors truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-zinc-300 text-sm truncate">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/60 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <p className="text-zinc-300 text-sm font-medium">Agenda una llamada</p>
                <p className="text-zinc-500 text-xs">30 min · Sin compromiso</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center p-12 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 20 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-white font-bold text-xl mb-2">¡Mensaje enviado!</h3>
                <p className="text-zinc-400 text-sm max-w-sm">
                  Gracias por escribirme. Revisaré tu mensaje y te responderé en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 text-xs font-medium mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="w-full h-11 px-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-xs font-medium mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      className="w-full h-11 px-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 text-xs font-medium mb-1.5">
                      Empresa / Startup
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="w-full h-11 px-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-xs font-medium mb-1.5">
                      Tipo de proyecto
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full h-11 px-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 text-white text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-zinc-900">Selecciona una opción</option>
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-zinc-900">{pt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 text-xs font-medium mb-1.5">
                    Presupuesto estimado
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full h-11 px-4 rounded-xl bg-zinc-800/60 border border-zinc-700/50 text-white text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-zinc-900">¿En qué rango estás?</option>
                    <option value="<5k" className="bg-zinc-900">Menos de $5,000 USD</option>
                    <option value="5k-15k" className="bg-zinc-900">$5,000 – $15,000 USD</option>
                    <option value="15k-30k" className="bg-zinc-900">$15,000 – $30,000 USD</option>
                    <option value="30k+" className="bg-zinc-900">Más de $30,000 USD</option>
                    <option value="freelance" className="bg-zinc-900">Por hora / retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 text-xs font-medium mb-1.5">
                    Cuéntame sobre tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe el problema que quieres resolver, las funcionalidades principales y cualquier detalle relevante..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-800/60 border border-zinc-700/50 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform shadow-lg shadow-violet-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
