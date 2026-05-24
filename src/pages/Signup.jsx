import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await signUp(email, password)
    if (error) { setError(error.message); setLoading(false) }
    else setSuccess(true)
  }

  if (success) return (
    <div className="min-h-screen bg-blush flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-6xl mb-4">🌸</div>
        <h2 className="text-4xl font-display font-bold text-mink mb-2">Welcome, Bloomer!</h2>
        <p className="text-gray-400 text-sm mb-8">Check your email to confirm your account.</p>
        <Link to="/login"><button className="btn-primary max-w-xs mx-auto">Go to Sign In</button></Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-blush flex flex-col px-6 pt-12 pb-8">
      <Link to="/login" className="text-sm text-gray-500 mb-8 flex items-center gap-1">← Back</Link>
      <h1 className="text-4xl font-display font-bold text-mink mb-1">Become a Bloomer</h1>
      <p className="text-sm text-gray-400 mb-8">Start your transformation in 30 seconds.</p>

      {error && <div className="bg-red-50 text-red-500 text-sm px-4 py-3 rounded-2xl mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4 flex-1">
        <div>
          <label className="label mb-2 block">Your name</label>
          <input className="input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label className="label mb-2 block">Email</label>
          <input className="input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="label mb-2 block">Password</label>
          <input className="input" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={loading} className="btn-primary mt-4">
          {loading ? 'Creating account...' : 'Plant my seed 🌸'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-400 mt-6">
        Already a Bloomer? <Link to="/login" className="text-bloom-600 font-semibold">Sign in</Link>
      </p>
    </div>
  )
}
