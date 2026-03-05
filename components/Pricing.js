import { Check, Zap, Star, Building2, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter Device',
    price: '₹9,999',
    period: 'one-time',
    desc: 'Perfect for homes, small shops, and individual property owners wanting AI security without cloud.',
    icon: Zap,
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
    buttonClass: 'btn-secondary',
    features: [
      '1× Raspberry Pi device',
      'AI Security Camera (1 cam)',
      'Person detection & alerts',
      'Local video storage (32GB)',
      'SMS/app notifications',
      'Local web dashboard',
      '6-month warranty',
      'Email support',
    ],
    notIncluded: ['Multi-camera support', 'Face recognition', 'Custom integrations'],
    badge: null,
  },
  {
    name: 'Professional System',
    price: '₹19,999',
    period: 'one-time',
    desc: 'Ideal for offices, schools, temples, and businesses needing advanced AI with multi-camera and attendance.',
    icon: Star,
    color: 'text-white',
    bg: 'bg-white/15',
    border: 'border-brand-400',
    buttonClass: 'btn-primary',
    features: [
      '1× Raspberry Pi 5 (8GB)',
      'Multi-camera support (up to 4)',
      'Face recognition attendance',
      'Intrusion detection system',
      'Local storage (128GB SSD)',
      'Full web dashboard',
      'Report export (CSV/PDF)',
      '1-year warranty + support',
    ],
    notIncluded: ['Custom AI training', 'Enterprise integrations'],
    badge: 'MOST POPULAR',
    highlighted: true,
  },
  {
    name: 'Enterprise Custom',
    price: 'Contact Us',
    period: 'custom quote',
    desc: 'Multi-location deployments, custom AI model training, ERP integration, and dedicated support.',
    icon: Building2,
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
    buttonClass: 'btn-secondary border-accent-500/50 text-accent-400 hover:bg-accent-500/10',
    features: [
      'Unlimited cameras & locations',
      'Custom AI model training',
      'Offline LLM assistant',
      'ERP / HR system integration',
      'Custom reporting & analytics',
      'Dedicated onboarding',
      'SLA support agreement',
      'On-site installation',
    ],
    notIncluded: [],
    badge: 'CUSTOM',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071525] to-[#050d18]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="font-mono text-xs text-brand-400 tracking-widest">PRICING</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Simple.{' '}
            <span className="gradient-text">One-Time.</span>
            {' '}Yours.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            No subscriptions. No hidden fees. Pay once, own it forever.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass rounded-2xl overflow-hidden flex flex-col card-hover ${plan.highlighted
                ? 'border-2 border-brand-400 shadow-brand-lg'
                : 'neon-border'
                }`}
            >
              {plan.badge && (
                <div className={`absolute top-4 right-4 font-mono text-[10px] px-2 py-0.5 rounded-full border ${plan.highlighted
                  ? 'bg-brand-500 text-white border-brand-400'
                  : 'bg-accent-500/20 text-accent-300 border-accent-500/30'
                  }`}>
                  {plan.badge}
                </div>
              )}

              <div className={`p-6 border-b border-white/10 bg-gradient-to-br ${plan.highlighted ? 'from-brand-500/20' : 'from-white/5'} to-transparent`}>
                <div className={`w-11 h-11 ${plan.bg} border ${plan.border} rounded-xl flex items-center justify-center mb-4`}>
                  <plan.icon className={`w-5 h-5 ${plan.color}`} />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-1 tracking-tight">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`font-display font-bold text-4xl ${plan.highlighted ? 'text-brand-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-500 text-sm mb-1.5 ml-0.5">/ {plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              <div className="p-6 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <Check className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                    {f}
                  </div>
                ))}
                {plan.notIncluded.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="w-3.5 h-3.5 flex items-center justify-center flex-shrink-0 text-slate-600 text-xs">—</span>
                    {f}
                  </div>
                ))}
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className={`w-full text-center block font-semibold py-3 rounded-xl transition-all duration-300 text-sm ${plan.highlighted
                    ? 'bg-brand-500 hover:bg-brand-400 text-white shadow-brand hover:shadow-brand-lg'
                    : 'border border-white/20 text-slate-300 hover:bg-white/10 hover:border-white/30'
                    }`}
                >
                  {plan.price === 'Contact Us' ? 'Request Quote →' : 'Order Now →'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-slate-500 mt-8">
          All prices include GST. Shipping across India. Custom installation available in Kanpur, Lucknow & NCR region.
        </p>
      </div>
    </section>
  )
}
