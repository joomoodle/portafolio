import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { skillCategories } from '../../data/skills'
import {
  Monitor,
  Smartphone,
  Server,
  Database,
  Cloud,
  GitBranch,
  TestTube,
  Sparkles,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Smartphone,
  Server,
  Database,
  Cloud,
  GitBranch,
  TestTube,
  Sparkles,
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-zinc-300 text-sm">{name}</span>
        <span className="text-zinc-600 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Habilidades"
          title="Tecnologías que "
          highlight="domino"
          description="Stack técnico organizado por área de expertise. Más de 10 años aplicando estas herramientas en proyectos reales."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-16">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] ?? Monitor
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.07 }}
                className="group p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.color} opacity-80 flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                </div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIndex * 0.07 + skillIndex * 0.05}
                  />
                ))}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
