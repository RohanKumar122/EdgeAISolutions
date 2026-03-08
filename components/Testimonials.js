import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Anil Sharma',
    role: 'Temple Manager',
    location: 'Kanpur, UP',
    avatar: 'AS',
    avatarColor: 'from-orange-500 to-orange-600',
    stars: 5,
    text: 'We installed the Temple Security System 3 months ago. No more late-night watchmen. The AI sends alerts directly to my phone the moment anyone enters restricted zones. Completely offline — our internet goes down often, but the system never does.',
    product: 'Temple AI Security',
  },
  {
    name: 'Priya Mehta',
    role: 'School Principal',
    location: 'Lucknow, UP',
    avatar: 'PM',
    avatarColor: 'from-brand-500 to-brand-600',
    stars: 5,
    text: 'The Face Recognition Attendance system saved our staff hours every single day. Students are marked automatically as they enter the building. Attendance reports export with one click. Absolutely worth every rupee.',
    product: 'Attendance System',
  },
  {
    name: 'Rajesh Gupta',
    role: 'Warehouse Owner',
    location: 'Delhi NCR',
    avatar: 'RG',
    avatarColor: 'from-emerald-500 to-emerald-600',
    stars: 5,
    text: 'I was spending ₹4,000 per month on cloud CCTV service and the cameras went offline every time the internet dropped. With Edge AI Local, I paid once and the system has run 24/7 for 5 months straight without a single issue.',
    product: 'Smart Security Camera',
  },
  {
    name: 'Dr. Suresh Yadav',
    role: 'Hospital Administrator',
    location: 'Varanasi, UP',
    avatar: 'SY',
    avatarColor: 'from-accent-500 to-accent-600',
    stars: 5,
    text: 'Patient data privacy is our top concern. The Offline AI Assistant has transformed how our staff retrieves patient records and policy documents — no cloud, no risk. The local LLM answers surprisingly well.',
    product: 'Offline AI Assistant',
  },
  {
    name: 'Meena Joshi',
    role: 'Retail Store Owner',
    location: 'Agra, UP',
    avatar: 'MJ',
    avatarColor: 'from-pink-500 to-pink-600',
    stars: 5,
    text: 'Set up in 2 hours. The person detection catches shoplifting attempts and sends instant WhatsApp alerts. My staff feel more confident and my losses have dropped significantly. Highly recommend for any shop owner.',
    product: 'Smart Security Camera',
  },
  {
    name: 'Vikram Singh',
    role: 'IT Manager',
    location: 'Noida, UP',
    avatar: 'VS',
    avatarColor: 'from-teal-500 to-teal-600',
    stars: 5,
    text: 'We evaluated 5 solutions. Edge AI Local was the only one that genuinely works offline, has open-source models, and doesn\'t require any cloud login. The local dashboard is clean and our security team loves it.',
    product: 'Professional System',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-[#050d18] dark:via-[#071020] dark:to-[#050d18] transition-colors duration-300" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="font-mono text-xs text-brand-400 tracking-widest">TESTIMONIALS</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Trusted by{' '}
            <span className="gradient-text">Early Adopters</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Real feedback from our pilot customers across homes, businesses, and institutions in UP and NCR.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t) => (
            <div key={t.name} className="break-inside-avoid glass neon-border rounded-2xl p-5 card-hover">
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-brand-500/20 dark:text-brand-500/30 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>

              {/* Product tag */}
              <div className="mb-4">
                <span className="font-mono text-[10px] text-brand-600 dark:text-brand-400 bg-brand-500/10 border border-brand-500/20 px-2 py-0.5 rounded-full transition-colors">
                  {t.product}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-white/10">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <span className="font-display font-bold text-white text-xs">{t.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="font-display font-extrabold text-4xl text-slate-900 dark:text-white transition-colors">5.0</div>
            <div className="flex gap-0.5 justify-center mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <div className="font-mono text-xs text-slate-500 mt-1">Average Rating</div>
          </div>
          <div className="w-px h-12 bg-slate-200 dark:bg-white/10" />
          <div className="text-center">
            <div className="font-display font-extrabold text-4xl text-slate-900 dark:text-white transition-colors">100%</div>
            <div className="font-mono text-xs text-slate-500 mt-2">Would Recommend</div>
          </div>
          <div className="w-px h-12 bg-slate-200 dark:bg-white/10" />
          <div className="text-center">
            <div className="font-display font-extrabold text-4xl text-slate-900 dark:text-white transition-colors">6+</div>
            <div className="font-mono text-xs text-slate-500 mt-2">Pilot Deployments</div>
          </div>
        </div>
      </div>
    </section>
  )
}
