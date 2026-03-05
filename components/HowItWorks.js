import { Camera, Cpu, Brain, Bell, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Camera,
    label: 'Camera / Sensors',
    sublabel: 'Input Layer',
    desc: 'HD cameras, PIR sensors, microphones, or thermal sensors capture real-world data 24/7.',
    color: 'text-brand-400',
    bg: 'bg-brand-500/15',
    border: 'border-brand-500/30',
    number: '01',
  },
  {
    icon: Cpu,
    label: 'Raspberry Pi Edge',
    sublabel: 'Processing Unit',
    desc: 'The Raspberry Pi 5 receives raw sensor data and prepares it for AI inference — all locally, all instantly.',
    color: 'text-accent-400',
    bg: 'bg-accent-500/15',
    border: 'border-accent-500/30',
    number: '02',
  },
  {
    icon: Brain,
    label: 'AI Model',
    sublabel: 'Intelligence Layer',
    desc: 'Optimized computer vision and LLM models analyze data in real-time. Person detection, face matching, anomaly detection.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/15',
    border: 'border-emerald-500/30',
    number: '03',
  },
  {
    icon: Bell,
    label: 'Alert / Dashboard',
    sublabel: 'Output Layer',
    desc: 'Instant SMS alerts, app notifications, and a live local dashboard. All delivered within milliseconds — no cloud round-trip.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/15',
    border: 'border-orange-500/30',
    number: '04',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071525] via-[#050d18] to-[#071525]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="font-mono text-xs text-brand-400 tracking-widest">WORKFLOW</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            How It{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            From raw sensor input to intelligent alert — everything happens on your device in under 25ms.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="relative">
          {/* Desktop flow — horizontal */}
          <div className="hidden lg:flex items-start gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex-1 flex items-start">
                {/* Step card */}
                <div className="flex-1 group">
                  <div className={`glass neon-border rounded-2xl p-6 card-hover relative overflow-hidden`}>
                    {/* Number watermark */}
                    <div className="absolute top-3 right-4 font-mono font-bold text-5xl text-white/5 select-none">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-12 h-12 ${step.bg} border ${step.border} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>

                    <div className={`font-mono text-xs ${step.color} mb-1 tracking-wider`}>{step.sublabel}</div>
                    <h3 className="font-display font-bold text-lg text-white mb-2">{step.label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>

                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${step.bg}`} />
                  </div>
                </div>

                {/* Arrow connector */}
                {i < steps.length - 1 && (
                  <div className="flex items-center justify-center w-10 mt-8 flex-shrink-0">
                    <ArrowRight className="w-5 h-5 text-slate-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow — vertical */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="glass neon-border rounded-2xl p-5 flex items-start gap-4">
                  <div className={`w-12 h-12 ${step.bg} border ${step.border} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className={`font-mono text-xs ${step.color} mb-0.5 tracking-wider`}>{step.sublabel}</div>
                    <h3 className="font-display font-semibold text-white mb-1">{step.label}</h3>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                  </div>
                  <div className="font-mono font-bold text-2xl text-white/10">{step.number}</div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center my-2">
                    <ArrowRight className="w-4 h-4 text-slate-600 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center">
          <div className="inline-block glass border border-brand-500/20 rounded-2xl px-8 py-5">
            <div className="flex items-center gap-8 flex-wrap justify-center">
              {[
                { label: 'Average inference time', value: '< 25ms' },
                { label: 'CPU usage (idle)', value: '< 15%' },
                { label: 'Internet required', value: 'None' },
                { label: 'Data leaves device', value: 'Never' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-bold text-xl text-brand-400">{s.value}</div>
                  <div className="font-mono text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
