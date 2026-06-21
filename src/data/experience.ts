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
      'Trabajo actual. Liderazgo técnico en el desarrollo de una suite empresarial con múltiples módulos, flujos de reclutamiento, campañas y herramientas internas.',
    achievements: [
      'Lideré arquitectura de suite empresarial: control de asistencias, gestión de usuarios, catálogos, plazas y expedientes',
      'Construí módulo de contratos electrónicos con firma digital y gestión de expedientes',
      'Desarrollé sistema de reclutamiento end-to-end con flujos de aprobación configurables',
      'Implementé motor de campañas y un acortador de URLs propio para tracking',
    ],
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'SQL Server', 'Microfrontends', 'Azure'],
    url: 'https://www.it-strategy.mx/',
  },
  {
    id: 'interactive-valley',
    company: 'Interactive Valley',
    role: 'Desarrollador Full Stack (por proyecto)',
    period: '2021 — 2023',
    current: false,
    description:
      'Proyectos independientes para distintos clientes: aplicaciones de crédito con flujo de canaceo, integraciones con IA y OCR, plataformas fitness y sistemas de aprobación.',
    achievements: [
      'Desarrollé app de crédito para agentes de campo (canaceo) con admin para flujo de aprobaciones y oferta crediticia',
      'Integré OCR para lectura y extracción automática de datos de documentos',
      'Implementé integración de IA para generación de reportes automáticos',
      'Configuré infraestructura AWS: S3, EC2 y CloudWatch para monitoreo',
      'Construí proyectos fitness con seguimiento de rutinas y pagos',
    ],
    stack: ['React Native', 'React', 'TypeScript', 'ASP.NET Core', 'AWS (S3, EC2, CloudWatch)', 'OCR', 'SQL Server'],
    url: 'https://interactivevalley.com/',
  },
  {
    id: 'hybrido',
    company: 'Hybrido Studio',
    role: 'Desarrollador Full Stack',
    period: '2019 — 2021',
    current: false,
    description:
      'Desarrollo de aplicaciones y sistemas para clientes de agencia: pagos de servicios, reservas de restaurantes y adelanto de nómina integrado con STP.',
    achievements: [
      'Participé en BillyPays: app móvil para pago de servicios (agua, luz, teléfono, etc.)',
      'Construí sistema y app de reservas para restaurantes con gestión de mesas y horarios',
      'Desarrollé sistema de solicitud de adelanto de nómina conectado con STP (transferencias interbancarias en tiempo real)',
    ],
    stack: ['React Native', 'React', 'TypeScript', 'ASP.NET Core', 'MySQL', 'Firebase', 'STP'],
    url: 'https://hybrido.studio/',
  },
  {
    id: 'swplus',
    company: 'SWPlus',
    role: 'Desarrollador Junior → Mid',
    period: '2015 — 2019',
    current: false,
    description:
      'Inicio de carrera construyendo sistemas administrativos para el sector educativo privado: gestión de cobranza escolar y facturación electrónica integrada con el SAT.',
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
