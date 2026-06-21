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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={centered ? 'text-center' : ''}
    >
      <p className="text-xs font-mono text-emerald-500 uppercase tracking-[0.2em] mb-4">
        — {label}
      </p>
      <h2 className="heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-5">
        {parts[0]}
        {highlight && <em className="not-italic text-emerald-400">{highlight}</em>}
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
