import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Exams from './pages/Exams'
import GuessPapers from './pages/GuessPapers'
import PracticeTests from './pages/PracticeTests'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import CancellationRefunds from './components/CancellationRefunds'
import TermsConditions from './components/TermsConditions'
import ShippingPolicy from './components/ShippingPolicy'
import PrivacyPolicy from './components/PrivacyPolicy'
import ContactUs from './components/ContactUs'

function App() {
  const [showToast, setShowToast] = useState('')
  const [email, setEmail] = useState('')
  const [signedInEmail, setSignedInEmail] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const storedEmail = localStorage.getItem('gm_email') || ''
    setSignedInEmail(storedEmail)
  }, [])

  useEffect(() => {
    if (!showToast) return
    const t = setTimeout(() => setShowToast(''), 2500)
    return () => clearTimeout(t)
  }, [showToast])

  const handleSignIn = (e) => {
    e.preventDefault()
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setShowToast('Enter a valid email to continue')
      return
    }
    localStorage.setItem('gm_email', email)
    setSignedInEmail(email)
    setEmail('')
    setShowToast('Signed in')
  }

  const handleSignOut = () => {
    localStorage.removeItem('gm_email')
    setSignedInEmail('')
    setShowToast('Signed out')
  }

  const navigateToPage = (path) => {
    navigate(path)
    setMenuOpen(false)
  }


  return (
    <div className="text-slate-900 bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateToPage('/')}>
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white grid place-items-center font-bold">GM</span>
            <div className="leading-tight">
              <strong className="block">Guess Master</strong>
              <span className="text-xs text-slate-600">Smarter Prep, Smarter Success</span>
            </div>
          </div>
          <button className="md:hidden px-3 py-2 rounded-lg border" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
          <nav className="hidden md:flex items-center gap-3">
            <button className={`px-2 py-2 ${location.pathname === '/' ? 'text-blue-600 font-semibold' : ''}`} onClick={() => navigateToPage('/')}>Home</button>
            <button className={`px-2 py-2 ${location.pathname === '/Exams' ? 'text-blue-600 font-semibold' : ''}`} onClick={() => navigateToPage('/Exams')}>Exams</button>
            <button className={`px-2 py-2 ${location.pathname === '/GuessPapers' ? 'text-blue-600 font-semibold' : ''}`} onClick={() => navigateToPage('/GuessPapers')}>Guess Papers</button>
            <button className={`px-2 py-2 ${location.pathname === '/PracticeTests' ? 'text-blue-600 font-semibold' : ''}`} onClick={() => navigateToPage('/PracticeTests')}>Practice Tests</button>
            <button className={`px-2 py-2 ${location.pathname === '/Features' ? 'text-blue-600 font-semibold' : ''}`} onClick={() => navigateToPage('/Features')}>Features</button>
            <button className={`px-2 py-2 ${location.pathname === '/Pricing' ? 'text-blue-600 font-semibold' : ''}`} onClick={() => navigateToPage('/Pricing')}>Pricing</button>
            <button className={`px-2 py-2 ${location.pathname === '/About' ? 'text-blue-600 font-semibold' : ''}`} onClick={() => navigateToPage('/About')}>About</button>
            <button className={`px-2 py-2 ${location.pathname === '/Contact' ? 'text-blue-600 font-semibold' : ''}`} onClick={() => navigateToPage('/Contact')}>Contact</button>
            {signedInEmail ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">{signedInEmail}</span>
                <button className="px-3 py-2 rounded-lg border" onClick={handleSignOut}>Sign out</button>
              </div>
            ) : (
              <button className="px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold" onClick={() => navigateToPage('/')}>Login / Register</button>
            )}
          </nav>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 px-4 py-3 grid gap-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'Exams', path: '/Exams' },
              { label: 'Guess Papers', path: '/GuessPapers' },
              { label: 'Practice Tests', path: '/PracticeTests' },
              { label: 'Features', path: '/Features' },
              { label: 'Pricing', path: '/Pricing' },
              { label: 'About', path: '/About' },
              { label: 'Contact', path: '/Contact' }
            ].map((item) => (
              <button key={item.label} className={`text-left px-2 py-2 rounded hover:bg-slate-50 ${location.pathname === item.path ? 'text-blue-600 font-semibold' : ''}`} onClick={() => navigateToPage(item.path)}>{item.label}</button>
            ))}
            {signedInEmail ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">{signedInEmail}</span>
                <button className="px-3 py-2 rounded-lg border" onClick={handleSignOut}>Sign out</button>
              </div>
            ) : (
              <button className="px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold" onClick={() => navigateToPage('/')}>Login / Register</button>
            )}
          </div>
        )}
      </header>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Exams" element={<Exams />} />
        <Route path="/GuessPapers" element={<GuessPapers />} />
        <Route path="/PracticeTests" element={<PracticeTests />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<TermsConditions />} />
        <Route path="/Cancellation" element={<CancellationRefunds />} />
        <Route path="/Shipping" element={<ShippingPolicy />} />
      </Routes>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-10 px-4 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white grid place-items-center font-bold">GM</span>
              <strong>Guess Master</strong>
            </div>
            <p className="mt-2 text-slate-600">Smart preparation for government exams.</p>
          </div>
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <div className="grid">
              {[
                { label: 'Home', path: '/' },
                { label: 'Exams', path: '/Exams' },
                { label: 'Guess Papers', path: '/GuessPapers' },
                { label: 'Practice Tests', path: '/PracticeTests' },
                { label: 'Features', path: '/Features' },
                { label: 'Pricing', path: '/Pricing' },
                { label: 'About', path: '/About' },
                { label: 'Contact', path: '/Contact' }
              ].map((item)=>(
                <button key={item.label} className="text-left py-1" onClick={()=>navigateToPage(item.path)}>{item.label}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Legal</div>
            <div className="grid">
              <button className="text-left py-1" onClick={() => navigateToPage('/Privacy')}>Privacy Policy</button>
              <button className="text-left py-1" onClick={() => navigateToPage('/Terms')}>Terms & Conditions</button>
              <button className="text-left py-1" onClick={() => navigateToPage('/Cancellation')}>Cancellation & Refunds</button>
              <button className="text-left py-1" onClick={() => navigateToPage('/Shipping')}>Shipping Policy</button>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Social</div>
            <div className="flex gap-3 text-slate-600">
              <button onClick={()=>alert('Instagram')}>IG</button>
              <button onClick={()=>alert('Twitter')}>X</button>
              <button onClick={()=>alert('YouTube')}>YT</button>
            </div>
          </div>
        </div>
        <p className="text-center text-slate-600 mt-6">© {new Date().getFullYear()} GuessMasters | Powered by AI</p>
      </footer>

      {/* Toast */}
      {showToast && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-6 bg-slate-900 text-white px-4 py-2 rounded-full" role="status">
          {showToast}
        </div>
      )}
    </div>
  )
}

export default App
