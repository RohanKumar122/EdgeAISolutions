import { Cpu, Code, Eye, Brain, Layers, Terminal } from 'lucide-react'

const technologies = [
  {
    icon: Cpu,
    name: 'Raspberry Pi',
    tagline: 'Edge Hardware Platform',
    desc: 'Raspberry Pi 4 & 5 form the compute backbone. Compact, low-power, and capable of running full AI inference pipelines.',
    stats: [
      { label: 'Pi 5 Performance', value: '3× faster AI' },
      { label: 'Power Usage', value: '5–15W' },
    ],
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
    logo: '🍓',
  },
  {
    icon: Layers,
    name: 'Edge AI Framework',
    tagline: 'Inference Engine',
    desc: 'TensorFlow Lite, ONNX Runtime, and OpenVINO for ultra-fast model inference on ARM processors without GPU.',
    stats: [
      { label: 'Model formats', value: 'TFLite / ONNX' },
      { label: 'Inference speed', value: '< 25ms' },
    ],
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
    logo: '⚡',
  },
  {
    icon: Code,
    name: 'Python',
    tagline: 'Core Development Language',
    desc: 'Python 3.11+ powers our AI pipelines, REST APIs, dashboard backends, and automation scripts. Fast development, proven reliability.',
    stats: [
      { label: 'Version', value: 'Python 3.11+' },
      { label: 'Framework', value: 'FastAPI / Flask' },
    ],
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    logo: '🐍',
  },
  {
    icon: Eye,
    name: 'Computer Vision',
    tagline: 'Vision Intelligence',
    desc: 'YOLOv8, OpenCV, and custom-trained models for real-time object detection, face recognition, and motion analysis.',
    stats: [
      { label: 'Detection model', value: 'YOLOv8 Nano' },
      { label: 'Accuracy', value: '99.1% mAP' },
    ],
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    logo: '👁',
  },
  {
    icon: Brain,
    name: 'Local LLM Models',
    tagline: 'Offline Language AI',
    desc: 'Llama 3, Mistral 7B, and Phi-3 quantized models (GGUF) running via llama.cpp for offline Q&A and assistant functionality.',
    stats: [
      { label: 'Model size', value: 'Q4 quantized' },
      { label: 'RAM required', value: '4–8GB' },
    ],
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    logo: '🧠',
  },
  {
    icon: Terminal,
    name: 'Embedded Linux',
    tagline: 'OS & System Layer',
    desc: 'Raspberry Pi OS (Debian-based) with hardened security configuration, systemd service management, and encrypted storage.',
    stats: [
      { label: 'Base OS', value: 'Raspberry Pi OS' },
      { label: 'Kernel', value: 'Linux 6.x' },
    ],
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
    logo: '🐧',
  },
]

export default function Technology() {
  return (
    <section id="technology" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d18] to-[#071525]" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-500" />
            <span className="font-mono text-xs text-brand-400 tracking-widest">STACK</span>
            <div className="h-px w-8 bg-brand-500" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-4">
            Built on{' '}
            <span className="gradient-text">Proven Tech</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Open-source at the core. Battle-tested in production. Built to last without vendor dependency.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech) => (
            <div key={tech.name} className="glass neon-border rounded-2xl p-6 card-hover group">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 ${tech.bg} border ${tech.border} rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {tech.logo}
                </div>
                <div>
                  <div className={`font-mono text-xs ${tech.color} tracking-wider`}>{tech.tagline}</div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">{tech.name}</h3>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{tech.desc}</p>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-200 dark:border-white/5">
                {tech.stats.map((s) => (
                  <div key={s.label}>
                    <div className={`font-mono text-xs font-semibold ${tech.color}`}>{s.value}</div>
                    <div className="text-slate-500 dark:text-slate-600 text-[10px]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {['YOLOv8', 'OpenCV', 'TFLite', 'llama.cpp', 'FastAPI', 'SQLite', 'ONNX', 'React', 'Tailwind'].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-brand-400/70 border border-brand-500/15 bg-brand-500/5 rounded-full px-3 py-1 hover:border-brand-500/40 hover:text-brand-400 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
