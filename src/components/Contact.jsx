import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiGooglescholar } from 'react-icons/si'

const links = [
  { icon: FiMail, label: 'deepayan.sanyal93@gmail.com', href: 'mailto:deepayan.sanyal93@gmail.com' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/deepayan-sanyal/' },
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/deepayansanyal93' },
  { icon: SiGooglescholar, label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=RhJRHjoAAAAJ&hl=en&oi=ao' },
]

function Contact() {
  return (
    <section id="contact" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Contact</h2>
        <div className="flex flex-col gap-4">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors w-fit"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-16 pt-6 border-t border-gray-200 dark:border-slate-700">
        <p className="text-xs text-[var(--color-muted)]">© 2026 Deepayan Sanyal</p>
      </div>
    </section>
  )
}

export default Contact