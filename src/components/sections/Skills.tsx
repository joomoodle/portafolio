import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { skillCategories } from '../../data/skills'
import { Monitor, Smartphone, Server, Database, Cloud, GitBranch, TestTube, Sparkles } from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Monitor, Smartphone, Server, Database, Cloud, GitBranch, TestTube, Sparkles,
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-slate-300 text-sm">{name}</span>
        <span className="text-slate-600 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-slate-900/20">
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
                transition={{ duration: 0.45, delay: catIndex * 0.06 }}
                className="group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-slate-700 transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.color} opacity-85 flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="heading text-white font-semibold text-sm">{category.title}</h3>
                </div>
                {category.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={catIndex * 0.06 + si * 0.04} />
                ))}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
