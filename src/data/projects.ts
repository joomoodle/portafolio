export interface Project {
  id: string
  title: string
  category: string
  categoryColor: string
  problem: string
  solution: string
  results: string[]
  stack: string[]
  image: string
  featured: boolean
  demoUrl?: string
  caseStudy: {
    challenge: string
    approach: string
    outcome: string
  }
}

export const projects: Project[] = [
  {
    id: 'fintech-credito',
    title: 'Plataforma de Crédito Digital',
    category: 'Fintech',
    categoryColor: 'text-violet-400 bg-violet-400/10',
    problem: 'Institución financiera con proceso de originación de créditos completamente manual: papeles, largas esperas y alta tasa de abandono del 68% en el onboarding.',
    solution: 'Plataforma full-stack con app móvil para onboarding digital: captura de documentos con OCR, scoring automático, firma electrónica y desembolso en menos de 24h.',
    results: [
      'Reducción del 85% en tiempo de aprobación (72h → 11h)',
      'Abandono de onboarding reducido de 68% a 12%',
      '3,200+ créditos digitales en primer trimestre',
      'Integración con buró de crédito en tiempo real',
    ],
    stack: ['React Native', 'TypeScript', 'ASP.NET Core', 'SQL Server', 'Azure', 'JWT', 'OpenPay'],
    image: 'fintech',
    featured: true,
    caseStudy: {
      challenge: 'El proceso manual generaba errores del 23% en captura de datos y el equipo de análisis perdía 4h por expediente revisando documentos físicos.',
      approach: 'Diseñé una arquitectura de microservicios con API Gateway, integré OCR para extracción automática de datos de INE y comprobantes, y construí un motor de reglas de scoring configurable por negocio.',
      outcome: 'La plataforma procesa ahora 150+ solicitudes diarias de forma automatizada, con intervención humana solo en casos de alta excepción (4% del total).',
    },
  },
  {
    id: 'cobranza-mobile',
    title: 'App de Cobranza para Gestores de Campo',
    category: 'Mobile',
    categoryColor: 'text-cyan-400 bg-cyan-400/10',
    problem: 'Equipo de 80 gestores de cobranza operando con hojas de Excel y WhatsApp. Sin trazabilidad, rutas ineficientes y recuperación mensual muy por debajo del potencial.',
    solution: 'App móvil nativa para Android con geolocalización en tiempo real, gestión de visitas, registro de pagos offline-first y dashboard de rendimiento para supervisores.',
    results: [
      'Incremento del 34% en índice de recuperación mensual',
      'Reducción del 45% en tiempo de reporte diario por gestor',
      'Visibilidad total de 80 gestores en tiempo real',
      'Operación 100% offline con sincronización automática',
    ],
    stack: ['React Native', 'TypeScript', 'Firebase', 'FCM', 'AsyncStorage', 'ASP.NET Core', 'MySQL'],
    image: 'cobranza',
    featured: true,
    caseStudy: {
      challenge: 'Los gestores operaban en zonas con conectividad intermitente. Cualquier solución requería funcionar sin internet y sincronizar datos críticos sin pérdida.',
      approach: 'Implementé una arquitectura offline-first con SQLite local, cola de sincronización con reintentos automáticos y resolución de conflictos basada en timestamps del servidor.',
      outcome: 'El sistema procesa 2,400+ interacciones de cobranza diarias con 99.8% de integridad de datos, incluso en zonas sin señal.',
    },
  },
  {
    id: 'ecommerce-pagos',
    title: 'Plataforma E-Commerce con Pagos Multi-Gateway',
    category: 'Backend',
    categoryColor: 'text-emerald-400 bg-emerald-400/10',
    problem: 'Retailer con tienda en línea que perdía ventas por fallas en el gateway de pago único. Sin fallback, cada caída del proveedor representaba pérdidas directas.',
    solution: 'Sistema de pagos con enrutamiento inteligente entre Stripe y OpenPay, reintentos automáticos, webhooks seguros y panel de monitoreo de transacciones en tiempo real.',
    results: [
      'Uptime de pagos al 99.97% (vs 94.2% previo)',
      'Integración con Stripe y OpenPay en un solo flujo',
      '40% reducción en comisiones por enrutamiento inteligente',
      'Recuperación automática de pagos fallidos: +18% en conversión',
    ],
    stack: ['ASP.NET Core', 'TypeScript', 'Stripe API', 'OpenPay API', 'React', 'MySQL', 'Redis'],
    image: 'ecommerce',
    featured: false,
    caseStudy: {
      challenge: 'Stripe tenía menor comisión pero mayor latencia en México. OpenPay era más económico localmente pero sin soporte para tarjetas internacionales. Se necesitaba lo mejor de ambos.',
      approach: 'Construí un adapter pattern con estrategia de enrutamiento por tipo de tarjeta, región del emisor y estado del gateway. Los webhooks de ambos proveedores se normalizan en un evento interno unificado.',
      outcome: 'El enrutamiento inteligente redujo las comisiones promedio en 40% y la tasa de aprobación de pagos subió de 82% a 94% en el primer mes.',
    },
  },
  {
    id: 'suite-empresarial',
    title: 'Suite Empresarial de Gestión de Operaciones',
    category: 'Enterprise',
    categoryColor: 'text-orange-400 bg-orange-400/10',
    problem: 'Empresa con 5 sistemas legacy desconectados: RH, inventario, ventas, finanzas y CRM. Datos duplicados, reportes que tardaban días y decisiones basadas en información desactualizada.',
    solution: 'Suite web unificada con módulos interconectados, data warehouse para reportes en tiempo real, roles granulares por módulo y notificaciones cross-sistema.',
    results: [
      'Reducción del 90% en tiempo de generación de reportes',
      'Eliminación de 5 sistemas legacy reemplazados por uno',
      '200+ usuarios activos diarios en producción',
      'ROI de 340% en 18 meses según CFO del cliente',
    ],
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'SQL Server', 'SignalR', 'JWT', 'TailwindCSS'],
    image: 'suite',
    featured: true,
    caseStudy: {
      challenge: 'La migración de datos desde 5 sistemas con esquemas incompatibles y años de inconsistencias representaba el mayor riesgo del proyecto.',
      approach: 'Diseñé un proceso ETL incremental por módulos, con período de operación dual (sistema nuevo + legacy en paralelo) y validaciones automáticas de consistencia antes de cada corte.',
      outcome: 'La migración de 6+ años de datos históricos se completó en 8 semanas sin pérdida de información y sin afectar la operación diaria.',
    },
  },
  {
    id: 'push-notifications',
    title: 'Sistema de Notificaciones Push a Escala',
    category: 'Backend',
    categoryColor: 'text-emerald-400 bg-emerald-400/10',
    problem: 'App con 50,000 usuarios activos y sistema de notificaciones que fallaba al enviar campañas masivas: timeouts, duplicados y sin métricas de apertura.',
    solution: 'Motor de notificaciones con cola de mensajes, segmentación avanzada de audiencias, programación por zonas horarias, A/B testing y dashboard de analytics en tiempo real.',
    results: [
      'Envío confiable a 50,000+ dispositivos simultáneos',
      'Tasa de entrega del 99.1% (vs 71% anterior)',
      'Reducción de 60% en costos de FCM por optimización de lotes',
      'Dashboard de open rate, CTR y conversiones por campaña',
    ],
    stack: ['ASP.NET Core', 'Firebase FCM', 'Redis', 'Hangfire', 'React', 'TypeScript', 'MySQL'],
    image: 'notifications',
    featured: false,
    caseStudy: {
      challenge: 'FCM tiene límites de rate y los envíos masivos síncronos bloqueaban el servidor durante minutos, causando timeouts en cascada en toda la API.',
      approach: 'Implementé una cola de procesamiento asíncrono con Hangfire, particionamiento de audiencias en lotes de 500, retry logic exponencial y circuit breaker para fallos de FCM.',
      outcome: 'La campaña más grande (48,000 dispositivos) se completó en 4 minutos con 99.1% de entrega vs 90 minutos de timeout anterior.',
    },
  },
  {
    id: 'automatizacion-rpa',
    title: 'Automatización de Procesos Administrativos',
    category: 'Automatización',
    categoryColor: 'text-pink-400 bg-pink-400/10',
    problem: 'Equipo administrativo de 12 personas dedicando el 40% de su tiempo a tareas repetitivas: generación de reportes, captura de datos entre sistemas y envío de documentos.',
    solution: 'Suite de automatización con bots RPA para extracción de datos, generación automática de PDFs, integración con correo corporativo y notificaciones por WhatsApp Business.',
    results: [
      '1,200+ horas hombre liberadas mensualmente',
      '12 procesos automatizados al 100%',
      'ROI positivo en el primer mes de operación',
      'Cero errores en generación de reportes vs 8% previo',
    ],
    stack: ['C#', '.NET', 'Selenium', 'Hangfire', 'iTextSharp', 'Twilio', 'SQL Server'],
    image: 'automation',
    featured: false,
    caseStudy: {
      challenge: 'Los sistemas legacy no tenían API. La automatización requería interacción con interfaces web antiguas y aplicaciones de escritorio de terceros.',
      approach: 'Combiné Selenium para UI automation de sistemas web con Interop de Windows para aplicaciones de escritorio, encapsulando cada bot en un servicio independiente con su propio ciclo de vida.',
      outcome: 'El primer bot en producción recuperó su costo de desarrollo en 3 semanas. La suite completa procesa 4,500+ tareas automatizadas mensuales.',
    },
  },
  {
    id: 'ia-asistente',
    title: 'Asistente IA para Soporte Técnico',
    category: 'IA',
    categoryColor: 'text-yellow-400 bg-yellow-400/10',
    problem: 'Centro de soporte con tiempo de respuesta promedio de 8 horas y equipo saturado con 70% de tickets siendo preguntas repetitivas que ya tenían respuesta en la documentación.',
    solution: 'Asistente conversacional con RAG sobre documentación técnica, integrado en el portal web y app móvil. Escala automáticamente a agente humano cuando detecta baja confianza.',
    results: [
      'Resolución automática del 68% de tickets (antes 0%)',
      'Tiempo de respuesta de 8h → menos de 30 segundos',
      'Reducción del 55% en carga al equipo de soporte',
      'NPS de soporte incrementado de 42 a 78 puntos',
    ],
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'Claude API', 'OpenAI Embeddings', 'Pinecone', 'React Native'],
    image: 'ai',
    featured: true,
    caseStudy: {
      challenge: 'La documentación técnica estaba dispersa en PDFs, Confluence y wikis internas con más de 2,000 artículos desactualizados mezclados con información válida.',
      approach: 'Construí un pipeline de ingestión con chunking semántico, scoring de calidad para filtrar contenido obsoleto, y un prompt de sistema que instruye al modelo a citar la fuente de cada respuesta.',
      outcome: 'La confianza del usuario aumentó notablemente al ver las fuentes citadas. La tasa de escalación a humanos es del 32%, con 95% de satisfacción en tickets resueltos automáticamente.',
    },
  },
  {
    id: 'onboarding-digital',
    title: 'Onboarding Digital con Verificación de Identidad',
    category: 'Mobile',
    categoryColor: 'text-cyan-400 bg-cyan-400/10',
    problem: 'Empresa de telecomunicaciones con proceso de alta de clientes que tomaba 3 visitas presenciales, documentos físicos y semanas de espera para activar el servicio.',
    solution: 'App móvil con flujo de onboarding 100% digital: verificación biométrica, liveness detection, captura y validación de documentos oficiales, firma electrónica y activación inmediata.',
    results: [
      'Proceso de 3 visitas reducido a 12 minutos desde la app',
      'Activaciones en el mismo día incrementaron al 89%',
      'Costo de adquisición reducido en 62%',
      'Cobertura extendida a zonas sin puntos de venta físicos',
    ],
    stack: ['React Native', 'TypeScript', 'ASP.NET Core', 'Azure Cognitive Services', 'Firebase', 'JWT', 'MySQL'],
    image: 'onboarding',
    featured: false,
    caseStudy: {
      challenge: 'Las regulaciones del sector requerían verificación KYC robusta con biometría facial y validación de INE, pero sin incrementar la fricción que ya causaba abandono.',
      approach: 'Diseñé el flujo en 4 pasos con progreso visible, guardado de estado en cada paso para retomar si se abandona, y liveness detection nativa sin SDKs pesados que afectaran performance.',
      outcome: 'La tasa de abandono durante el onboarding bajó del 54% al 11%, y la empresa eliminó la necesidad de 3 centros de servicio presenciales.',
    },
  },
]
