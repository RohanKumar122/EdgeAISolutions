import { Camera, MessageSquare, Users, Eye, Check, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'smart-camera',
    icon: Camera,
    name: 'AI Smart Security Camera',
    tagline: 'See everything. Share nothing.',
    desc: 'Military-grade local person detection and intrusion alert system powered entirely by on-device AI. Zero cloud dependency, zero privacy risk.',
    features: [
      'Real-time person detection',
      'Instant intruder alerts (SMS/app)',
      'Night vision AI analysis',
      'Local video storage & playback',
      'Multi-zone monitoring',
      'No monthly fees',
    ],
    color: 'from-brand-500/20 to-brand-600/10',
    iconColor: 'text-brand-400',
    iconBg: 'bg-brand-500/15 border-brand-500/30',
    accent: '#1fb8f5',
    badge: 'BESTSELLER',
    badgeColor: 'bg-brand-500/20 text-brand-300 border-brand-500/30',
    visual: (
      <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-20">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-brand-500/20" />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-16 h-24 border-2 border-brand-400 rounded-sm">
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[8px] text-brand-400 bg-brand-500/20 px-1.5 py-0.5 rounded whitespace-nowrap">
              PERSON 97%
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
          <span className="font-mono text-[9px] text-red-400">REC</span>
        </div>
        <div className="absolute bottom-2 left-2 font-mono text-[9px] text-slate-500">
          CAM_01 • 1080p • LOCAL
        </div>
      </div>
    ),
  },
  {
    id: 'offline-assistant',
    icon: MessageSquare,
    name: 'Offline AI Assistant',
    tagline: 'ChatGPT, unplugged.',
    desc: 'A fully local LLM-powered assistant device for document Q&A, business automation, and intelligent support. Works in the deepest offline environments.',
    features: [
      'Local LLM (Llama / Mistral)',
      'Internet-free operation',
      'Document Q&A system',
      'Custom knowledge base',
      'Voice interaction ready',
      'Multi-user access',
    ],
    color: 'from-accent-500/20 to-accent-600/10',
    iconColor: 'text-accent-400',
    iconBg: 'bg-accent-500/15 border-accent-500/30',
    accent: '#a78bfa',
    badge: 'NEW',
    badgeColor: 'bg-accent-500/20 text-accent-300 border-accent-500/30',
    visual: (
      <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden p-3">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-accent-500/20 border border-accent-500/30 flex-shrink-0 flex items-center justify-center">
              <span className="text-[8px] text-accent-400">U</span>
            </div>
            <div className="bg-white/5 rounded-lg px-2 py-1.5 text-[9px] text-slate-300 max-w-[80%]">
              Summarize the Q3 report for me
            </div>
          </div>
          <div className="flex items-start gap-2 justify-end">
            <div className="bg-accent-500/15 border border-accent-500/20 rounded-lg px-2 py-1.5 text-[9px] text-accent-200 max-w-[85%]">
              Q3 revenue grew 24% YoY. Key drivers: product expansion, 3 new clients...
            </div>
            <div className="w-5 h-5 rounded-full bg-accent-500/20 border border-accent-500/30 flex-shrink-0 flex items-center justify-center">
              <span className="text-[8px] text-accent-400">AI</span>
            </div>
          </div>
          <div className="flex items-center gap-1 pl-7">
            <div className="w-1 h-1 bg-accent-400 rounded-full animate-pulse" />
            <div className="w-1 h-1 bg-accent-400 rounded-full animate-pulse delay-100" />
            <div className="w-1 h-1 bg-accent-400 rounded-full animate-pulse delay-200" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 font-mono text-[9px] text-accent-500/60">OFFLINE • LOCAL LLM</div>
      </div>
    ),
  },
  {
    id: 'attendance',
    icon: Users,
    name: 'Face Recognition Attendance',
    tagline: 'Mark attendance in milliseconds.',
    desc: 'Automated attendance tracking using local face recognition AI. No card scanning, no manual entries. Export reports instantly.',
    features: [
      'Sub-second face recognition',
      'Automatic attendance logging',
      'CSV / PDF report export',
      'Multi-face simultaneous scan',
      'Unknown person flagging',
      'Admin dashboard included',
    ],
    color: 'from-emerald-500/20 to-emerald-600/10',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
    accent: '#34d399',
    badge: 'POPULAR',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    visual: (
      <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden p-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: 'Ravi K.', time: '09:02', status: 'IN' },
            { name: 'Priya S.', time: '09:07', status: 'IN' },
            { name: 'Ajay M.', time: '09:15', status: 'IN' },
          ].map((e) => (
            <div key={e.name} className="bg-white/5 rounded-lg p-1.5 border border-emerald-500/15">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 mx-auto mb-1 flex items-center justify-center">
                <span className="text-[7px] text-emerald-400 font-bold">{e.name[0]}</span>
              </div>
              <div className="text-center">
                <div className="font-mono text-[7px] text-slate-300">{e.name}</div>
                <div className="font-mono text-[7px] text-emerald-400">{e.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-mono text-[8px] text-slate-500">3/24 marked today</span>
          <span className="font-mono text-[8px] text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded">LIVE</span>
        </div>
      </div>
    ),
  },
  {
    id: 'temple-security',
    icon: Eye,
    name: 'Temple / Property AI Security',
    tagline: 'Guard what matters, day and night.',
    desc: 'Perimeter intrusion detection with night-vision AI monitoring built for temples, heritage sites, and private properties. Silent alerts, total privacy.',
    features: [
      'Perimeter intrusion detection',
      'Night vision AI (thermal-ready)',
      'Silent SMS/app alerts',
      'Multi-camera support',
      'Sacred zone exclusion zones',
      'Battery backup compatible',
    ],
    color: 'from-orange-500/20 to-orange-600/10',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/15 border-orange-500/30',
    accent: '#fb923c',
    badge: 'SPECIALIZED',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    visual: (
      <div className="relative w-full aspect-video bg-slate-950 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-950 opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-32 border border-orange-500/30 rounded-sm relative">
              <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t border-l border-orange-400" />
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t border-r border-orange-400" />
              <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b border-l border-orange-400" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b border-r border-orange-400" />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[8px] text-orange-400 whitespace-nowrap">
                INTRUDER
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-2 left-2 flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
          <span className="font-mono text-[9px] text-orange-400">NIGHT MODE</span>
        </div>
        <div className="absolute bottom-2 right-2 font-mono text-[9px] text-slate-500">02:34 AM • ZONE_3</div>
      </div>
    ),
  },
]

export default function Products() {
  return (
    <section id="products" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-[#050d18] dark:to-[#071525] transition-colors duration-300" />
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="font-mono text-xs text-brand-400 tracking-widest">PRODUCTS</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            AI Hardware That{' '}
            <span className="gradient-text">Works for You</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Four products. One mission: bring the power of AI directly to your location — offline, secure, and affordable.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="glass neon-border rounded-2xl overflow-hidden card-hover group"
            >
              {/* Visual preview */}
              <div className={`bg-gradient-to-br ${product.color} p-4 border-b border-white/5 dark:border-white/5`}>
                {product.visual}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 ${product.iconBg} border rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <product.icon className={`w-5 h-5 ${product.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white leading-tight">{product.name}</h3>
                      <p className={`text-xs font-mono mt-0.5`} style={{ color: product.accent }}>{product.tagline}</p>
                    </div>
                  </div>
                  <span className={`flex-shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full border ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{product.desc}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-2">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 transition-colors">
                      <Check className="w-3 h-3 flex-shrink-0" style={{ color: product.accent }} />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-white/5">
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold group/btn"
                    style={{ color: product.accent }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a href="#contact" className="text-xs text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors">
                    Request Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
