import { Home, ShoppingBag, Building2, Landmark, GraduationCap, Package } from 'lucide-react'

const useCases = [
  {
    icon: Home,
    title: 'Homes',
    desc: 'Protect your family with intelligent offline cameras, intruder alerts, and visitor detection — no subscription required.',
    features: ['24/7 perimeter monitoring', 'Family face recognition', 'Package delivery alerts'],
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
  },
  {
    icon: ShoppingBag,
    title: 'Shops & Retail',
    desc: 'Track customer footfall, prevent shoplifting, and manage staff attendance with AI — all without cloud costs.',
    features: ['Shoplifting detection', 'Staff attendance', 'Customer count analytics'],
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
  },
  {
    icon: Building2,
    title: 'Offices',
    desc: 'Secure your workplace with facial access control, visitor logging, and AI surveillance across multiple zones.',
    features: ['Face-ID entry control', 'Visitor management', 'Employee attendance'],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Landmark,
    title: 'Temples & Heritage',
    desc: 'Sacred sites demand quiet, non-intrusive protection. Our AI monitors perimeters without disrupting peace.',
    features: ['Silent intrusion alerts', 'Night monitoring', 'Multi-zone coverage'],
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: GraduationCap,
    title: 'Schools',
    desc: 'Protect students and staff with real-time monitoring, automated attendance, and unauthorized entry alerts.',
    features: ['Student attendance AI', 'Stranger danger alerts', 'Classroom monitoring'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: Package,
    title: 'Warehouses',
    desc: 'Monitor inventory areas, detect unauthorized access, and track staff with 24/7 local AI surveillance.',
    features: ['Perimeter security', 'Staff tracking', 'Theft prevention AI'],
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-[#050d18] dark:to-[#071525] transition-colors duration-300" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-brand-500/10 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="font-mono text-xs text-brand-400 tracking-widest">USE CASES</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            AI Security for{' '}
            <span className="gradient-text">Every Space</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            From single homes to large institutions, our edge AI adapts to your environment — not the other way around.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => (
            <div key={uc.title} className="glass neon-border rounded-2xl p-6 card-hover group">
              <div className={`w-12 h-12 ${uc.bg} border ${uc.border} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <uc.icon className={`w-6 h-6 ${uc.color}`} />
              </div>

              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">{uc.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{uc.desc}</p>

              <ul className="space-y-1.5">
                {uc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 transition-colors">
                    <div className={`w-1 h-1 rounded-full bg-current ${uc.color}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-white/50 dark:bg-gradient-to-br dark:from-brand-500/20 dark:via-brand-600/10 dark:to-accent-500/10 border border-slate-200 dark:border-brand-500/20 text-center shadow-lg dark:shadow-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
          <div className="relative">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-3">
              Don't see your use case?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
              We build custom edge AI solutions for any environment. Tell us your requirements.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Discuss Your Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
