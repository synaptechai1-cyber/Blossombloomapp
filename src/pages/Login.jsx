import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'
import { Flower2 } from 'lucide-react'

export default function Login() {
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
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex" style={{background: 'linear-gradient(135deg, #fff0f6 0%, #fce7f3 50%, #fbcfe8 100%)'}}>
      {/* Left decorative panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center p-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-bloom-400" style={{
              width: `${80 + i * 40}px`, height: `${80 + i * 40}px`,
              top: `${10 + i * 12}%`, left: `${5 + i * 8}%`, opacity: 0.3
            }} />
          ))}
        </div>
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-bloom-600 flex items-center justify-center shadow-lg">
              <Flower2 className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-6xl font-display font-bold text-bloom-800 mb-4">Bloom</h1>
          <p className="text-xl text-bloom-600 font-light">Partner Portal</p>
          <div className="mt-12 space-y-4 text-left max-w-xs">
            {['Track your sales & team growth', 'Access training & resources', 'Create stunning content with AI', 'Earn rewards & recognition'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-bloom-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-bloom-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-8 justify-center">
            <div className="w-12 h-12 rounded-xl bg-bloom-600 flex items-center justify-center">
              <Flower2 className="text-white" size={24} />
            </div>
            <h1 className="text-3xl font-display font-bold text-bloom-800">Bloom</h1>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10 border border-pink-100">
            <h2 className="text-3xl font-display font-bold text-bloom-800 mb-2">Welcome back</h2>
            <p className="text-sm text-pink-400 mb-8">Sign in to your partner account</p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-medium text-bloom-700 mb-2 uppercase tracking-wide">Email</label>
                <input type="email" className="bloom-input" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div>
                <label className="block text-xs font-medium text-bloom-700 mb-2 uppercase tracking-wide">Password</label>
                <input type="password" className="bloom-input" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
              </div>
              <button type="submit" disabled={loading} className="bloom-btn w-full py-3 text-base mt-2 disabled:opacity-60">
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <p className="text-center text-sm text-pink-400 mt-6">
              Don't have an account?{' '}
              <Link to="/signup" className="text-bloom-600 font-medium hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
