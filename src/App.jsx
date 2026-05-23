import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './lib/AuthContext'
import Layout from './components/Layout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import Training from './pages/Training'
import Rewards from './pages/Rewards'
import Admin from './pages/Admin'
import Profile from './pages/Profile'
import Studio from './pages/Studio'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-blush">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-4 border-bloom-200 border-t-bloom-600 animate-spin mx-auto mb-4" />
        <p className="text-bloom-500 text-sm">Loading...</p>
      </div>
    </div>
  )
  return user ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="team" element={<Team />} />
            <Route path="training" element={<Training />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="studio" element={<Studio />} />
            <Route path="admin" element={<Admin />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
