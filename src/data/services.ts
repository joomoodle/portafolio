export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  color: string
}

export const services: Service[] = [
  {
    id: 'mobile',
    title: 'Apps Móviles',
    description: 'Aplicaciones nativas para iOS y Android con React Native. Performance nativa, UX pulida y publicación en ambas tiendas.',
    icon: 'Smartphone',
    features: [
      'React Native + TypeScript',
      'iOS (App Store) y Android (Play Store)',
      'Offline-first cuando el negocio lo requiere',
      'Push notifications con FCM/APNs',
      'Integración con APIs y terceros',
      'Biometría, mapas, pagos in-app',
    ],
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'backend',
    title: 'APIs & Backend',
    description: 'APIs REST robustas y escalables con ASP.NET Core. Arquitectura limpia, seguridad sólida y documentación completa.',
    icon: 'Server',
    features: [
      'ASP.NET Core / C# o Node.js',
      'REST APIs con documentación OpenAPI',
      'Autenticación JWT / OAuth',
      'Integraciones con servicios de terceros',
      'Optimización de queries y caching',
      'Monitoreo y logging en producción',
    ],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'web',
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas con React y TypeScript. Desde landings de alto impacto hasta sistemas administrativos complejos.',
    icon: 'Globe',
    features: [
      'React + TypeScript + TailwindCSS',
      'Dashboards y paneles administrativos',
      'Optimización de performance (Core Web Vitals)',
      'SEO técnico y accesibilidad',
      'Diseño responsive en todos los dispositivos',
      'Animaciones e interacciones premium',
    ],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'payments',
    title: 'Integración de Pagos',
    description: 'Implementación de pasarelas de pago con Stripe y OpenPay. Flujos seguros, manejo de webhooks y reconciliación automática.',
    icon: 'CreditCard',
    features: [
      'Stripe y OpenPay',
      'Pagos únicos, recurrentes y suscripciones',
      'Webhooks y reconciliación automática',
      'Prevención de fraude y reglas de riesgo',
      'Facturación electrónica (CFDI)',
      'Reportes financieros en tiempo real',
    ],
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 'automation',
    title: 'Automatización de Procesos',
    description: 'Eliminación de tareas repetitivas mediante software. RPA, integraciones entre sistemas y flujos de trabajo automatizados.',
    icon: 'Zap',
    features: [
      'Bots RPA con Selenium y .NET',
      'Integración entre sistemas desconectados',
      'Generación automática de reportes y PDFs',
      'Notificaciones automáticas por email/WhatsApp',
      'Procesamiento batch y colas de trabajo',
      'Monitoreo de bots en producción',
    ],
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'consulting',
    title: 'Consultoría Técnica',
    description: 'Arquitectura de sistemas, revisión de código y estrategia tecnológica. Ayudo a equipos y empresas a tomar mejores decisiones técnicas.',
    icon: 'Lightbulb',
    features: [
      'Diseño de arquitectura de sistemas',
      'Code review y auditoría de deuda técnica',
      'Selección de stack tecnológico',
      'Planificación de migración de sistemas legacy',
      'Estrategia de escalabilidad y performance',
      'Formación y mentoring de equipos',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
]
