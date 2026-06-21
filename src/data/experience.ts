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
    role: 'Tech Lead & Desarrollador Full Stack',
    period: '2023 — Presente',
    current: true,
    description:
      'Liderazgo técnico en el desarrollo de productos digitales complejos: sistemas de reclutamiento, suites empresariales con microfrontends, expedientes electrónicos y contratos digitales. Responsable de decisiones de arquitectura, code reviews y guía del equipo.',
    achievements: [
      'Lideré arquitectura de suite empresarial con microfrontends independientes por módulo',
      'Construí sistema de reclutamiento end-to-end: publicación de vacantes, evaluaciones y gestión de candidatos',
      'Desarrollé módulo de expedientes y contratos electrónicos con firma digital',
      'Implementé motor de campañas configurable para distintos tipos de clientes',
    ],
    stack: ['React', 'TypeScript', 'Microfrontends', 'ASP.NET Core', 'SQL Server', 'Azure', 'Module Federation'],
    url: 'https://www.it-strategy.mx/',
  },
  {
    id: 'interactive-valley',
    company: 'Interactive Valley',
    role: 'Desarrollador Full Stack',
    period: '2021 — 2023',
    current: false,
    description:
      'Desarrollo de sistemas financieros y de comunicación de alto impacto: flujos de crédito digitales, onboarding con validación facial, plataformas de cobro y call center sobre WhatsApp, y sistemas con actualizaciones en tiempo real.',
    achievements: [
      'Construí flujo completo de solicitud de crédito: desde el análisis bancario hasta el onboarding digital',
      'Implementé validación de identidad con detección de rostro (liveness detection) en app móvil',
      'Desarrollé plataforma de cobro y call center integrada con WhatsApp Business API',
      'Implementé funcionalidades en tiempo real con WebSockets para dashboards operativos',
    ],
    stack: ['React Native', 'React', 'TypeScript', 'ASP.NET Core', 'WhatsApp Business API', 'WebSockets', 'Firebase', 'SQL Server'],
    url: 'https://interactivevalley.com/',
  },
  {
    id: 'hybrido',
    company: 'Hybrido Studio',
    role: 'Desarrollador Full Stack',
    period: '2019 — 2021',
    current: false,
    description:
      'Desarrollo de sistemas de crédito y productos digitales para el sector financiero. Construcción de flujos de solicitud, análisis de riesgo y gestión de expedientes de crédito.',
    achievements: [
      'Desarrollé sistema de solicitudes de crédito con flujo de aprobación multirol',
      'Construí módulo de análisis de riesgo con reglas de negocio configurables',
      'Implementé APIs REST de alto rendimiento para consumo desde apps móviles',
      'Integré autenticación JWT y manejo de sesiones seguras para usuarios financieros',
    ],
    stack: ['React', 'React Native', 'TypeScript', 'ASP.NET Core', 'MySQL', 'Firebase', 'JWT'],
    url: 'https://hybrido.studio/',
  },
  {
    id: 'swplus',
    company: 'SWPlus',
    role: 'Desarrollador Junior → Mid',
    period: '2015 — 2019',
    current: false,
    description:
      'Primeros 4 años de carrera construyendo sistemas administrativos para el sector educativo privado: plataformas de gestión de cobranza escolar y facturación electrónica. Base sólida en backend, modelado de datos y calidad de software.',
    achievements: [
      'Desarrollé sistema de gestión de cobranza para escuelas privadas: cargos, pagos, estados de cuenta y reportes',
      'Construí módulo de facturación electrónica (CFDI) integrado con el SAT',
      'Implementé pruebas automatizadas con Selenium y Katalon para control de calidad',
      'Colaboré en el diseño de esquemas de base de datos para operaciones financieras escolares',
    ],
    stack: ['C#', '.NET', 'SQL Server', 'jQuery', 'Selenium', 'Katalon', 'CFDI / SAT'],
    url: 'https://www.swplus.com.mx/',
  },
]
