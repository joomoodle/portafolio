export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rodrigo Mendez',
    role: 'CTO',
    company: 'Financia Digital',
    avatar: 'RM',
    content:
      'Juan Pablo rediseñó desde cero nuestra plataforma de crédito. En 4 meses pasamos de un proceso manual de 72 horas a aprobaciones automáticas en menos de 11 horas. Su capacidad para entender tanto el negocio como la tecnología es lo que lo diferencia.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Andrea Torres',
    role: 'Directora de Operaciones',
    company: 'CobraFácil',
    avatar: 'AT',
    content:
      'Teníamos 80 gestores operando con WhatsApp y Excel. La app que Juan Pablo desarrolló transformó completamente nuestra operación. El módulo offline-first fue crucial porque nuestros gestores trabajan en zonas sin señal. Recuperación mensual subió 34%.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Luis Cervantes',
    role: 'Founder & CEO',
    company: 'Startup Fintech MX',
    avatar: 'LC',
    content:
      'Contratamos a Juan Pablo para construir nuestro MVP en 8 semanas. No solo cumplió el plazo, sino que propuso mejoras de arquitectura que nos ahorraron meses de refactoring posterior. La app llegó al App Store y Play Store lista para escalar.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Mariana Ruiz',
    role: 'Gerente de TI',
    company: 'Corporativo Industrial GDL',
    avatar: 'MR',
    content:
      'Reemplazamos 5 sistemas legacy por la suite que diseñó Juan Pablo. La migración de datos fue impecable y el equipo adoptó el nuevo sistema rápidamente. Los reportes que antes tardaban 2 días ahora los tenemos en tiempo real.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Carlos Esquivel',
    role: 'Product Manager',
    company: 'E-Commerce Nacional',
    avatar: 'CE',
    content:
      'El sistema de pagos multi-gateway que implementó resolvió definitivamente el problema de caídas que teníamos. El uptime pasó de 94% a 99.97% y las comisiones bajaron 40%. El ROI fue positivo desde el primer mes.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Sofía Vargas',
    role: 'Head of Product',
    company: 'TelecomMóvil',
    avatar: 'SV',
    content:
      'El onboarding digital que construyó Juan Pablo eliminó la necesidad de visitas presenciales. 89% de nuestros nuevos clientes ahora se activan el mismo día desde la app. La experiencia de usuario es exactamente lo que buscábamos: fluida y confiable.',
    rating: 5,
  },
]
