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
    role: 'Desarrollador Full Stack → Líder Técnico',
    period: '2023 · Presente',
    current: true,
    description:
      'Liderazgo técnico, diseño y desarrollo de soluciones empresariales y financieras. Defino soluciones, estimo y coordino actividades del equipo, reviso código y acompaño a los desarrolladores de punta a punta del ciclo de vida.',
    achievements: [
      'Coordiné un equipo de 7 desarrolladores: planeación, prioridades, tiempos de entrega y code review',
      'Diseñé y desarrollé microservicios y APIs RESTful en .NET con API Gateway y procesos asíncronos',
      'Construí plataformas de onboarding digital y adelantos de nómina con biometría, OCR y firma digital',
      'Empaqueté servicios en contenedores Docker, configuré Nginx en Linux y mantuve pipelines de GitLab CI/CD',
      'Desplegué en AWS y Google Cloud gestionando variables, permisos, secretos y ambientes',
      'Atendí incidencias productivas de aplicaciones, infraestructura, integraciones y bases de datos',
    ],
    stack: ['.NET 8', 'ASP.NET Core', 'React', 'React Native', 'SQL Server', 'Docker', 'GitLab CI/CD', 'AWS', 'Google Cloud'],
    url: 'https://www.it-strategy.mx/',
  },
  {
    id: 'interactive-valley',
    company: 'Interactive Valley',
    role: 'Desarrollador Full Stack (por proyecto)',
    period: '2021 · 2023',
    current: false,
    description:
      'Proyectos independientes para distintos clientes: aplicaciones de crédito para agentes de campo, integraciones con IA y OCR, plataformas fitness y sistemas de aprobación.',
    achievements: [
      'Desarrollé una app de crédito para agentes de campo con panel de aprobaciones y oferta crediticia',
      'Integré OCR para la lectura y extracción automática de datos de documentos',
      'Implementé una integración de IA para generar reportes automáticos',
      'Configuré infraestructura en AWS con S3, EC2 y CloudWatch',
      'Construí proyectos fitness con seguimiento de rutinas y pagos',
    ],
    stack: ['React Native', 'React', 'TypeScript', 'ASP.NET Core', 'AWS', 'OCR', 'SQL Server'],
    url: 'https://interactivevalley.com/',
  },
  {
    id: 'hybrido',
    company: 'Hybrido Studio',
    role: 'Desarrollador Full Stack',
    period: '2019 · 2021',
    current: false,
    description:
      'Aplicaciones y sistemas para clientes de agencia: pago de servicios, reservas de restaurantes y adelanto de nómina integrado con STP.',
    achievements: [
      'Participé en BillyPays, app móvil para el pago de servicios como agua, luz y teléfono',
      'Construí un sistema y app de reservas para restaurantes con gestión de mesas y horarios',
      'Desarrollé el sistema de adelanto de nómina conectado con STP para transferencias en tiempo real',
    ],
    stack: ['React Native', 'React', 'TypeScript', 'ASP.NET Core', 'MySQL', 'Firebase', 'STP'],
    url: 'https://hybrido.studio/',
  },
  {
    id: 'swplus',
    company: 'SWPlus',
    role: 'Programador Senior → Líder de Equipo',
    period: '2015 · 2019',
    current: false,
    description:
      'Desarrollo, mantenimiento y soporte de sistemas empresariales y ERP, principalmente para el sector educativo privado. Pasé de programador a coordinar entregas y decisiones técnicas del equipo.',
    achievements: [
      'Lideré el equipo de desarrollo en la última etapa en la empresa',
      'Desarrollé el sistema de cobranza para escuelas privadas: cargos, pagos, estados de cuenta y reportes',
      'Implementé y mantuve facturación electrónica CFDI integrada con el SAT',
      'Automaticé procesos y di soporte evolutivo y correctivo a sistemas ERP en producción',
      'Implementé pruebas automatizadas con Selenium y Katalon',
    ],
    stack: ['C#', 'ASP.NET', 'SQL Server', 'JavaScript', 'jQuery', 'ERP', 'CFDI'],
    url: 'https://www.swplus.com.mx/',
  },
]
