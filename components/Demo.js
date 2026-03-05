import { Bell, Shield, Activity, Camera, Users, AlertTriangle } from 'lucide-react'

const alerts = [
  { type: 'INTRUSION', msg: 'Person detected in Zone 3', time: '2m ago', color: 'text-red-400', bg: 'bg-red-500/10', dot: 'bg-red-400' },
  { type: 'ATTENDANCE', msg: 'Ravi Kumar — Marked IN', time: '5m ago', color: 'text-emerald-400', bg: 'bg-emerald-500/10', dot: 'bg-emerald-400' },
  { type: 'INFO', msg: 'AI model updated to v2.3.1', time: '12m ago', color: 'text-brand-400', bg: 'bg-brand-500/10', dot: 'bg-brand-400' },
  { type: 'ALERT', msg: 'Night motion detected — Cam 2', time: '24m ago', color: 'text-orange-400', bg: 'bg-orange-500/10', dot: 'bg-orange-400' },
]

const cameras = [
  { id: 'CAM_01', location: 'Front Gate', status: 'LIVE', detection: 'Person', color: 'text-red-400 border-red-500/30' },
  { id: 'CAM_02', location: 'Back Yard', status: 'LIVE', detection: 'Clear', color: 'text-green-400 border-green-500/30' },
  { id: 'CAM_03', location: 'Lobby', status: 'LIVE', detection: 'Person', color: 'text-red-400 border-red-500/30' },
  { id: 'CAM_04', location: 'Server Room', status: 'OFFLINE', detection: '—', color: 'text-slate-500 border-slate-600/30' },
]

export default function Demo() {
  return (
    <section id="demo" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071525] to-[#050d18]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="font-mono text-xs text-brand-400 tracking-widest">DASHBOARD PREVIEW</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            See It in{' '}
            <span className="gradient-text">Action</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Every device ships with a local web dashboard — fully functional, beautiful, and 100% offline.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="glass neon-border rounded-3xl overflow-hidden">
          {/* Dashboard title bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-xs text-slate-400 ml-2">RK Edge AI — Local Dashboard — 192.168.1.100</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-green-400">ONLINE</span>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-5 grid lg:grid-cols-3 gap-5">
            {/* Left — Stats + Alerts */}
            <div className="lg:col-span-1 space-y-4">
              {/* Stat cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Camera, label: 'Cameras', value: '3/4', color: 'text-brand-400', bg: 'bg-brand-500/15' },
                  { icon: AlertTriangle, label: 'Alerts Today', value: '7', color: 'text-orange-400', bg: 'bg-orange-500/15' },
                  { icon: Users, label: 'Attendance', value: '24', color: 'text-emerald-400', bg: 'bg-emerald-500/15' },
                  { icon: Shield, label: 'Threat Level', value: 'LOW', color: 'text-green-400', bg: 'bg-green-500/15' },
                ].map((s) => (
                  <div key={s.label} className={`${s.bg} rounded-xl p-3 border border-white/10`}>
                    <s.icon className={`w-4 h-4 ${s.color} mb-1`} />
                    <div className={`font-mono font-bold text-lg ${s.color}`}>{s.value}</div>
                    <div className="font-mono text-[9px] text-slate-500 uppercase">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Live alerts */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Bell className="w-3.5 h-3.5 text-brand-400" />
                  <span className="font-mono text-xs text-slate-400">LIVE ALERTS</span>
                </div>
                <div className="space-y-2">
                  {alerts.map((alert, i) => (
                    <div key={i} className={`${alert.bg} border border-white/5 rounded-lg px-3 py-2.5 flex items-start gap-2`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${alert.dot} mt-1.5 flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <div className={`font-mono text-[9px] ${alert.color} mb-0.5`}>{alert.type}</div>
                        <div className="text-slate-300 text-[10px] leading-tight truncate">{alert.msg}</div>
                      </div>
                      <div className="font-mono text-[9px] text-slate-600 flex-shrink-0">{alert.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center — Camera grid */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-brand-400" />
                <span className="font-mono text-xs text-slate-400">CAMERA FEEDS</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cameras.map((cam) => (
                  <div key={cam.id} className={`relative bg-slate-950 rounded-xl overflow-hidden border aspect-video flex flex-col justify-between p-2 ${cam.color.split(' ')[1]}`}>
                    {/* Fake feed */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
                      {cam.status === 'LIVE' && cam.detection === 'Person' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-8 h-14 border ${cam.color.split(' ')[1]} opacity-60 rounded-sm`}>
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-mono text-[7px] text-red-400 whitespace-nowrap">PERSON</div>
                          </div>
                        </div>
                      )}
                      {cam.status === 'OFFLINE' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80">
                          <span className="font-mono text-[9px] text-slate-600">NO SIGNAL</span>
                        </div>
                      )}
                    </div>

                    {/* Top bar */}
                    <div className="relative flex items-center justify-between z-10">
                      <span className="font-mono text-[8px] text-white/50">{cam.id}</span>
                      <div className="flex items-center gap-1">
                        <div className={`w-1 h-1 rounded-full ${cam.status === 'LIVE' ? 'bg-red-400 animate-pulse' : 'bg-slate-600'}`} />
                        <span className={`font-mono text-[7px] ${cam.status === 'LIVE' ? 'text-red-400' : 'text-slate-600'}`}>{cam.status}</span>
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="relative flex items-center justify-between z-10">
                      <span className="font-mono text-[8px] text-white/40">{cam.location}</span>
                      {cam.detection !== '—' && (
                        <span className={`font-mono text-[7px] ${cam.color.split(' ')[0]}`}>{cam.detection}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Analytics bar */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-slate-400">DETECTION ACTIVITY (24h)</span>
                  <span className="font-mono text-xs text-brand-400">47 events</span>
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[3, 1, 0, 2, 5, 8, 12, 9, 6, 4, 7, 11, 8, 5, 3, 6, 9, 7, 4, 2, 5, 8, 6, 4].map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-brand-500/40 hover:bg-brand-400/60 transition-colors"
                      style={{ height: `${(v / 12) * 100}%`, minHeight: v > 0 ? '4px' : '2px' }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  <span className="font-mono text-[9px] text-slate-600">00:00</span>
                  <span className="font-mono text-[9px] text-slate-600">12:00</span>
                  <span className="font-mono text-[9px] text-slate-600">23:59</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
