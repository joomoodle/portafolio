import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title: string
  highlight?: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ label, title, highlight, description, centered = true }: SectionHeaderProps) {
  const parts = highlight ? title.split(highlight) : [title]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={centered ? 'text-center' : ''}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 mb-5 font-mono tracking-wider uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {label}
      </span>
      <h2 className="heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-5">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {description && (
        <p className={`text-slate-400 text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
