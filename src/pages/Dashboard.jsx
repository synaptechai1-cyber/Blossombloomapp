import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'
import { mockStats } from '../lib/mockData'
import { TrendingUp, Users, Award, Star, Sparkles, BookOpen, Gift, ChevronRight } from 'lucide-react'

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const stats = mockStats

  const quickActions = [
    { label: 'Studio', icon: Sparkles, color: 'bg-bloom-600', to: '/studio' },
    { label: 'Training', icon: BookOpen, color: 'bg-pink-400', to: '/training' },
    { label: 'My Team', icon: Users, color: 'bg-rose-400', to: '/team' },
    { label: 'Rewards', icon: Gift, color: 'bg-fuchsia-400', to: '/rewards' },
  ]

  const progress = Math.round((stats.monthlySales / stats.nextRankTarget) * 100)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-display font-bold text-bloom-800">
          Good morning 🌸
        </h1>
        <p className="text-pink-400 mt-1 text-sm">{user?.email} · {stats.rank} Partner</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Monthly Sales', value: `R${stats.monthlySales.toLocaleString()}`, icon: TrendingUp, change: `+${stats.salesGrowth}%`, color: 'text-bloom-600' },
          { label: 'Team Members', value: stats.teamSize, icon: Users, change: 'Active', color: 'text-pink-500' },
          { label: 'Current Rank', value: stats.rank, icon: Award, change: `→ ${stats.nextRank}`, color: 'text-fuchsia-500' },
          { label: 'Reward Points', value: stats.points, icon: Star, change: 'This month', color: 'text-rose-500' },
        ].map((stat, i) => (
          <div key={i} className="bloom-card">
            <div className="flex items-start justify-between mb-3">
              <stat.icon size={20} className={stat.color} />
              <span className="text-xs text-green-500 font-medium">{stat.change}</span>
            </div>
            <p className="text-2xl font-display font-bold text-bloom-800">{stat.value}</p>
            <p className="text-xs text-pink-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Rank progress */}
      <div className="bloom-card">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-lg font-display font-semibold text-bloom-800">Rank Progress</h3>
            <p className="text-xs text-pink-400">R{stats.monthlySales.toLocaleString()} of R{stats.nextRankTarget.toLocaleString()} to reach {stats.nextRank}</p>
          </div>
          <span className="text-sm font-semibold text-bloom-600">{progress}%</span>
        </div>
        <div className="w-full bg-pink-100 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-bloom-400 to-bloom-600 h-3 rounded-full transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-xl font-display font-semibold text-bloom-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, i) => (
            <button
              key={i}
              onClick={() => navigate(action.to)}
              className="bloom-card flex flex-col items-center gap-3 py-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <div className={`${action.color} w-12 h-12 rounded-2xl flex items-center justify-center shadow-md`}>
                <action.icon className="text-white" size={22} />
              </div>
              <span className="text-sm font-medium text-bloom-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Studio promo card */}
      <div className="rounded-2xl overflow-hidden relative" style={{background: 'linear-gradient(135deg, #db2777 0%, #be185d 50%, #9d174d 100%)'}}>
        <div className="absolute inset-0 opacity-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white" style={{
              width: `${60 + i * 30}px`, height: `${60 + i * 30}px`,
              top: `${10 + i * 15}%`, right: `${5 + i * 8}%`
            }} />
          ))}
        </div>
        <div className="relative z-10 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="text-pink-200" size={20} />
              <span className="text-pink-200 text-sm font-medium uppercase tracking-wider">New Feature</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-2">Bloom Content Studio</h2>
            <p className="text-pink-200 text-sm max-w-md">Generate stunning social media content in seconds. AI-powered captions, hooks and hashtags tailored for your Bloom business.</p>
          </div>
          <button
            onClick={() => navigate('/studio')}
            className="flex items-center gap-2 bg-white text-bloom-700 px-6 py-3 rounded-full font-medium text-sm hover:bg-pink-50 transition-colors flex-shrink-0 shadow-lg"
          >
            Try it now
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
