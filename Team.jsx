import { useState } from 'react'
import { mockTeam, mockStats, RANKS } from '../lib/mockData'
import { useAuth } from '../lib/AuthContext'
import { Copy, Check, UserPlus } from 'lucide-react'

export default function Team() {
  const { user } = useAuth()
  const [copied, setCopied] = useState(false)
  const inviteCode = 'BLOOM' + (user?.id?.slice(0,6) || 'F5310A').toUpperCase()
  const inviteLink = `https://blossombloomapp.pages.dev/signup?ref=${inviteCode}`
  const active = mockTeam.filter(m => m.status === 'active').length
  const totalSales = mockTeam.reduce((s, m) => s + m.sales, 0)

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getRankColor = (rank) => RANKS.find(r => r.name === rank)?.color || '#e8637a'
  const getRankEmoji = (rank) => RANKS.find(r => r.name === rank)?.emoji || '🌸'

  return (
    <div className="page-container fade-up">
      <p className="label mb-1">YOUR GARDEN</p>
      <h1 className="text-4xl font-display font-bold text-mink mb-6">My Team</h1>

      {/* Invite card */}
      <div className="rounded-3xl p-5 mb-5" style={{background: 'linear-gradient(135deg, #fde8f0 0%, #fdf0e0 100%)'}}>
        <p className="label mb-2">YOUR INVITE CODE</p>
        <p className="text-3xl font-display font-bold text-mink mb-4">{inviteCode}</p>
        <div className="flex gap-3">
          <button onClick={handleCopy} className="flex items-center gap-2 bg-mink text-white text-sm font-semibold px-4 py-2.5 rounded-2xl active:scale-95 transition-all">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Copy link'}
          </button>
          <button onClick={() => window.open(`whatsapp://send?text=Join my Blossom Bloom team! Use my link: ${inviteLink}`)} className="flex items-center gap-2 bg-white text-mink text-sm font-semibold px-4 py-2.5 rounded-2xl border border-pink-100 active:scale-95 transition-all">
            💬 WhatsApp
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: 'TEAM', value: mockTeam.length },
          { label: 'ACTIVE', value: active },
          { label: 'VOLUME', value: `R${(totalSales/1000).toFixed(1)}k` },
        ].map((s, i) => (
          <div key={i} className="card text-center">
            <p className="text-2xl font-display font-bold text-mink">{s.value}</p>
            <p className="label mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Team list */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-xl font-display font-semibold text-mink">Your Bloomers</p>
        <button className="flex items-center gap-1 text-sm text-bloom-500 font-semibold">
          <UserPlus size={16} /> Invite
        </button>
      </div>

      <div className="space-y-3">
        {mockTeam.map(member => (
          <div key={member.id} className="card flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{background: 'linear-gradient(135deg, #f0c4b0, #e8a090)'}}>
                <span className="text-mink">{member.initials}</span>
              </div>
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${member.status === 'active' ? 'bg-green-400' : 'bg-gray-300'}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-mink text-sm">{member.name}</p>
              <p className="text-xs text-gray-400">{member.rank} · Distributor</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="font-bold text-mink text-sm">R{member.sales.toLocaleString()}</p>
              <p className="text-xs text-gray-400">↗ {member.daysActive}d</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
