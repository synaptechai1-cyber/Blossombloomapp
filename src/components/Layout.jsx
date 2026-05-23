import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'
import { Flower2, LayoutDashboard, Users, BookOpen, Gift, Shield, User, Sparkles, LogOut, Menu, X } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/team', icon: Users, label: 'My Team' },
  { to: '/training', icon: BookOpen, label: 'Training' },
  { to: '/rewards', icon: Gift, label: 'Rewards' },
  { to: '/studio', icon: Sparkles, label: 'Bloom Studio' },
  { to: '/admin', icon: Shield, label: 'Admin' },
  { to: '/profile', icon: User, label: 'Profile' },
]

export default function Layout() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 mb-2">
        <div className="w-10 h-10 rounded-xl bg-bloom-600 flex items-center justify-center shadow-md">
          <Flower2 className="text-white" size={20} />
        </div>
        <span className="text-2xl font-display font-bold text-bloom-800">Bloom</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-1">
        {nav.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-pink-100 mt-4">
        <div className="flex items-center gap-3 mb-3 px-2">
          <div className="w-9 h-9 rounded-full bg-bloom-200 flex items-center justify-center flex-shrink-0">
            <span className="text-bloom-700 text-sm font-semibold">
              {user?.email?.[0]?.toUpperCase() || 'U'}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-bloom-800 truncate">{user?.email}</p>
            <p className="text-xs text-pink-400">Partner</p>
          </div>
        </div>
        <button onClick={handleSignOut} className="flex items-center gap-2 text-xs text-pink-400 hover:text-bloom-600 px-2 py-1 w-full transition-colors">
          <LogOut size={14} />
          Sign out
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-blush">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 flex-col bg-white border-r border-pink-100 fixed h-full shadow-sm z-10">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-64 bg-white h-full shadow-xl flex flex-col">
            <SidebarContent />
          </div>
          <div className="flex-1 bg-black bg-opacity-30" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 lg:ml-64">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between px-4 py-4 bg-white border-b border-pink-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-bloom-600 flex items-center justify-center">
              <Flower2 className="text-white" size={16} />
            </div>
            <span className="text-xl font-display font-bold text-bloom-800">Bloom</span>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-bloom-600">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="p-6 lg:p-8 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
