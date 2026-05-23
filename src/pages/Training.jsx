import { useState } from 'react'
import { mockTraining } from '../lib/mockData'
import { BookOpen, CheckCircle2, Circle, Clock, ChevronRight } from 'lucide-react'

const categoryColors = {
  Onboarding: 'bg-blue-100 text-blue-600',
  Products: 'bg-bloom-100 text-bloom-600',
  Sales: 'bg-green-100 text-green-600',
  Leadership: 'bg-purple-100 text-purple-600',
}

export default function Training() {
  const [selected, setSelected] = useState(null)
  const completed = mockTraining.filter(t => t.completed).length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display font-bold text-bloom-800">Training</h1>
        <p className="text-pink-400 text-sm mt-1">{completed} of {mockTraining.length} modules completed</p>
      </div>

      {/* Progress bar */}
      <div className="bloom-card">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-bloom-700">Your Progress</span>
          <span className="text-sm font-semibold text-bloom-600">{Math.round((completed / mockTraining.length) * 100)}%</span>
        </div>
        <div className="w-full bg-pink-100 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-bloom-400 to-bloom-600 h-3 rounded-full transition-all duration-700"
            style={{ width: `${(completed / mockTraining.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-pink-400 mt-2">{mockTraining.length - completed} modules remaining</p>
      </div>

      {/* Modules */}
      <div className="space-y-3">
        {mockTraining.map(module => (
          <div
            key={module.id}
            className={`bloom-card cursor-pointer hover:shadow-md transition-all duration-200 ${module.completed ? 'opacity-80' : ''}`}
            onClick={() => setSelected(selected === module.id ? null : module.id)}
          >
            <div className="flex items-center gap-4">
              {module.completed
                ? <CheckCircle2 size={22} className="text-green-500 flex-shrink-0" />
                : <Circle size={22} className="text-pink-200 flex-shrink-0" />
              }
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-medium text-bloom-800">{module.title}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[module.category]}`}>{module.category}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Clock size={12} className="text-pink-300" />
                  <span className="text-xs text-pink-400">{module.duration}</span>
                </div>
              </div>
              <ChevronRight size={18} className={`text-pink-300 transition-transform ${selected === module.id ? 'rotate-90' : ''}`} />
            </div>

            {selected === module.id && (
              <div className="mt-4 pt-4 border-t border-pink-100">
                <p className="text-sm text-bloom-700 mb-4">{module.description}</p>
                <button className={module.completed ? 'bloom-btn-outline' : 'bloom-btn'}>
                  {module.completed ? 'Revisit Module' : 'Start Module'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
