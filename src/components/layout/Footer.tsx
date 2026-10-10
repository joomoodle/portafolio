import { ArrowUp, EnvelopeSimple, GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'
import { contact } from '../../data/contact'

const links = [
  { href: contact.whatsappUrl, icon: WhatsappLogo, label: 'WhatsApp' },
  { href: `mailto:${contact.email}`, icon: EnvelopeSimple, label: 'Correo' },
  { href: contact.linkedin, icon: LinkedinLogo, label: 'LinkedIn' },
  { href: contact.github, icon: GithubLogo, label: 'GitHub' },
]

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-white">Juan Pablo Dionicio Ventura</p>
          <p className="text-sm text-neutral-500">Sr. Fullstack Developer · Tech Lead · México</p>
        </div>

        <div className="flex items-center gap-2">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-neutral-400 transition-colors duration-700 ease-fluid hover:border-line-strong hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#hero"
            aria-label="Volver arriba"
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-700 ease-fluid hover:-translate-y-1"
          >
            <ArrowUp size={16} />
          </a>
        </div>

        <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Juan Pablo Dionicio</p>
      </div>
    </footer>
  )
}
