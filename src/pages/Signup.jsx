import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'
import { Flower2 } from 'lucide-react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (password !== confirm) return setError('Passwords do not match')
    setLoading(true)
    const { error } = await signUp(email, password)
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  if (success) return (
    <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #fff0f6 0%, #fce7f3 50%, #fbcfe8 100%)'}}>
      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center border border-pink-100">
        <div className="text-5xl mb-4">🌸</div>
        <h2 className="text-3xl font-display font-bold text-bloom-800 mb-2">Welcome to Bloom!</h2>
        <p className="text-sm text-pink-400 mb-6">Check your email to confirm your account, then sign in.</p>
        <Link to="/login" className="bloom-btn inline-block">Go to Login</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex items-center justify-center p-8" style={{background: 'linear-gradient(135deg, #fff0f6 0%, #fce7f3 50%, #fbcfe8 100%)'}}>
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="w-12 h-12 rounded-xl bg-bloom-600 flex items-center justify-center">
            <Flower2 className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-display font-bold text-bloom-800">Bloom</h1>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-pink-100">
          <h2 className="text-3xl font-display font-bold text-bloom-800 mb-2">Join Bloom</h2>
          <p className="text-sm text-pink-400 mb-8">Create your partner account</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-6">{error}</div>
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
            <div>
              <label className="block text-xs font-medium text-bloom-700 mb-2 uppercase tracking-wide">Confirm Password</label>
              <input type="password" className="bloom-input" placeholder="••••••••" value={confirm} onChange={e => setConfirm(e.target.value)} required />
            </div>
            <button type="submit" disabled={loading} className="bloom-btn w-full py-3 text-base mt-2 disabled:opacity-60">
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-pink-400 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-bloom-600 font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
