import { mockTeam, mockStats } from '../lib/mockData'
import { Shield, Users, TrendingUp, AlertCircle } from 'lucide-react'

export default function Admin() {
  const inactive = mockTeam.filter(m => m.status === 'inactive')
  const totalSales = mockTeam.reduce((s, m) => s + m.sales, 0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display font-bold text-bloom-800">Admin</h1>
        <p className="text-pink-400 text-sm mt-1">Overview and management tools</p>
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Partners', value: mockTeam.length, icon: Users, color: 'text-bloom-600' },
          { label: 'Active Partners', value: mockTeam.filter(m => m.status === 'active').length, icon: TrendingUp, color: 'text-green-500' },
          { label: 'Inactive', value: inactive.length, icon: AlertCircle, color: 'text-orange-400' },
          { label: 'Total Team Sales', value: `R${totalSales.toLocaleString()}`, icon: TrendingUp, color: 'text-fuchsia-500' },
        ].map((s, i) => (
          <div key={i} className="bloom-card">
            <s.icon size={20} className={`${s.color} mb-3`} />
            <p className="text-2xl font-display font-bold text-bloom-800">{s.value}</p>
            <p className="text-xs text-pink-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* All partners table */}
      <div className="bloom-card overflow-hidden p-0">
        <div className="px-6 py-4 border-b border-pink-100">
          <h2 className="text-lg font-display font-semibold text-bloom-800">All Partners</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-pink-50">
                <th className="text-left px-6 py-3 text-xs font-semibold text-bloom-600 uppercase tracking-wide">Partner</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-bloom-600 uppercase tracking-wide">Rank</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-bloom-600 uppercase tracking-wide">Sales</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-bloom-600 uppercase tracking-wide">Recruits</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-bloom-600 uppercase tracking-wide">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-50">
              {mockTeam.map(member => (
                <tr key={member.id} className="hover:bg-pink-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-bloom-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-bloom-700 text-xs font-semibold">{member.avatar}</span>
                      </div>
                      <span className="font-medium text-bloom-800">{member.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-bloom-600">{member.rank}</td>
                  <td className="px-6 py-4 font-medium text-bloom-700">R{member.sales.toLocaleString()}</td>
                  <td className="px-6 py-4 text-pink-500">{member.recruits}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${member.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inactive alert */}
      {inactive.length > 0 && (
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-orange-700 text-sm">Inactive Partners Need Attention</p>
              <p className="text-xs text-orange-500 mt-1">
                {inactive.map(m => m.name).join(', ')} {inactive.length === 1 ? 'has' : 'have'} been inactive. Consider reaching out to re-engage them.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
