import { Mail, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons'

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-slate-950" />
            </div>
            <div>
              <p className="heading text-white font-semibold text-sm">Juan Pablo Dionicio</p>
              <p className="text-slate-500 text-xs">Full Stack Developer · México</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/joomoodle', icon: GithubIcon, label: 'GitHub' },
              { href: 'https://linkedin.com', icon: LinkedinIcon, label: 'LinkedIn' },
              { href: 'mailto:juanpa.ian.1992@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all duration-200">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} Juan Pablo Dionicio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
