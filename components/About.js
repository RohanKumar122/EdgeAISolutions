import { Shield, Wifi, DollarSign, Lock, Globe, Zap } from 'lucide-react'

const pillars = [
  {
    icon: Lock,
    title: 'Privacy-First AI',
    desc: 'All data stays on your device. No cloud upload. No surveillance capitalism. Your security footage belongs to you — full stop.',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
  },
  {
    icon: Wifi,
    title: 'Offline AI Systems',
    desc: 'Our edge AI models run entirely without internet connectivity. Power cuts, network failures, ISP outages — your security never stops.',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
  },
  {
    icon: DollarSign,
    title: 'Affordable Hardware',
    desc: 'Built on Raspberry Pi and open-source AI — professional-grade intelligence without enterprise-grade pricing. Starting at ₹9,999.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
]

const missions = [
  { icon: Shield, text: 'Zero data breach risk' },
  { icon: Globe, text: 'Deployable anywhere' },
  { icon: Zap, text: 'Millisecond AI inference' },
  { icon: Lock, text: 'Air-gapped capable' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-[#050d18] dark:via-[#071020] dark:to-[#050d18] transition-colors duration-300" />
      <div className="absolute right-0 top-1/4 w-1/2 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-brand-500" />
          <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">Our Mission</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-8">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white leading-tight">
              Intelligence at the{' '}
              <span className="gradient-text">Edge.</span>
              <br />
              Privacy at the{' '}
              <span className="gradient-text">Core.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              Edge AI Local was founded on a simple belief: powerful AI should not require surrendering your privacy. We build hardware and software systems that bring cutting-edge artificial intelligence to homes, businesses, and institutions — without a single byte leaving your premises.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Powered by Raspberry Pi and optimized local AI models, our products deliver real-time person detection, face recognition, intelligent automation, and offline offline AI features at a fraction of cloud AI costs.
            </p>

            {/* Mission checkmarks */}
            <div className="grid grid-cols-2 gap-3">
              {missions.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <div className="w-7 h-7 rounded-lg bg-brand-500/15 border border-brand-500/25 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a href="#products" className="btn-primary inline-flex items-center gap-2 text-sm">
                Explore Products
              </a>
              <a href="#how-it-works" className="text-brand-400 hover:text-brand-300 text-sm font-medium flex items-center gap-1 transition-colors">
                See How It Works →
              </a>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`glass neon-border rounded-2xl p-6 card-hover group`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${p.bg} border ${p.border} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <p.icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-lg text-slate-900 dark:text-white mb-2`}>{p.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Tagline block */}
            <div className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-brand-500/15 to-accent-500/10 border border-brand-500/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="font-mono text-xs text-brand-400 mb-2 tracking-widest">// COMPANY TAGLINE</div>
                <blockquote className="font-display font-bold text-2xl text-slate-900 dark:text-white leading-snug">
                  "Private AI. Secure Systems. Edge Intelligence."
                </blockquote>
                <div className="mt-3 text-slate-600 dark:text-slate-400 text-sm">— Edge AI Local </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
