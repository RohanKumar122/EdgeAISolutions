import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-[#071525] dark:to-[#050d18] transition-colors duration-300" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="font-mono text-xs text-brand-400 tracking-widest">CONTACT</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Let's Build Your{' '}
            <span className="gradient-text">Edge AI System</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Get a free consultation. Tell us your requirements and we'll design the perfect edge AI solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div className="space-y-8">
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@edgeailocal.com',
                  sub: 'We respond within 24 hours',
                  color: 'text-brand-600 dark:text-brand-400',
                  bg: 'bg-brand-500/10 dark:bg-brand-500/15',
                  border: 'border-brand-500/20 dark:border-brand-500/30',
                },
                // {
                //   icon: Phone,
                //   label: 'Phone / WhatsApp',
                //   value: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 98765 43210',
                //   sub: 'Mon–Sat, 9AM–7PM IST',
                //   color: 'text-emerald-600 dark:text-emerald-400',
                //   bg: 'bg-emerald-500/10 dark:bg-emerald-500/15',
                //   border: 'border-emerald-500/20 dark:border-emerald-500/30',
                // },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: process.env.NEXT_PUBLIC_CONTACT_LOCATION || 'Gurugram, Haryana',
                  sub: `Installation service: ${process.env.NEXT_PUBLIC_SERVICE_AREAS || 'Gurugram, NCR'}`,
                  color: 'text-orange-600 dark:text-orange-400',
                  bg: 'bg-orange-500/10 dark:bg-orange-500/15',
                  border: 'border-orange-500/20 dark:border-orange-500/30',
                },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${info.bg} border ${info.border} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-500 mb-0.5">{info.label}</div>
                    <div className="font-semibold text-slate-900 dark:text-white">{info.value}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="space-y-3">
              <div className="font-mono text-xs text-slate-500 dark:text-slate-500 tracking-wider">QUICK ACTIONS</div>
              {[
                'Request a product demo',
                'Get a custom enterprise quote',
                'Schedule on-site installation',
                'Technical consultation call',
              ].map((action) => (
                <button
                  key={action}
                  className="w-full text-left flex items-center gap-3 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-400 dark:hover:border-brand-500/30 rounded-xl px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all group shadow-sm dark:shadow-none"
                >
                  <MessageSquare className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                  {action}
                  <span className="ml-auto text-slate-400 dark:text-slate-600 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass neon-border rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-brand-500/20 border border-brand-500/30 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-brand-400" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">We'll get back to you within 24 hours. Check your email for confirmation.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="btn-secondary text-sm mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-slate-500 dark:text-slate-400 block mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ravi Kumar"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-400 dark:focus:border-brand-500/60 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-slate-500 dark:text-slate-400 block mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ravi@example.com"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-400 dark:focus:border-brand-500/60 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-slate-500 dark:text-slate-400 block mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-400 dark:focus:border-brand-500/60 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-slate-500 dark:text-slate-400 block mb-1.5">Subject *</label>
                    <select
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-[#0a1628] border border-slate-200 dark:border-white/10 focus:border-brand-400 dark:focus:border-brand-500/60 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition-colors appearance-none"
                    >
                      <option value="">Select topic</option>
                      <option>Product Inquiry</option>
                      <option>Custom Enterprise Quote</option>
                      <option>Technical Support</option>
                      <option>Demo Request</option>
                      <option>Installation Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-slate-500 dark:text-slate-400 block mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your security requirements, location, number of cameras needed..."
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-400 dark:focus:border-brand-500/60 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500 dark:text-slate-600">
                  Your information is secure and never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
