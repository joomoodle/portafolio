export type ProjectCategory = 'Fintech' | 'Mobile' | 'Arquitectura' | 'Automatización'

export interface Project {
  id: string
  title: string
  client?: string
  category: ProjectCategory
  summary: string
  highlights: string[]
  responsibilities: string[]
  components?: { title: string; items: string[] }[]
  stack: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'onboarding-midinerito',
    title: 'Onboarding digital para crédito',
    client: 'MiDinerito',
    category: 'Fintech',
    summary:
      'Plataforma de onboarding financiero con backend, app móvil y panel administrativo para digitalizar el registro, la validación de identidad, las ofertas de crédito y la formalización de operaciones.',
    highlights: [
      'Validación biométrica y reconocimiento facial con Veridas',
      'Firma digital de documentos con WeTrust',
      'OCR para extracción y validación documental',
      'Flujos automatizados por WhatsApp y notificaciones push',
    ],
    responsibilities: [
      'Diseño y desarrollo del backend y de las APIs RESTful de la plataforma',
      'App móvil para Android e iOS con React Native',
      'Panel administrativo en React para usuarios, solicitudes y ofertas de crédito',
      'Flujos de registro, evaluación y control de estados de cada solicitud',
      'Comunicación y procesamiento en tiempo real y procesos asíncronos',
      'Comparación de rostros e identidad contra documentos oficiales',
      'Contenerización con Docker, pipelines de GitLab CI/CD y despliegue en la nube',
      'Diagnóstico de incidencias productivas y optimización de OCR y biometría',
    ],
    components: [
      { title: 'App móvil', items: ['React Native', 'Android', 'iOS', 'Face ID', 'Push'] },
      { title: 'Backend', items: ['.NET / C#', 'ASP.NET Core', 'Microservicios', 'Tiempo real'] },
      { title: 'Panel', items: ['React', 'Solicitudes', 'Ofertas de crédito', 'Seguimiento'] },
      { title: 'Integraciones', items: ['Veridas', 'WeTrust', 'OCR', 'WhatsApp', 'Firebase'] },
      { title: 'Infraestructura', items: ['AWS', 'Google Cloud', 'Docker', 'GitLab CI/CD', 'Nginx'] },
    ],
    stack: ['ASP.NET Core', 'React Native', 'React', 'Veridas', 'WeTrust', 'Docker', 'AWS', 'Google Cloud'],
    featured: true,
  },
  {
    id: 'adelantos-nomina',
    title: 'Plataforma de adelantos de nómina',
    category: 'Fintech',
    summary:
      'Plataforma financiera para la originación y gestión de adelantos de nómina, con microservicios, app móvil y validación documental.',
    highlights: [
      'Microservicios con lógica de negocio financiera',
      'App móvil con autenticación, biometría y Face ID',
      'Procesamiento de documentos con OCR',
    ],
    responsibilities: [
      'Desarrollo de APIs, servicios backend y lógica de negocio',
      'Desarrollo y mantenimiento de microservicios',
      'Integración con servicios externos y financieros',
      'App móvil con React Native, autenticación y biometría',
      'Procesamiento y validación de documentos con OCR',
      'Configuración de ambientes, pipelines CI/CD y despliegues',
      'Soporte productivo y optimización de procesos',
    ],
    stack: ['.NET', 'C#', 'Entity Framework Core', 'SQL Server', 'MySQL', 'React Native', 'AWS', 'Google Cloud', 'GitLab CI/CD'],
    featured: true,
  },
  {
    id: 'microservicios',
    title: 'Plataforma de microservicios',
    category: 'Arquitectura',
    summary:
      'Arquitectura de servicios independientes para distintos procesos empresariales, con API Gateway, procesamiento asíncrono y despliegue en Google Cloud Run.',
    highlights: [
      'API Gateway con Ocelot',
      'Servicios contenerizados en Google Cloud Run',
      'Despliegues automatizados con GitLab CI/CD',
    ],
    responsibilities: [
      'Diseño y desarrollo de microservicios y APIs RESTful',
      'Comunicación entre servicios y procesamiento asíncrono',
      'Implementación del API Gateway con Ocelot',
      'Contenerización con Docker y configuración de ambientes',
      'Automatización de despliegues con GitLab CI/CD',
      'Diagnóstico de infraestructura y soporte de servicios productivos',
    ],
    stack: ['.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'Docker', 'Ocelot', 'Cloud Run', 'GitLab CI/CD'],
    featured: true,
  },
  {
    id: 'apps-mobile',
    title: 'Aplicaciones móviles Android e iOS',
    category: 'Mobile',
    summary:
      'Desarrollo y mantenimiento de apps multiplataforma con React Native, desde la configuración nativa hasta la publicación en tiendas.',
    highlights: [
      'Autenticación, biometría y Face ID',
      'Firebase y notificaciones push',
      'Builds para desarrollo, QA y producción',
    ],
    responsibilities: [
      'Desarrollo de apps para Android e iOS integradas con APIs RESTful',
      'Configuración de proyectos nativos en Android Studio y Xcode',
      'Integración con servicios nativos, permisos y dependencias',
      'Generación de builds y diagnóstico de errores de compilación',
      'Preparación para publicación y atención de incidencias en Google Play y App Store',
    ],
    stack: ['React Native', 'TypeScript', 'Android SDK', 'iOS SDK', 'Firebase', 'Gradle', 'Xcode'],
    featured: false,
  },
  {
    id: 'whatsapp-crm',
    title: 'WhatsApp bot integrado a CRM',
    category: 'Automatización',
    summary:
      'Automatización de conversaciones y procesos de atención mediante WhatsApp, conectada al CRM y a los servicios backend.',
    highlights: [
      'Conversaciones automatizadas de atención',
      'Integración directa con el CRM',
    ],
    responsibilities: [
      'Construcción del bot y procesamiento de mensajes',
      'Diseño de flujos de comunicación',
      'Integración con CRM, APIs y servicios backend',
    ],
    stack: ['Node.js', 'JavaScript', 'WhatsApp', 'CRM', 'APIs'],
    featured: false,
  },
]
