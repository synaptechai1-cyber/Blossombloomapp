import { mockRewards, mockStats } from '../lib/mockData'
import { Star, Lock } from 'lucide-react'

export default function Rewards() {
  const totalPoints = mockStats.points
  const earned = mockRewards.filter(r => r.earned)
  const earnedPoints = earned.reduce((s, r) => s + r.points, 0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display font-bold text-bloom-800">Rewards</h1>
        <p className="text-pink-400 text-sm mt-1">Your achievements and points</p>
      </div>

      {/* Points card */}
      <div className="rounded-2xl p-8 text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #ec4899 0%, #db2777 50%, #be185d 100%)'}}>
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white opacity-5 -translate-y-12 translate-x-12" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Star className="text-pink-200" size={20} />
            <span className="text-pink-200 text-sm uppercase tracking-wider">Total Points</span>
          </div>
          <p className="text-6xl font-display font-bold">{totalPoints}</p>
          <p className="text-pink-200 text-sm mt-2">{earned.length} badges earned · {earnedPoints} points from badges</p>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h2 className="text-xl font-display font-semibold text-bloom-800 mb-4">Badges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockRewards.map(reward => (
            <div
              key={reward.id}
              className={`bloom-card relative ${!reward.earned ? 'opacity-60' : ''}`}
            >
              {!reward.earned && (
                <div className="absolute top-3 right-3">
                  <Lock size={14} className="text-pink-300" />
                </div>
              )}
              {reward.earned && (
                <div className="absolute top-3 right-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-500 text-xs">✓</span>
                  </div>
                </div>
              )}
              <div className="text-4xl mb-3">{reward.icon}</div>
              <h3 className="font-display font-semibold text-bloom-800 text-lg">{reward.title}</h3>
              <p className="text-xs text-pink-400 mt-1 mb-3">{reward.description}</p>
              <div className="flex items-center gap-1">
                <Star size={12} className="text-bloom-400" />
                <span className="text-xs font-semibold text-bloom-600">{reward.points} pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
