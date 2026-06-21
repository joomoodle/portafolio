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
    role: 'Desarrollador Full Stack → Líder de Equipo → Full Stack',
    period: '2023 — Presente',
    current: true,
    description:
      'Ingresé como desarrollador, crecí a líder de un equipo de 7 personas y, por movimientos internos de la empresa, regresé al rol de full stack. Sigo aportando al equipo en propuestas de arquitectura, mejoras de proceso y calidad de código.',
    achievements: [
      'Lideré un equipo de 7 desarrolladores: planeación de sprints, code reviews y mentoring',
      'Propuse e implementé suite empresarial: asistencias, usuarios, catálogos, plazas y expedientes',
      'Desarrollé módulo de contratos electrónicos con firma digital',
      'Construí sistema de reclutamiento con flujos de aprobación y motor de campañas',
      'Implementé acortador de URLs interno para tracking de campañas',
      'Continúo proponiendo soluciones, mejoras de arquitectura y estándares de calidad de código',
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
    role: 'Desarrollador → Líder de Equipo',
    period: '2015 — 2019',
    current: false,
    description:
      'Primeros años de carrera en sistemas administrativos para el sector educativo privado. Evolucioné de desarrollador a líder de equipo, coordinando entregas y tomando decisiones técnicas.',
    achievements: [
      'Lideré el equipo de desarrollo en los últimos años de la etapa en la empresa',
      'Desarrollé sistema de gestión de cobranza para escuelas privadas: cargos, pagos, estados de cuenta y reportes',
      'Construí módulo de facturación electrónica (CFDI) integrado con el SAT',
      'Implementé pruebas automatizadas con Selenium y Katalon para control de calidad',
    ],
    stack: ['C#', '.NET', 'SQL Server', 'jQuery', 'Selenium', 'Katalon', 'CFDI / SAT'],
    url: 'https://www.swplus.com.mx/',
  },
]
