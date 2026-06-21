export interface Experience {
  id: string
  company: string
  role: string
  period: string
  current: boolean
  description: string
  achievements: string[]
  stack: string[]
  url?: string
}

export const experiences: Experience[] = [
  {
    id: 'it-strategy',
    company: 'IT Strategy',
    role: 'Desarrollador Full Stack Senior',
    period: '2023 — Presente',
    current: true,
    description:
      'Liderazgo técnico en proyectos de transformación digital para clientes del sector financiero y gubernamental. Definición de arquitecturas, code reviews y mentoring al equipo.',
    achievements: [
      'Arquitecté una plataforma de crédito digital que digitalizó el proceso de 3 sucursales',
      'Lideré migración de sistema legacy a arquitectura cloud-first con zero downtime',
      'Reduje en 60% el tiempo de despliegue con pipelines CI/CD y contenedores',
      'Propuse e implementé módulo de automatización que liberó 800h/mes de trabajo manual',
    ],
    stack: ['React', 'React Native', 'ASP.NET Core', 'SQL Server', 'Azure', 'TypeScript'],
    url: 'https://www.it-strategy.mx/',
  },
  {
    id: 'interactive-valley',
    company: 'Interactive Valley',
    role: 'Desarrollador Mobile & Full Stack',
    period: '2022 — 2023',
    current: false,
    description:
      'Desarrollo de aplicaciones móviles y sistemas web para clientes de distintas industrias. Trabajo en equipo ágil con sprints quincenales y entrega continua.',
    achievements: [
      'Entregué 4 aplicaciones móviles para Android e iOS en producción',
      'Integré sistemas de pago con Stripe y OpenPay en múltiples proyectos',
      'Desarrollé módulo de notificaciones push para 50,000+ usuarios activos',
      'Mejoré el performance de apps React Native en 40% mediante optimización de renders',
    ],
    stack: ['React Native', 'React', 'Firebase', 'FCM', 'TypeScript', 'Node.js'],
    url: 'https://interactivevalley.com/',
  },
  {
    id: 'hybrido',
    company: 'Hybrido Studio',
    role: 'Desarrollador Full Stack',
    period: '2021 — 2022',
    current: false,
    description:
      'Desarrollo de productos digitales para agencias y startups. Participación desde el diseño técnico hasta el deploy. Ambiente de innovación y experimentación tecnológica.',
    achievements: [
      'Construí 3 MVPs desde cero para startups en etapa seed',
      'Implementé sistema de autenticación con biometría y JWT para app fintech',
      'Desarrollé APIs REST consumidas por más de 15,000 usuarios mensuales',
      'Introduje TypeScript al equipo, reduciendo bugs en producción en 35%',
    ],
    stack: ['React', 'React Native', 'TypeScript', 'ASP.NET Core', 'MySQL', 'Firebase'],
    url: 'https://hybrido.studio/',
  },
  {
    id: 'swplus',
    company: 'SWPlus',
    role: 'Desarrollador Junior → Mid',
    period: '2015 — 2019',
    current: false,
    description:
      'Inicio de carrera en desarrollo de sistemas empresariales. Aprendizaje profundo de arquitecturas backend, modelado de datos y desarrollo de interfaces administrativas.',
    achievements: [
      'Desarrollé módulo de cobranza que digitalizó el proceso de 80 gestores de campo',
      'Construí sistema de reportes en tiempo real con SignalR para dirección general',
      'Aprendí y apliqué pruebas automatizadas con Selenium y Katalon',
      'Participé en onboarding y entrenamiento de desarrolladores junior',
    ],
    stack: ['C#', '.NET', 'React', 'SQL Server', 'Selenium', 'Katalon', 'jQuery'],
    url: 'https://www.swplus.com.mx/',
  },
]
