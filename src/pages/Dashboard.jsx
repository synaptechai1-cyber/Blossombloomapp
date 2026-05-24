import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'
import { mockStats, mockLeaderboard, mockActivity, MOTIVATIONAL_QUOTES, RANKS } from '../lib/mockData'
import { TrendingUp, Users, UserPlus, Share2, BookOpen, Target, Sparkles } from 'lucide-react'

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const stats = mockStats
  const quote = MOTIVATIONAL_QUOTES[new Date().getDay() % MOTIVATIONAL_QUOTES.length]
  const rank = RANKS.find(r => r.name === stats.rank)
  const nextRank = RANKS.find(r => r.name === stats.nextRank)
  const progress = Math.round((stats.monthlySales / stats.nextRankTarget) * 100)
  const displayName = user?.email?.split('@')[0] || 'Bloomer'
  const inviteCode = 'BLOOM' + (user?.id?.slice(0,6) || 'F5310A').toUpperCase()

  const quickActions = [
    { label: 'Invite', icon: UserPlus, to: '/team' },
    { label: 'Share', icon: Share2, to: '/studio' },
    { label: 'Train', icon: BookOpen, to: '/training' },
    { label: 'Goals', icon: Target, to: '/rewards' },
  ]

  return (
    <div className="page-container fade-up">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="label mb-1">HELLO, BEAUTIFUL</p>
          <h1 className="text-3xl font-display font-bold text-mink leading-tight">{displayName}</h1>
          <div className="flex items-center gap-1 mt-1">
            <span style={{color: rank?.color}} className="text-lg">{rank?.emoji}</span>
            <span className="text-xs text-gray-400 font-medium">{stats.rank}</span>
          </div>
        </div>
        <button onClick={() => navigate('/profile')} className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md" style={{background: 'linear-gradient(135deg, #e8637a, #d4486a)'}}>
          {displayName[0]?.toUpperCase()}
        </button>
      </div>

      {/* Daily quote */}
      <div className="card-gradient mb-4 fade-up">
        <p className="label mb-2">TODAY'S BLOOM</p>
        <p className="text-xl font-display font-semibold text-mink leading-snug">"{quote}"</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm">🔥</span>
          <span className="text-xs text-gray-500">Day {stats.streak} of your wellness streak</span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: 'EARNINGS', value: `R${stats.monthlySales.toLocaleString()}`, sub: `+${stats.salesGrowth}% this month`, icon: TrendingUp, color: '#e8637a' },
          { label: 'PENDING', value: `R${stats.pendingPayout.toLocaleString()}`, sub: 'Pays Friday', icon: Sparkles, color: '#c4962a' },
          { label: 'TEAM SALES', value: `R${(stats.monthlySales * 2.8).toLocaleString()}`, sub: `${stats.teamSize} active Bloomers`, icon: Users, color: '#9b6bc4' },
          { label: 'CUSTOMERS', value: stats.customers, sub: '3 new this week', icon: Target, color: '#4a9b6b' },
        ].map((s, i) => (
          <div key={i} className="card">
            <div className="flex items-center justify-between mb-2">
              <p className="label">{s.label}</p>
              <s.icon size={16} style={{color: s.color}} />
            </div>
            <p className="text-2xl font-display font-bold text-mink">{s.value}</p>
            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
              <span className="text-green-400">↗</span> {s.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Rank progress */}
      <div className="card mb-4">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="label mb-1">YOUR RANK</p>
            <p className="text-xl font-display font-bold text-mink">{stats.rank}</p>
          </div>
          <span className="text-xs bg-bloom-50 text-bloom-600 px-3 py-1 rounded-full font-semibold">Next: {stats.nextRank}</span>
        </div>
        <div className="w-full bg-pink-100 rounded-full h-2 mt-3 mb-2">
          <div className="h-2 rounded-full transition-all duration-700" style={{width: `${Math.min(progress, 100)}%`, background: 'linear-gradient(90deg, #f091a8, #e8637a)'}} />
        </div>
        <p className="text-xs text-gray-400">R{(stats.nextRankTarget - stats.monthlySales).toLocaleString()} more in sales until you bloom into {stats.nextRank} 🌸</p>
      </div>

      {/* Quick actions */}
      <div className="card mb-4">
        <p className="text-lg font-display font-semibold text-mink mb-4">Quick actions</p>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((a, i) => (
            <button key={i} onClick={() => navigate(a.to)} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #e8637a, #d4486a)'}}>
                <a.icon size={20} className="text-white" />
              </div>
              <span className="text-xs font-medium text-gray-600">{a.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="card mb-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-display font-semibold text-mink">Leaderboard</p>
          <span className="text-xs text-bloom-500 font-semibold">This month</span>
        </div>
        <div className="space-y-3">
          {mockLeaderboard.map((p, i) => (
            <div key={i} className={`flex items-center gap-3 p-2 rounded-2xl ${p.isMe ? 'bg-bloom-50' : ''}`}>
              <span className="w-6 text-sm font-bold text-gray-400">{i + 1}</span>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{background: p.isMe ? 'linear-gradient(135deg, #e8637a, #d4486a)' : '#f0c4b0'}}>
                <span className={p.isMe ? 'text-white' : 'text-mink'}>{p.initials}</span>
              </div>
              <span className="flex-1 text-sm font-medium text-mink">{p.name}</span>
              <span className="text-sm font-semibold text-mink">R{p.sales.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="card mb-4">
        <p className="text-lg font-display font-semibold text-mink mb-4">Recent activity</p>
        <div className="space-y-3">
          {mockActivity.map((a, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-bloom-400 mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-mink">{a.text}</p>
                <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Studio promo */}
      <div className="rounded-3xl overflow-hidden mb-4 bg-mink p-5">
        <p className="label text-white/40 mb-2">BLOOM CONTENT STUDIO</p>
        <p className="text-2xl font-display font-bold text-white mb-1">Create content that converts</p>
        <p className="text-white/60 text-sm mb-4">Generate captions, hooks & hashtags for your Blossom Bloom business in seconds.</p>
        <button onClick={() => navigate('/studio')} className="bg-white text-mink text-sm font-semibold px-5 py-2.5 rounded-full active:scale-95 transition-all">
          Open Studio ✨
        </button>
      </div>
    </div>
  )
}
