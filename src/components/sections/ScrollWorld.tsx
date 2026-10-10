import { useRef, useState } from 'react'
import type { ReactNode } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import {
  ScanSmiley,
  IdentificationCard,
  Signature,
  WhatsappLogo,
  Bank,
  Bell,
  GitBranch,
  Cube,
  CloudArrowUp,
  Database,
  ArrowsLeftRight,
  CheckCircle,
} from '@phosphor-icons/react'
import { EASE } from '../../lib/ease'

/*
 * Scroll-scrubbed "fly through" inspired by the scroll-world skill: scroll drives
 * a camera that dives into each scene and continues to the next with no cuts.
 * Instead of pre-rendered video, every scene is a live plate in a CSS 3D space.
 */

interface Scene {
  id: string
  kicker: string
  title: string
  body: string
  art: ReactNode
}

const node = 'flex items-center gap-2 rounded-lg border border-line bg-raised px-3 py-2 text-xs text-neutral-300'

const scenes: Scene[] = [
  {
    id: 'app',
    kicker: '01 · App móvil',
    title: 'Todo empieza en el teléfono del cliente',
    body: 'Registro, Face ID y captura de documentos en una app React Native para Android e iOS.',
    art: (
      <div className="flex h-full items-center justify-center gap-6">
        <div className="flex h-64 w-32 flex-col gap-2 rounded-3xl border border-line-strong bg-ink p-2">
          <div className="mx-auto h-1 w-8 rounded-full bg-line-strong" />
          <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl bg-surface">
            <ScanSmiley size={48} weight="thin" className="text-emerald-400" />
            <p className="font-mono text-xs text-neutral-400">Face ID</p>
          </div>
          <div className="rounded-xl bg-white py-2 text-center text-xs font-semibold text-black">Continuar</div>
        </div>
        <ul className="hidden space-y-2 sm:block">
          {['Registro', 'Captura de INE', 'Prueba de vida', 'Oferta de crédito'].map((s, i) => (
            <li key={s} className={node}>
              <CheckCircle size={14} weight="fill" className={i < 3 ? 'text-emerald-400' : 'text-neutral-600'} />
              {s}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'gateway',
    kicker: '02 · API Gateway',
    title: 'Un punto de entrada, muchos servicios',
    body: 'Cada solicitud cruza un API Gateway con Ocelot hacia microservicios independientes en ASP.NET Core.',
    art: (
      <div className="flex h-full flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-raised px-4 py-3 font-mono text-sm text-white">
          <ArrowsLeftRight size={18} className="text-emerald-400" />
          Ocelot Gateway
        </div>
        <svg width="100%" height="32" viewBox="0 0 400 32" preserveAspectRatio="none" aria-hidden="true" className="max-w-96">
          {[50, 150, 250, 350].map((x) => (
            <path key={x} d={`M200 0 C200 16, ${x} 16, ${x} 32`} stroke="#313131" fill="none" />
          ))}
        </svg>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {['Onboarding', 'Crédito', 'Documentos', 'Notificaciones'].map((s) => (
            <div key={s} className={`${node} justify-center font-mono`}>
              <Cube size={14} className="text-neutral-500" />
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'integrations',
    kicker: '03 · Integraciones',
    title: 'Identidad, firma y dinero conectados',
    body: 'Biometría con Veridas, firma digital con WeTrust, OCR, WhatsApp y transferencias STP orquestadas de forma asíncrona.',
    art: (
      <div className="relative flex h-full items-center justify-center">
        <div className="z-10 rounded-full border border-emerald-400/40 bg-raised px-4 py-3 font-mono text-sm text-white">
          Backend .NET
        </div>
        {[
          { label: 'Veridas', icon: ScanSmiley, pos: 'left-[6%] top-[12%]' },
          { label: 'WeTrust', icon: Signature, pos: 'right-[6%] top-[12%]' },
          { label: 'OCR', icon: IdentificationCard, pos: 'left-0 top-[44%]' },
          { label: 'STP', icon: Bank, pos: 'right-0 top-[44%]' },
          { label: 'WhatsApp', icon: WhatsappLogo, pos: 'left-[6%] bottom-[12%]' },
          { label: 'Firebase', icon: Bell, pos: 'right-[6%] bottom-[12%]' },
        ].map(({ label, icon: Icon, pos }) => (
          <div key={label} className={`absolute ${pos} ${node}`}>
            <Icon size={14} className="text-emerald-400" />
            {label}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'cloud',
    kicker: '04 · Cloud y DevOps',
    title: 'Publicar es rutina, no evento',
    body: 'Imágenes Docker, pipelines de GitLab CI/CD y despliegues en Google Cloud Run y AWS con secretos y ambientes por etapa.',
    art: (
      <div className="flex h-full flex-col justify-center gap-4">
        {[
          { icon: GitBranch, label: 'git push main', meta: 'GitLab' },
          { icon: Cube, label: 'docker build', meta: 'imagen' },
          { icon: CheckCircle, label: 'pruebas y QA', meta: 'pipeline' },
          { icon: CloudArrowUp, label: 'deploy', meta: 'Cloud Run · AWS' },
        ].map(({ icon: Icon, label, meta }, i) => (
          <div key={label} className="flex items-center gap-4">
            <span className="w-6 font-mono text-xs text-neutral-600">{String(i + 1).padStart(2, '0')}</span>
            <div className={`${node} flex-1 justify-between font-mono`}>
              <span className="flex items-center gap-2">
                <Icon size={14} className="text-emerald-400" />
                {label}
              </span>
              <span className="text-neutral-500">{meta}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'data',
    kicker: '05 · Datos y operación',
    title: 'Cada solicitud, visible en tiempo real',
    body: 'Los datos viven en SQL Server, MySQL y MongoDB, y el panel en React deja al equipo operar y dar seguimiento a cada estado.',
    art: (
      <div className="flex h-full items-center gap-4">
        <div className="hidden flex-col gap-2 sm:flex">
          {['SQL Server', 'MySQL', 'MongoDB'].map((db) => (
            <div key={db} className={node}>
              <Database size={14} className="text-emerald-400" />
              {db}
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-xl border border-line bg-ink p-3">
          <p className="mb-2 font-mono text-xs text-neutral-500">Panel · Solicitudes</p>
          {[
            ['#4821', 'Firmada', 'text-emerald-400'],
            ['#4822', 'Oferta enviada', 'text-neutral-300'],
            ['#4823', 'Validando identidad', 'text-neutral-400'],
            ['#4824', 'Registro', 'text-neutral-500'],
          ].map(([id, status, color]) => (
            <div key={id} className="flex justify-between border-t border-line py-2 font-mono text-xs">
              <span className="text-neutral-500">{id}</span>
              <span className={color}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

const N = scenes.length

// Camera position along the chain (0 = first scene, N - 1 = last). Each segment
// dwells on a scene, then flies to the next, so every plate gets a sharp hold.
function cameraAt(p: number) {
  const x = Math.min(Math.max(p, 0), 1) * (N - 1)
  const i = Math.min(Math.floor(x), N - 2)
  const f = Math.min(Math.max((x - i - 0.35) / 0.3, 0), 1)
  return i + f * f * (3 - 2 * f)
}

function ScenePlate({ scene, index, camera }: { scene: Scene; index: number; camera: MotionValue<number> }) {
  // t < 0: still ahead of the camera · t = 0: in focus · t > 0: flying past
  const t = useTransform(camera, (c) => c - index)
  const transform = useTransform(t, (v) => {
    const c = Math.min(Math.max(v, -2), 0.7)
    const tilt = c < 0 ? -c * 28 : 0
    return `translate3d(0, ${c < 0 ? -c * 40 : 0}px, ${c * 1100}px) rotateX(${tilt}deg)`
  })
  const opacity = useTransform(t, [-1.6, -0.7, 0.15, 0.6], [0, 1, 1, 0])
  const filter = useTransform(t, (v) => `blur(${v < 0 ? Math.min(-v * 5, 8) : v * 8}px)`)

  return (
    <motion.div
      style={{ transform, opacity, filter, zIndex: N - index }}
      className="absolute inset-0 flex items-center justify-center will-change-transform"
      aria-hidden="true"
    >
      <div className="h-80 w-full max-w-xl rounded-3xl border border-line bg-surface p-2">
        <div className="h-full rounded-2xl border border-line bg-ink/60 p-6">{scene.art}</div>
      </div>
    </motion.div>
  )
}

function Floor({ progress }: { progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, 640])
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 overflow-hidden [perspective:600px]" aria-hidden="true">
      <motion.div
        style={{ backgroundPositionY: y }}
        className="absolute -inset-x-1/2 -top-1/2 bottom-0 origin-bottom opacity-40 [transform:rotateX(70deg)] [background-image:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Cpath d='M64 0H0V64' fill='none' stroke='%23272727'/%3E%3C/svg%3E&quot;)]"
      />
    </div>
  )
}

function StaticWorld() {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:px-8">
      {scenes.map((s) => (
        <div key={s.id} className="grid items-center gap-6 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="mb-2 font-mono text-xs text-emerald-400">{s.kicker}</p>
            <h3 className="mb-2 text-2xl font-semibold text-white">{s.title}</h3>
            <p className="text-neutral-400">{s.body}</p>
          </div>
          <div className="h-80 rounded-3xl border border-line bg-surface p-2">
            <div className="h-full rounded-2xl border border-line bg-ink/60 p-6">{s.art}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ScrollWorld() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const camera = useTransform(scrollYProgress, cameraAt)
  const [active, setActive] = useState(0)

  useMotionValueEvent(camera, 'change', (c) => {
    const i = Math.min(N - 1, Math.max(0, Math.round(c)))
    if (i !== active) setActive(i)
  })

  const header = (
    <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-emerald-400">Recorrido</p>
      <h2 className="max-w-[680px] text-3xl font-semibold tracking-tight text-white md:text-5xl">
        Así viaja una solicitud por lo que construyo
      </h2>
    </div>
  )

  if (reduce) {
    return (
      <section id="world" className="section-y border-t border-line">
        {header}
        <StaticWorld />
      </section>
    )
  }

  const scene = scenes[active]

  return (
    <section id="world" ref={ref} className="relative border-t border-line" style={{ height: `${N * 100}svh` }}>
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden pt-32 pb-8">
        <Floor progress={scrollYProgress} />

        <div className="relative mx-auto grid w-full max-w-7xl flex-1 gap-8 px-4 sm:px-6 lg:grid-cols-[360px_1fr] lg:items-center lg:px-8">
          {/* Caption for the scene in focus */}
          <div className="relative z-20 min-h-36" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={scene.id}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <p className="mb-2 font-mono text-xs text-emerald-400">{scene.kicker}</p>
                <h3 className="mb-2 text-2xl font-semibold text-white md:text-4xl">{scene.title}</h3>
                <p className="text-neutral-400">{scene.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Camera stage */}
          <div className="relative min-h-80 [perspective:1000px]">
            <div className="absolute inset-0 [transform-style:preserve-3d]">
              {scenes.map((s, i) => (
                <ScenePlate key={s.id} scene={s} index={i} camera={camera} />
              ))}
            </div>
          </div>
        </div>

        {/* Progress rail */}
        <ol className="relative z-20 mx-auto mt-8 flex w-full max-w-7xl gap-2 px-4 sm:px-6 lg:px-8" aria-label="Escenas">
          {scenes.map((s, i) => (
            <li key={s.id} className="flex-1">
              <div className={`h-px transition-colors duration-700 ease-fluid ${i <= active ? 'bg-white' : 'bg-line-strong'}`} />
              <p className={`mt-2 hidden font-mono text-xs transition-colors duration-700 ease-fluid sm:block ${i === active ? 'text-white' : 'text-neutral-600'}`}>
                {s.kicker}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

