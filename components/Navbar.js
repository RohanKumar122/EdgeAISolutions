import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon, Cpu, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Technology', href: '#technology' },
  { label: 'Use Cases', href: '#use-cases' },
  // { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDark = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('light')
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'glass border-b border-brand-500/10 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-white/10 border border-brand-500/40 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-brand-500/20 transition-colors overflow-hidden">
                <img src="/EdgeAILocal.png" alt="Edge AI Local" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-brand-400 rounded-full animate-pulse-slow" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-base text-slate-900 dark:text-white tracking-wide">Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">AI</span> Local</span>
              <span className="font-mono text-[9px] text-brand-600 dark:text-brand-400 tracking-[0.15em] uppercase">Security + Privacy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors rounded-md hover:bg-brand-50/50 dark:hover:bg-brand-500/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-brand-500/10 transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex btn-primary text-sm !px-5 !py-2.5"
            >
              Get Started
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="glass border-t border-brand-500/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-50 dark:hover:bg-brand-500/10 rounded-lg transition-all font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-white/10">
            <a href="#contact" className="btn-primary w-full text-center block text-sm">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
