import { useState } from 'react'
import { mockTraining } from '../lib/mockData'
import { ChevronLeft, Play } from 'lucide-react'

const catColors = {
  'ONBOARDING': '#4a9b6b',
  'PRODUCT KNOWLEDGE': '#e8637a',
  'SALES': '#c4962a',
  'SOCIAL MEDIA': '#9b6bc4',
  'WELLNESS COACHING': '#4a8b9b',
  'LEADERSHIP': '#b83358',
  'MOTIVATION': '#d4486a',
}

export default function Training() {
  const [selected, setSelected] = useState(null)
  const inProgress = mockTraining.find(t => t.progress > 0 && t.progress < 100)
  const completed = mockTraining.filter(t => t.progress === 100).length

  if (selected) {
    const module = mockTraining.find(t => t.id === selected)
    return (
      <div className="page-container fade-up">
        <button onClick={() => setSelected(null)} className="flex items-center gap-1 text-sm text-gray-500 mb-6">
          <ChevronLeft size={16} /> Back
        </button>
        <p className="label mb-1" style={{color: catColors[module.category]}}>{module.category}</p>
        <h1 className="text-3xl font-display font-bold text-mink mb-1">{module.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{module.duration} · {module.progress}% complete</p>

        {module.progress > 0 && module.progress < 100 && (
          <div className="w-full bg-pink-100 rounded-full h-1.5 mb-6">
            <div className="h-1.5 rounded-full" style={{width: `${module.progress}%`, background: 'linear-gradient(90deg, #f091a8, #e8637a)'}} />
          </div>
        )}

        <div className="space-y-5 mb-8">
          {module.content.map((section, i) => (
            <div key={i} className="card">
              <p className="font-display font-semibold text-mink text-lg mb-2">{section.heading}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>

        <button className="btn-primary">
          {module.progress === 100 ? '✓ Completed — Revisit' : module.progress > 0 ? 'Resume Module' : 'Start Module'}
        </button>
      </div>
    )
  }

  return (
    <div className="page-container fade-up">
      <p className="label mb-1">BLOOM ACADEMY</p>
      <h1 className="text-4xl font-display font-bold text-mink mb-1">Training Hub</h1>
      <p className="text-sm text-gray-400 mb-6">Sales, social, wellness — everything you need to bloom.</p>

      {/* Continue watching */}
      {inProgress && (
        <div className="rounded-3xl p-5 mb-5" style={{background: 'linear-gradient(135deg, #e8637a, #d4486a)'}}>
          <p className="label text-white/60 mb-2">CONTINUE WATCHING</p>
          <p className="text-2xl font-display font-bold text-white mb-1">{inProgress.title}</p>
          <p className="text-sm text-white/70 mb-4">{inProgress.duration} · {inProgress.progress}% complete</p>
          <button onClick={() => setSelected(inProgress.id)} className="flex items-center gap-2 bg-white text-mink text-sm font-bold px-5 py-2.5 rounded-full active:scale-95 transition-all">
            <Play size={14} fill="currentColor" /> Resume
          </button>
        </div>
      )}

      {/* Module list */}
      <div className="space-y-3">
        {mockTraining.map(module => (
          <button key={module.id} onClick={() => setSelected(module.id)} className="w-full card flex items-center gap-4 text-left active:scale-98 transition-all">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background: `${catColors[module.category]}22`}}>
              <Play size={20} style={{color: catColors[module.category]}} fill={catColors[module.category]} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="label mb-0.5" style={{color: catColors[module.category]}}>{module.category}</p>
              <p className="font-display font-semibold text-mink">{module.title}</p>
              <p className="text-xs text-gray-400 mt-0.5">{module.duration}</p>
              {module.progress > 0 && (
                <div className="w-full bg-pink-100 rounded-full h-1 mt-2">
                  <div className="h-1 rounded-full" style={{width: `${module.progress}%`, background: catColors[module.category]}} />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
