import { WifiOff, Shield, DollarSign, Lock, Zap, HardDrive, RefreshCw, Eye } from 'lucide-react'

const features = [
  {
    icon: WifiOff,
    title: '100% Offline AI',
    desc: 'Every model runs on-device. Your system functions perfectly even when the internet goes down — because true security cannot depend on connectivity.',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
  },
  {
    icon: Shield,
    title: 'Privacy-First Design',
    desc: 'No video feed ever leaves your premises. No biometric data uploaded. No account required. Privacy is architecture, not a policy.',
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
  },
  {
    icon: DollarSign,
    title: 'Zero Cloud Costs',
    desc: 'No monthly subscriptions. No per-alert fees. No storage bills. One device, one payment — then it runs forever at zero ongoing cost.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Lock,
    title: 'Secure Local Processing',
    desc: 'Data is encrypted on-device, processed locally, and never transmitted. Military-grade data isolation without enterprise complexity.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: Zap,
    title: 'Real-Time AI Speed',
    desc: 'Edge-optimized AI models deliver under 25ms inference time. Alerts arrive before intruders take their second step.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: HardDrive,
    title: 'Local Data Storage',
    desc: 'Footage, logs, reports, and AI outputs are stored on local SSD. You control access, retention, and deletion — always.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
  {
    icon: RefreshCw,
    title: 'OTA Model Updates',
    desc: 'AI models are updated via USB or local network. Keep your intelligence sharp without connecting to the cloud.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
  },
  {
    icon: Eye,
    title: 'Transparent AI',
    desc: 'Open-source models. You can inspect what the AI does, how it decides, and what data it processes. No black boxes.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-[#071525] dark:to-[#050d18] transition-colors duration-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="font-mono text-xs text-brand-400 tracking-widest">BENEFITS</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Why Choose{' '}
            <span className="gradient-text">Edge AI?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Every feature is designed around one principle: your data is yours, and your system should work — always.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass neon-border rounded-2xl p-5 card-hover group"
            >
              <div className={`w-11 h-11 ${f.bg} border ${f.border} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison highlight */}
        <div className="mt-16 glass neon-border rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Cloud AI side */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <span className="font-mono text-sm text-red-400">Cloud AI</span>
              </div>
              <ul className="space-y-3">
                {[
                  '₹2,000–₹10,000/month subscription',
                  'Data sent to remote servers',
                  'Depends on internet uptime',
                  'Privacy policy risks',
                  'Latency: 200ms–2s',
                  'Vendor lock-in',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-red-400 text-xs">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Edge AI side */}
            <div className="p-8 bg-gradient-to-br from-brand-500/10 to-transparent">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 bg-brand-400 rounded-full animate-pulse" />
                <span className="font-mono text-sm text-brand-400">Edge AI Local</span>
              </div>
              <ul className="space-y-3">
                {[
                  'One-time hardware purchase',
                  'All data stays on your device',
                  'Works with zero internet',
                  'Zero privacy exposure',
                  'Latency: < 25ms',
                  'Fully open & customizable',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <span className="text-brand-400 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
