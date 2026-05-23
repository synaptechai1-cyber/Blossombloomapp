import { useState } from 'react'
import { mockTeam } from '../lib/mockData'
import { Users, TrendingUp, UserPlus } from 'lucide-react'

const rankColors = {
  Gold: 'bg-yellow-100 text-yellow-700',
  Silver: 'bg-gray-100 text-gray-600',
  Bronze: 'bg-orange-100 text-orange-600',
  Starter: 'bg-pink-100 text-pink-600',
}

export default function Team() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? mockTeam : mockTeam.filter(m => m.status === filter)
  const totalSales = mockTeam.reduce((s, m) => s + m.sales, 0)
  const active = mockTeam.filter(m => m.status === 'active').length

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-bloom-800">My Team</h1>
          <p className="text-pink-400 text-sm mt-1">Manage and support your downline</p>
        </div>
        <button className="bloom-btn flex items-center gap-2">
          <UserPlus size={16} />
          Invite Member
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total Members', value: mockTeam.length, icon: Users },
          { label: 'Active', value: active, icon: TrendingUp },
          { label: 'Team Sales', value: `R${totalSales.toLocaleString()}`, icon: TrendingUp },
        ].map((s, i) => (
          <div key={i} className="bloom-card text-center">
            <p className="text-2xl font-display font-bold text-bloom-700">{s.value}</p>
            <p className="text-xs text-pink-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {['all', 'active', 'inactive'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === f ? 'bg-bloom-600 text-white' : 'bg-white text-bloom-600 border border-pink-200'}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Team list */}
      <div className="space-y-3">
        {filtered.map(member => (
          <div key={member.id} className="bloom-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-bloom-100 flex items-center justify-center flex-shrink-0">
              <span className="text-bloom-700 font-semibold text-sm">{member.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-medium text-bloom-800">{member.name}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${rankColors[member.rank] || 'bg-pink-100 text-pink-600'}`}>
                  {member.rank}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${member.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                  {member.status}
                </span>
              </div>
              <p className="text-xs text-pink-400 mt-1">Joined {member.joined} · {member.recruits} recruits</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="font-semibold text-bloom-700">R{member.sales.toLocaleString()}</p>
              <p className="text-xs text-pink-400">sales</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
