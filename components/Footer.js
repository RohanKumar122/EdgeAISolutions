import { Cpu, Twitter, Linkedin, Github, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const footerLinks = {
  Products: [
    { label: 'AI Smart Camera', href: '#products' },
    { label: 'Offline AI Assistant', href: '#products' },
    { label: 'Face Recognition', href: '#products' },
    { label: 'Temple Security', href: '#products' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Technology', href: '#technology' },
    { label: 'Use Cases', href: '#use-cases' },
  ],
  Support: [
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Documentation', href: '#' },
    { label: 'Installation Guide', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Warranty Policy', href: '#' },
    { label: 'Return Policy', href: '#' },
  ],
}

const socials = [
  { icon: Twitter, label: 'Twitter', href: process.env.NEXT_PUBLIC_SOCIAL_TWITTER || '#' },
  { icon: Linkedin, label: 'LinkedIn', href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || '#' },
  { icon: Github, label: 'GitHub', href: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || '#' },
  { icon: Instagram, label: 'Instagram', href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || '#' },
  { icon: Youtube, label: 'YouTube', href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || '#' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 dark:border-white/5">
      <div className="absolute inset-0 bg-slate-100 dark:bg-[#030a15]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/20 dark:border-brand-500/40 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base text-slate-900 dark:text-white tracking-wide">RK Edge AI</span>
                <span className="font-mono text-[9px] text-brand-600 dark:text-brand-400 tracking-[0.15em] uppercase">Solutions</span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs transition-colors">
              Private AI. Secure Systems. Edge Intelligence. We build AI-powered hardware that keeps your data where it belongs — with you.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Mail className="w-3.5 h-3.5 text-brand-600/60 dark:text-brand-500/60" />
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@rkedgeai.in'}
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Phone className="w-3.5 h-3.5 text-brand-600/60 dark:text-brand-500/60" />
                {process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 98765 43210'}
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-brand-600/60 dark:text-brand-500/60" />
                {process.env.NEXT_PUBLIC_CONTACT_LOCATION_FULL || 'Kanpur, Uttar Pradesh, India'}
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-400 dark:hover:border-brand-500/40 rounded-lg flex items-center justify-center text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 transition-all shadow-sm"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div className="font-mono text-xs text-slate-500 dark:text-slate-500 tracking-wider mb-4">{section.toUpperCase()}</div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 text-center sm:text-left">
            © {new Date().getFullYear()} RK Edge AI Solutions. All rights reserved. Made with ❤️ in Kanpur, India.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <span>·</span>
            <span className="inline-flex items-center gap-1 text-brand-500/50">
              <div className="w-1 h-1 bg-brand-400 rounded-full animate-pulse" />
              Edge AI Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
