import { useEffect, useRef } from 'react'
import { Shield, Cpu, Wifi, ArrowRight, Play, Lock, Zap } from 'lucide-react'

const statItems = [
  { value: '100%', label: 'Offline AI' },
  { value: '0ms', label: 'Cloud Latency' },
  { value: '4+', label: 'AI Products' },
  { value: '₹9,999', label: 'Starting Price' },
]

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(31,184,245,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(31,184,245,${p.opacity})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden mesh-bg pt-20">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass border border-brand-500/30 rounded-full px-4 py-1.5 text-sm">
              <div className="w-1.5 h-1.5 bg-brand-400 rounded-full animate-pulse" />
              <span className="font-mono text-brand-400 text-xs tracking-wider">EDGE AI • PRIVACY-FIRST</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-bold text-5xl sm:text-6xl xl:text-7xl leading-[1.1] text-slate-900 dark:text-white">
                AI Security
                <br />
                <span className="gradient-text">Without the</span>
                <br />
                Cloud Risk.
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg font-normal">
                Enterprise-grade AI surveillance, face recognition, and intelligent automation — running 100% locally on Raspberry Pi. No subscriptions. No data leaks. No compromise.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Lock, label: 'Zero Cloud' },
                { icon: Zap, label: 'Real-Time AI' },
                { icon: Shield, label: 'Privacy-First' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 rounded-full px-3 py-1 text-xs text-slate-700 dark:text-slate-300 font-medium transition-colors">
                  <Icon className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="btn-primary inline-flex items-center gap-2 group">
                View Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary inline-flex items-center gap-2 shadow-sm">
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              {statItems.map((s) => (
                <div key={s.label} className="space-y-0.5">
                  <div className="font-display font-bold text-xl text-slate-900 dark:text-white">{s.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg animate-float">
              {/* Main device card */}
              <div className="neon-border glass rounded-2xl p-6 scan-overlay">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-xs text-green-400">EDGE AI — LIVE</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500">CAM_01 • LOCAL</span>
                </div>

                {/* Fake camera feed */}
                <div className="relative bg-slate-100 dark:bg-surface-dark rounded-xl overflow-hidden mb-5 aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
                    {/* Grid overlay */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-20">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="border border-brand-500/20" />
                      ))}
                    </div>
                    {/* Detection box */}
                    <div className="relative w-20 h-28">
                      <div className="absolute inset-0 border-2 border-brand-400 rounded-sm opacity-80">
                        {/* Corner markers */}
                        <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-brand-400" />
                        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-brand-400" />
                        <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-brand-400" />
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-brand-400" />
                      </div>
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-brand-400 whitespace-nowrap bg-brand-500/20 px-2 py-0.5 rounded">
                        PERSON 98.7%
                      </div>
                      {/* Silhouette */}
                      <div className="absolute inset-2 flex flex-col items-center gap-1 opacity-40">
                        <div className="w-6 h-6 rounded-full bg-brand-400/60" />
                        <div className="w-10 h-12 rounded-t-lg bg-brand-400/40" />
                      </div>
                    </div>
                  </div>
                  {/* Scanline */}
                  <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-brand-400/60 to-transparent animate-scan" style={{ top: '0' }} />
                </div>

                {/* AI Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Detections', value: '14', color: 'text-brand-400' },
                    { label: 'Processing', value: '23ms', color: 'text-green-400' },
                    { label: 'Accuracy', value: '99.1%', color: 'text-accent-400' },
                  ].map((s) => (
                    <div key={s.label} className="bg-slate-200/50 dark:bg-white/5 rounded-lg p-2.5 text-center">
                      <div className={`font-mono font-bold text-sm ${s.color}`}>{s.value}</div>
                      <div className="text-slate-500 text-[10px] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating alert badge */}
              <div className="absolute -top-4 -right-4 glass border border-red-500/40 rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-red-400">ALERT: Intrusion</span>
              </div>

              {/* Floating CPU badge */}
              <div className="absolute -bottom-4 -left-4 glass border border-brand-500/30 rounded-xl px-3 py-2 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-400" />
                <span className="font-mono text-xs text-brand-400">Pi 5 • 8GB RAM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-[#050d18] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
