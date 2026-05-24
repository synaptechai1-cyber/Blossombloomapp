import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'

const slides = [
  { icon: '👥', title: 'Grow your garden', desc: 'Invite friends, build a team, and rise together. We bloom better together.' },
  { icon: '✨', title: 'Earn while you transform', desc: 'Track every commission, every customer, every win. Your growth is finally something you can hold.' },
  { icon: '🌿', title: 'Products that work', desc: 'Science-backed wellness products trusted by thousands of South Africans.' },
]

export default function Login() {
  const [slide, setSlide] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await signIn(email, password)
    if (error) { setError(error.message); setLoading(false) }
    else navigate('/dashboard')
  }

  if (showForm) return (
    <div className="min-h-screen bg-blush flex flex-col px-6 pt-12 pb-8">
      <button onClick={() => setShowForm(false)} className="text-sm text-gray-500 mb-8 flex items-center gap-1">
        ← Back
      </button>
      <h1 className="text-4xl font-display font-bold text-mink mb-1">Sign In</h1>
      <p className="text-sm text-gray-400 mb-8">Welcome back, Bloomer</p>

      {error && <div className="bg-red-50 text-red-500 text-sm px-4 py-3 rounded-2xl mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4 flex-1">
        <div>
          <label className="label mb-2 block">Email</label>
          <input className="input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="label mb-2 block">Password</label>
          <input className="input" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading} className="btn-primary mt-4">
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      <p className="text-center text-sm text-gray-400 mt-6">
        New here? <Link to="/signup" className="text-bloom-600 font-semibold">Become a Bloomer</Link>
      </p>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col" style={{background: 'linear-gradient(160deg, #fde8f0 0%, #fdf0e0 100%)'}}>
      <div className="flex items-center justify-between px-6 pt-12 pb-4">
        <div>
          <span className="text-xl font-display font-bold text-mink">Blossom </span>
          <span className="text-xl font-display font-bold text-bloom-500">Bloom</span>
        </div>
        <button onClick={() => setShowForm(true)} className="text-sm font-semibold text-mink">Sign in</button>
      </div>

      {/* Hero image area */}
      <div className="px-5 mt-2">
        <div className="rounded-3xl overflow-hidden relative h-72" style={{background: 'linear-gradient(135deg, #f9c4d4 0%, #f5d5b0 100%)'}}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-8">
              <p className="label text-white/70 mb-3">PARTNER HUB</p>
              <h2 className="text-4xl font-display font-bold leading-tight">Bloom into the woman you were always meant to be.</h2>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>

      {/* Slides */}
      <div className="px-6 mt-8 flex-1">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl" style={{background: 'linear-gradient(135deg, #e8637a, #d4486a)'}}>
            <span className="text-white text-base">
              {slide === 0 ? '👥' : slide === 1 ? '✨' : '🌿'}
            </span>
          </div>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all ${i === slide ? 'w-6 bg-bloom-500' : 'w-1.5 bg-bloom-200'}`} />
            ))}
          </div>
        </div>
        <h2 className="text-3xl font-display font-bold text-mink mb-2">{slides[slide].title}</h2>
        <p className="text-gray-500 text-sm leading-relaxed">{slides[slide].desc}</p>
      </div>

      <div className="px-6 pb-10 space-y-3 mt-8">
        <Link to="/signup">
          <button className="btn-primary" onClick={() => setSlide((slide + 1) % slides.length)}>
            Become a Bloomer →
          </button>
        </Link>
        <button onClick={() => setShowForm(true)} className="btn-secondary">
          I already have an account
        </button>
      </div>
    </div>
  )
}
