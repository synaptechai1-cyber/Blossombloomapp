import { mockRewards, mockStats, RANKS } from '../lib/mockData'
import { Lock } from 'lucide-react'

export default function Rewards() {
  const { badges, challenges } = mockRewards

  return (
    <div className="page-container fade-up">
      <p className="label mb-1">EARN & CELEBRATE</p>
      <h1 className="text-4xl font-display font-bold text-mink mb-6">Rewards</h1>

      {/* Rank ladder */}
      <div className="card mb-5">
        <p className="text-xl font-display font-semibold text-mink mb-4">Bloom Ranks</p>
        <div className="space-y-3">
          {RANKS.map((rank, i) => {
            const unlocked = i <= RANKS.findIndex(r => r.name === mockStats.rank)
            return (
              <div key={rank.name} className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${unlocked ? '' : 'opacity-50'}`} style={{background: unlocked ? rank.bg : '#f5f5f5'}}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{background: unlocked ? rank.color : '#ccc'}}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-mink text-sm">{rank.emoji} {rank.name}</p>
                  <p className="text-xs text-gray-400">R{rank.min.toLocaleString()}+ in sales</p>
                </div>
                {unlocked ? (
                  <span className="text-xs font-semibold text-bloom-500">Unlocked</span>
                ) : (
                  <Lock size={14} className="text-gray-300" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Badges */}
      <p className="text-xl font-display font-semibold text-mink mb-3">Achievements</p>
      <div className="grid grid-cols-3 gap-3 mb-5">
        {badges.map(badge => (
          <div key={badge.id} className={`rounded-3xl p-4 flex flex-col items-center text-center transition-all ${badge.earned ? '' : 'opacity-50'}`} style={{background: badge.earned ? 'linear-gradient(135deg, #f5c870, #e8b050)' : '#f0f0f0'}}>
            {badge.earned ? (
              <>
                <span className="text-3xl mb-2">{badge.icon}</span>
                <p className="text-xs font-bold text-mink">{badge.title}</p>
                <p className="text-xs text-mink/60 mt-1">{badge.description}</p>
              </>
            ) : (
              <>
                <Lock size={24} className="text-gray-300 mb-2" />
                <p className="text-xs font-bold text-gray-400">{badge.title}</p>
                <p className="text-xs text-gray-300 mt-1">{badge.description}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Challenges */}
      <p className="text-xl font-display font-semibold text-mink mb-3">Community challenges</p>
      <div className="space-y-3 mb-5">
        {challenges.map(c => (
          <div key={c.id} className="card">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-semibold text-mink">{c.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{c.description}</p>
              </div>
              <span className="text-xs bg-bloom-50 text-bloom-600 px-2 py-1 rounded-full font-semibold flex-shrink-0 ml-2">{c.reward}</span>
            </div>
            <div className="w-full bg-pink-100 rounded-full h-1.5 mb-1">
              <div className="h-1.5 rounded-full transition-all" style={{width: `${(c.current/c.total)*100}%`, background: 'linear-gradient(90deg, #f091a8, #e8637a)'}} />
            </div>
            <p className="text-xs text-gray-400">{c.current} / {c.total}</p>
          </div>
        ))}
      </div>

      {/* Top Bloomers */}
      <div className="rounded-3xl p-5 bg-mink mb-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-400">🏆</span>
          <p className="text-lg font-display font-bold text-white">Top Bloomers</p>
        </div>
        <div className="space-y-3">
          {[{name:'Zanele K.',sales:24500},{name:'Amara O.',sales:14200},{name:'You',sales:8640,isMe:true}].map((p,i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-yellow-400 font-bold w-4">{i+1}</span>
              <span className="flex-1 text-white text-sm font-medium">{p.name}</span>
              <span className="text-white/70 text-sm">R{p.sales.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
