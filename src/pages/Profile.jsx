import { useState } from 'react'
import { useAuth } from '../lib/AuthContext'
import { mockStats } from '../lib/mockData'
import { User, Mail, Save } from 'lucide-react'

export default function Profile() {
  const { user } = useAuth()
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    bio: '',
    location: '',
  })

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h1 className="text-4xl font-display font-bold text-bloom-800">Profile</h1>
        <p className="text-pink-400 text-sm mt-1">Manage your account details</p>
      </div>

      {/* Avatar section */}
      <div className="bloom-card flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bloom-300 to-bloom-600 flex items-center justify-center shadow-lg flex-shrink-0">
          <span className="text-white text-2xl font-display font-bold">
            {user?.email?.[0]?.toUpperCase() || 'U'}
          </span>
        </div>
        <div>
          <h2 className="text-xl font-display font-semibold text-bloom-800">{user?.email}</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-bloom-100 text-bloom-600 px-2 py-0.5 rounded-full font-medium">{mockStats.rank} Partner</span>
            <span className="text-xs text-pink-400">{mockStats.points} pts</span>
          </div>
        </div>
      </div>

      {/* Account info */}
      <div className="bloom-card">
        <h3 className="text-lg font-display font-semibold text-bloom-800 mb-5">Account Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl">
            <Mail size={16} className="text-bloom-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-pink-400">Email</p>
              <p className="text-sm font-medium text-bloom-800">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl">
            <User size={16} className="text-bloom-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-pink-400">Member Since</p>
              <p className="text-sm font-medium text-bloom-800">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long' }) : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit form */}
      <div className="bloom-card">
        <h3 className="text-lg font-display font-semibold text-bloom-800 mb-5">Personal Details</h3>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-bloom-700 mb-2 uppercase tracking-wide">Full Name</label>
              <input className="bloom-input" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-medium text-bloom-700 mb-2 uppercase tracking-wide">Phone</label>
              <input className="bloom-input" placeholder="+27 ..." value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-bloom-700 mb-2 uppercase tracking-wide">Location</label>
            <input className="bloom-input" placeholder="City, Country" value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
          </div>
          <div>
            <label className="block text-xs font-medium text-bloom-700 mb-2 uppercase tracking-wide">Bio</label>
            <textarea className="bloom-input resize-none h-24" placeholder="Tell your team about yourself..." value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} />
          </div>
          <button type="submit" className={`flex items-center gap-2 ${saved ? 'bg-green-500 hover:bg-green-600' : ''} bloom-btn`}>
            <Save size={16} />
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  )
}
