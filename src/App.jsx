import { useEffect, useMemo, useState } from 'react'
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
  const ALL_PAPERS = useMemo(
    () => [
      { id: 'paper-1', title: 'Predictive Mock Paper 1', exam: 'SSC' },
      { id: 'paper-2', title: 'Predictive Mock Paper 2', exam: 'SSC' },
      { id: 'paper-3', title: 'Predictive Mock Paper 3', exam: 'Bank POO' },
      { id: 'paper-4', title: 'Predictive Mock Paper 4', exam: 'UPSC' },
      { id: 'paper-5', title: 'Predictive Mock Paper 5', exam: 'Railways' },
    ],
    []
  )

  const [unlockedPaperIds, setUnlockedPaperIds] = useState([])
  const [hasPaid, setHasPaid] = useState(false)
  const [showToast, setShowToast] = useState('')
  const [email, setEmail] = useState('')
  const [signedInEmail, setSignedInEmail] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const saved = localStorage.getItem('gm_unlocked')
    const paidFlag = localStorage.getItem('gm_hasPaid') === 'true'
    const baseUnlocked = new Set(['paper-1'])
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        parsed.forEach((id) => baseUnlocked.add(id))
      } catch {}
    }
    setUnlockedPaperIds(Array.from(baseUnlocked))
    setHasPaid(paidFlag)
    const storedEmail = localStorage.getItem('gm_email') || ''
    setSignedInEmail(storedEmail)
  }, [])

  useEffect(() => {
    localStorage.setItem('gm_unlocked', JSON.stringify(unlockedPaperIds))
  }, [unlockedPaperIds])

  useEffect(() => {
    localStorage.setItem('gm_hasPaid', hasPaid ? 'true' : 'false')
  }, [hasPaid])

  useEffect(() => {
    if (!showToast) return
    const t = setTimeout(() => setShowToast(''), 2500)
    return () => clearTimeout(t)
  }, [showToast])

  const isUnlocked = (paperId) => unlockedPaperIds.includes(paperId)


  const navigateToPage = (page) => {
    setCurrentPage(page)
    setMenuOpen(false)
  }


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

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'exams':
        return <Exams />
      case 'guess-papers':
        return <GuessPapers />
      case 'practice-tests':
        return <PracticeTests />
      case 'features':
        return <Features />
      case 'pricing':
        return <Pricing />
      case 'about':
        return <About />
      case 'cancellation-refunds':
        return <CancellationRefunds />
      case 'terms-conditions':
        return <TermsConditions />
      case 'shipping':
        return <ShippingPolicy />
      case 'privacy':
        return <PrivacyPolicy />
      case 'contact-us':
        return <ContactUs />
      default:
        return <Home />
    }
  }


  return (
    <div className="text-slate-900 bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateToPage('home')}>
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white grid place-items-center font-bold">GM</span>
            <div className="leading-tight">
              <strong className="block">Guess Master</strong>
              <span className="text-xs text-slate-600">Smarter Prep, Smarter Success</span>
            </div>
          </div>
          <button className="md:hidden px-3 py-2 rounded-lg border" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
          <nav className="hidden md:flex items-center gap-3">
            <button className="px-2 py-2" onClick={() => navigateToPage('home')}>Home</button>
            <button className="px-2 py-2" onClick={() => navigateToPage('exams')}>Exams</button>
            <button className="px-2 py-2" onClick={() => navigateToPage('guess-papers')}>Guess Papers</button>
            <button className="px-2 py-2" onClick={() => navigateToPage('practice-tests')}>Practice Tests</button>
            <button className="px-2 py-2" onClick={() => navigateToPage('features')}>Features</button>
            <button className="px-2 py-2" onClick={() => navigateToPage('pricing')}>Pricing</button>
            <button className="px-2 py-2" onClick={() => navigateToPage('about')}>About</button>
            <button className="px-2 py-2" onClick={() => navigateToPage('contact-us')}>Contact</button>
            {signedInEmail ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">{signedInEmail}</span>
                <button className="px-3 py-2 rounded-lg border" onClick={handleSignOut}>Sign out</button>
              </div>
            ) : (
              <a href="#auth" onClick={(e)=>{e.preventDefault(); navigateToPage('home'); scrollToSection('auth')}} className="px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold">Login / Register</a>
            )}
          </nav>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 px-4 py-3 grid gap-2">
            {[
              { label: 'Home', page: 'home' },
              { label: 'Exams', page: 'exams' },
              { label: 'Guess Papers', page: 'guess-papers' },
              { label: 'Practice Tests', page: 'practice-tests' },
              { label: 'Features', page: 'features' },
              { label: 'Pricing', page: 'pricing' },
              { label: 'About', page: 'about' },
              { label: 'Contact', page: 'contact-us' }
            ].map((item) => (
              <button key={item.label} className="text-left px-2 py-2 rounded hover:bg-slate-50" onClick={() => { setMenuOpen(false); navigateToPage(item.page) }}>{item.label}</button>
            ))}
            {signedInEmail ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">{signedInEmail}</span>
                <button className="px-3 py-2 rounded-lg border" onClick={handleSignOut}>Sign out</button>
              </div>
            ) : (
              <button className="px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold" onClick={() => { setMenuOpen(false); navigateToPage('home'); scrollToSection('auth') }}>Login / Register</button>
            )}
          </div>
        )}
      </header>

      {/* Main Content */}
      {renderCurrentPage()}

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
                { label: 'Home', page: 'home' },
                { label: 'Exams', page: 'exams' },
                { label: 'Guess Papers', page: 'guess-papers' },
                { label: 'Practice Tests', page: 'practice-tests' },
                { label: 'Features', page: 'features' },
                { label: 'Pricing', page: 'pricing' },
                { label: 'About', page: 'about' },
                { label: 'Contact', page: 'contact-us' }
              ].map((item)=>(
                <button key={item.label} className="text-left py-1" onClick={()=>navigateToPage(item.page)}>{item.label}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Legal</div>
            <div className="grid">
              <button className="text-left py-1" onClick={() => navigateToPage('privacy')}>Privacy Policy</button>
              <button className="text-left py-1" onClick={() => navigateToPage('terms-conditions')}>Terms & Conditions</button>
              <button className="text-left py-1" onClick={() => navigateToPage('cancellation-refunds')}>Cancellation & Refunds</button>
              <button className="text-left py-1" onClick={() => navigateToPage('shipping')}>Shipping Policy</button>
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
