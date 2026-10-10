export interface Service {
  id: string
  title: string
  pain: string
  description: string
  icon: 'ocr' | 'saas' | 'tools' | 'automation' | 'mobile' | 'server'
  features: string[]
  proof: string
}

export const services: Service[] = [
  {
    id: 'ocr',
    title: 'OCR y procesamiento de documentos',
    pain: 'Tu equipo captura a mano datos de INE, comprobantes, facturas o contratos.',
    description: 'Extraigo y valido la información de tus documentos de forma automática para que tu equipo solo revise excepciones.',
    icon: 'ocr',
    features: ['Extracción de datos de identificaciones y comprobantes', 'Validación documental y biometría facial', 'Firma digital de contratos', 'Integración con tu sistema actual'],
    proof: 'Ya lo construí en el onboarding digital de MiDinerito con Veridas y WeTrust.',
  },
  {
    id: 'saas',
    title: 'Plataformas SaaS y MVPs',
    pain: 'Tienes una idea de producto y necesitas que alguien la lleve a producción.',
    description: 'Diseño y construyo tu plataforma completa: backend, panel, app y despliegue, lista para crecer con tus usuarios.',
    icon: 'saas',
    features: ['Usuarios, roles y autenticación', 'Panel administrativo en React', 'APIs en .NET y microservicios', 'Despliegue en AWS o Google Cloud'],
    proof: 'He llevado a producción plataformas de crédito y adelantos de nómina de punta a punta.',
  },
  {
    id: 'tools',
    title: 'Herramientas internas y paneles',
    pain: 'Tu operación vive en hojas de Excel, correos y procesos que nadie más entiende.',
    description: 'Reemplazo hojas y procesos manuales por un sistema a la medida con estados, permisos y seguimiento.',
    icon: 'tools',
    features: ['Flujos de solicitudes y aprobaciones', 'Control de estados y trazabilidad', 'Reportes y consultas', 'ERP, cobranza y facturación CFDI'],
    proof: 'Construí sistemas de cobranza escolar, ERP y facturación CFDI que operaron por años.',
  },
  {
    id: 'automation',
    title: 'Automatización e integraciones',
    pain: 'Tus sistemas no se hablan y alguien copia datos de uno a otro todos los días.',
    description: 'Conecto tus herramientas entre sí y automatizo la comunicación con tus clientes.',
    icon: 'automation',
    features: ['Bots de WhatsApp conectados a tu CRM', 'Integración con APIs de terceros', 'Procesos asíncronos y en tiempo real', 'Notificaciones push y correo'],
    proof: 'Desarrollé un bot de WhatsApp integrado a CRM para automatizar la atención.',
  },
  {
    id: 'mobile',
    title: 'Apps móviles',
    pain: 'Tus clientes o tu equipo de campo necesitan hacer todo desde el teléfono.',
    description: 'Apps para Android e iOS con React Native, desde el diseño técnico hasta la publicación en las tiendas.',
    icon: 'mobile',
    features: ['Una sola base de código para Android e iOS', 'Face ID, biometría y notificaciones', 'Publicación en Google Play y App Store', 'Conexión con tu backend'],
    proof: 'He publicado y mantenido apps financieras con biometría en ambas tiendas.',
  },
  {
    id: 'server',
    title: 'Backend, cloud y rescate de sistemas',
    pain: 'Tu sistema actual es lento, falla en producción o nadie se atreve a desplegarlo.',
    description: 'Diagnostico, estabilizo y modernizo tu backend, y dejo despliegues automatizados para que publicar sea rutina.',
    icon: 'server',
    features: ['Diagnóstico de incidencias productivas', 'Docker y pipelines de CI/CD', 'Migración a AWS o Google Cloud', 'Mantenimiento evolutivo y correctivo'],
    proof: 'Atiendo incidencias productivas de aplicaciones, infraestructura y bases de datos como Líder Técnico.',
  },
]
