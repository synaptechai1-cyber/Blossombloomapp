import { useState } from 'react'
import { useAuth } from '../lib/AuthContext'
import { useNavigate } from 'react-router-dom'
import { mockStats, RANKS } from '../lib/mockData'
import { LogOut, Settings, ChevronRight, Flame, Heart, Target } from 'lucide-react'

export default function Profile() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [showTraining, setShowTraining] = useState(false)
  const displayName = user?.email?.split('@')[0] || 'Bloomer'
  const inviteCode = 'BLOOM' + (user?.id?.slice(0,6) || 'F5310A').toUpperCase()
  const rank = RANKS.find(r => r.name === mockStats.rank)

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  const goals = [
    { label: `Reach ${mockStats.nextRank} rank`, pct: 62 },
    { label: 'Recruit 5 new Bloomers', pct: 40 },
    { label: 'Complete training library', pct: 75 },
  ]

  return (
    <div className="page-container fade-up">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-display font-bold text-mink">Profile</h1>
        <Settings size={20} className="text-gray-400" />
      </div>

      {/* Profile card */}
      <div className="rounded-3xl p-6 mb-5 text-center" style={{background: 'linear-gradient(135deg, #fde8f0 0%, #fdf0e0 100%)'}}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-3 shadow-lg" style={{background: '#2a1520'}}>
          {displayName[0]?.toUpperCase()}
        </div>
        <p className="text-2xl font-display font-bold text-mink">{displayName}</p>
        <p className="text-sm text-gray-400 mt-0.5">{rank?.emoji} {mockStats.rank} · {user?.email}</p>
        <div className="mt-3 inline-block bg-mink text-white text-xs font-bold px-4 py-2 rounded-full tracking-wider">
          CODE: {inviteCode}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { icon: Flame, label: 'STREAK', value: `${mockStats.streak}d`, color: '#e8637a' },
          { icon: Heart, label: 'CUSTOMERS', value: mockStats.customers, color: '#d4486a' },
          { icon: Target, label: 'GOALS HIT', value: `${mockStats.goalsHit}/${mockStats.totalGoals}`, color: '#9b6bc4' },
        ].map((s, i) => (
          <div key={i} className="card text-center">
            <s.icon size={18} style={{color: s.color}} className="mx-auto mb-1" />
            <p className="text-xl font-display font-bold text-mink">{s.value}</p>
            <p className="label mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Transformation goals */}
      <div className="card mb-4">
        <p className="text-xl font-display font-semibold text-mink mb-4">Transformation goals</p>
        <div className="space-y-4">
          {goals.map((g, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-sm text-mink">{g.label}</p>
                <p className="text-xs font-semibold text-gray-400">{g.pct}%</p>
              </div>
              <div className="w-full bg-pink-100 rounded-full h-1.5">
                <div className="h-1.5 rounded-full transition-all" style={{width: `${g.pct}%`, background: 'linear-gradient(90deg, #f091a8, #e8637a)'}} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training hub link */}
      <button onClick={() => navigate('/training')} className="card w-full flex items-center gap-3 mb-3 active:scale-98 transition-all">
        <span className="text-xl">🎓</span>
        <span className="flex-1 text-left font-medium text-mink">Training Hub</span>
        <ChevronRight size={18} className="text-gray-300" />
      </button>

      {/* Sign out */}
      <button onClick={handleSignOut} className="card w-full flex items-center gap-3 active:scale-98 transition-all">
        <LogOut size={18} className="text-gray-400" />
        <span className="flex-1 text-left font-medium text-mink">Sign out</span>
      </button>
    </div>
  )
}
