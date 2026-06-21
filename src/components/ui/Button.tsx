import { clsx } from 'clsx'
import type { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-zinc-950 cursor-pointer',
    {
      'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98]':
        variant === 'primary',
      'bg-zinc-800 text-zinc-100 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 active:scale-[0.98]':
        variant === 'secondary',
      'text-zinc-300 hover:text-white hover:bg-zinc-800/50 active:scale-[0.98]':
        variant === 'ghost',
      'border border-zinc-700 text-zinc-300 hover:border-violet-500/50 hover:text-violet-400 bg-transparent active:scale-[0.98]':
        variant === 'outline',
    },
    {
      'h-8 px-4 text-sm': size === 'sm',
      'h-11 px-6 text-sm': size === 'md',
      'h-14 px-8 text-base': size === 'lg',
    },
    className
  )

  if (Tag === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
