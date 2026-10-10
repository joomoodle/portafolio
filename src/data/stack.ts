export interface StackGroup {
  id: string
  title: string
  icon: 'server' | 'browser' | 'mobile' | 'database' | 'cloud' | 'devops' | 'plug' | 'tree'
  items: string[]
  wide?: boolean
}

export const stackGroups: StackGroup[] = [
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    items: ['C#', '.NET 5, 6, 7 y 8', 'ASP.NET Core', 'Web API', 'Entity Framework Core', 'Node.js', 'FeathersJS', 'Python', 'PHP'],
    wide: true,
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'browser',
    items: ['React', 'TypeScript', 'Next.js', 'Angular', 'Vue.js', 'JavaScript', 'jQuery'],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: 'mobile',
    items: ['React Native', 'Android SDK', 'iOS SDK', 'Android Studio', 'Xcode', 'Gradle'],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: 'cloud',
    items: ['AWS EC2', 'S3', 'IAM', 'SES', 'CloudFront', 'Google Cloud Run', 'Pub/Sub', 'Azure'],
    wide: true,
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: 'devops',
    items: ['Docker', 'GitLab CI/CD', 'Git', 'Linux', 'Nginx', 'Variables y secretos'],
  },
  {
    id: 'data',
    title: 'Bases de datos',
    icon: 'database',
    items: ['SQL Server', 'MySQL', 'MongoDB', 'Mongoose'],
  },
  {
    id: 'integrations',
    title: 'Integraciones',
    icon: 'plug',
    items: ['Veridas', 'WeTrust', 'OCR', 'WhatsApp', 'STP', 'Firebase', 'Ocelot', 'Push'],
    wide: true,
  },
  {
    id: 'architecture',
    title: 'Arquitectura',
    icon: 'tree',
    items: ['Microservicios', 'API Gateway', 'Orientada a eventos', 'Procesamiento asíncrono', 'Tiempo real', 'Patrones de diseño'],
    wide: true,
  },
]
