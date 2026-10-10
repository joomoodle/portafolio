import { Reveal } from '../../lib/motion'

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ label, title, description, centered = false }: SectionHeaderProps) {
  return (
    <Reveal className={centered ? 'mx-auto max-w-[680px] text-center' : 'max-w-[680px]'}>
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-emerald-400">{label}</p>
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="text-lg text-neutral-400">{description}</p>}
    </Reveal>
  )
}
