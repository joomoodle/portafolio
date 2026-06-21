import { clsx } from 'clsx'
import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'violet' | 'cyan' | 'emerald' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        {
          'bg-zinc-800 text-zinc-300': variant === 'default',
          'bg-violet-500/10 text-violet-400 border border-violet-500/20': variant === 'violet',
          'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20': variant === 'cyan',
          'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20': variant === 'emerald',
          'border border-zinc-700 text-zinc-400 bg-transparent': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
