import { NavLink, Outlet } from 'react-router-dom'
import { Home, Users, ShoppingBag, Trophy, User } from 'lucide-react'

const nav = [
  { to: '/dashboard', icon: Home, label: 'HOME' },
  { to: '/team', icon: Users, label: 'TEAM' },
  { to: '/shop', icon: ShoppingBag, label: 'SHOP' },
  { to: '/rewards', icon: Trophy, label: 'REWARDS' },
  { to: '/profile', icon: User, label: 'ME' },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-blush">
      <main className="max-w-lg mx-auto">
        <Outlet />
      </main>
      <nav className="bottom-nav max-w-lg mx-auto left-0 right-0">
        {nav.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-3 py-1 rounded-2xl transition-all ${isActive ? 'text-bloom-600' : 'text-gray-400'}`
          }>
            {({ isActive }) => (
              <>
                <div className={`p-2 rounded-2xl transition-all ${isActive ? 'bg-bloom-100' : ''}`}>
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                </div>
                <span className="text-[10px] font-semibold tracking-wider">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
