export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  color: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Monitor',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript (ES2024)', level: 95 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'Framer Motion', level: 80 },
      { name: 'Redux / Zustand', level: 85 },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: 'Smartphone',
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'React Native', level: 95 },
      { name: 'Expo', level: 85 },
      { name: 'iOS (App Store)', level: 80 },
      { name: 'Android (Play Store)', level: 85 },
      { name: 'React Navigation', level: 90 },
      { name: 'Push Notifications (FCM/APNs)', level: 88 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'ASP.NET Core', level: 90 },
      { name: 'C#', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'Node.js', level: 75 },
      { name: 'JWT / OAuth', level: 88 },
      { name: 'SignalR', level: 80 },
    ],
  },
  {
    id: 'database',
    title: 'Base de Datos',
    icon: 'Database',
    color: 'from-orange-500 to-amber-600',
    skills: [
      { name: 'SQL Server', level: 88 },
      { name: 'MySQL', level: 85 },
      { name: 'Firebase Firestore', level: 85 },
      { name: 'Redis', level: 75 },
      { name: 'Entity Framework', level: 85 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Servicios',
    icon: 'Cloud',
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'Firebase (Auth, FCM, Storage)', level: 88 },
      { name: 'Azure (App Service, Functions)', level: 78 },
      { name: 'Stripe', level: 85 },
      { name: 'OpenPay', level: 85 },
      { name: 'Twilio / WhatsApp API', level: 78 },
    ],
  },
  {
    id: 'testing',
    title: 'Testing & QA',
    icon: 'TestTube',
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'Selenium', level: 80 },
      { name: 'Katalon Studio', level: 78 },
      { name: 'Unit Testing (.NET)', level: 80 },
      { name: 'Jest / Testing Library', level: 75 },
      { name: 'Postman / Insomnia', level: 92 },
    ],
  },
  {
    id: 'ai',
    title: 'IA & Automatización',
    icon: 'Sparkles',
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Claude API / OpenAI', level: 82 },
      { name: 'RAG (Retrieval Augmented Generation)', level: 78 },
      { name: 'Embeddings & Vector DBs', level: 75 },
      { name: 'RPA con Selenium/.NET', level: 82 },
      { name: 'Prompt Engineering', level: 80 },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Arquitectura',
    icon: 'GitBranch',
    color: 'from-slate-400 to-zinc-500',
    skills: [
      { name: 'Git / GitHub / GitLab', level: 90 },
      { name: 'CI/CD (GitHub Actions)', level: 75 },
      { name: 'Docker (containers)', level: 70 },
      { name: 'Arquitectura de microservicios', level: 80 },
      { name: 'Clean Architecture', level: 85 },
    ],
  },
]
