import { useEffect, useMemo, useState } from 'react'
import { CancellationRefunds, TermsConditions, ShippingPolicy, PrivacyPolicy, ContactUs } from './components/PolicyPages'

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
  const [examsOpen, setExamsOpen] = useState(false)
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navigateToPage = (page) => {
    setCurrentPage(page)
    setMenuOpen(false)
    setExamsOpen(false)
  }

  const handleStartFree = () => {
    setShowToast('Your free paper is unlocked. Check My Papers.')
    scrollToSection('my-papers')
  }

  const handleUnlockAll = () => {
    setHasPaid(true)
    const remainingIds = ALL_PAPERS.map((p) => p.id)
    setUnlockedPaperIds(Array.from(new Set([...unlockedPaperIds, ...remainingIds])))
    setShowToast('Payment successful. All papers unlocked!')
    scrollToSection('my-papers')
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
        return renderHomePage()
    }
  }

  const renderHomePage = () => (
    <div className="text-slate-900 bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white grid place-items-center font-bold">GM</span>
            <div className="leading-tight">
              <strong className="block">Guess Master</strong>
              <span className="text-xs text-slate-600">Smarter Prep, Smarter Success</span>
            </div>
          </div>
          <button className="md:hidden px-3 py-2 rounded-lg border" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
          <nav className="hidden md:flex items-center gap-3">
            <button className="px-2 py-2" onClick={() => scrollToSection('hero')}>Home</button>
            <div className="relative">
              <button className="px-2 py-2 inline-flex items-center gap-1" onClick={() => setExamsOpen(!examsOpen)}>Exams <span>▾</span></button>
              {examsOpen && (
                <div className="absolute mt-2 bg-white border border-slate-200 rounded-lg shadow p-2 grid grid-cols-2 gap-1">
                  {['SSC','Banking','UPSC','Railways','State Exams','Teaching'].map((e) => (
                    <button key={e} className="px-3 py-2 rounded hover:bg-slate-50 text-left" onClick={() => { setExamsOpen(false); scrollToSection('popular-exams') }}>{e}</button>
                  ))}
                </div>
              )}
            </div>
            <button className="px-2 py-2" onClick={() => scrollToSection('guess-papers')}>Guess Papers</button>
            <button className="px-2 py-2" onClick={() => scrollToSection('practice-tests')}>Practice Tests</button>
            <button className="px-2 py-2" onClick={() => scrollToSection('features')}>Features</button>
            <button className="px-2 py-2" onClick={() => scrollToSection('pricing')}>Pricing</button>
            <button className="px-2 py-2" onClick={() => scrollToSection('about')}>About</button>
            <button className="px-2 py-2" onClick={() => scrollToSection('contact')}>Contact</button>
            {signedInEmail ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">{signedInEmail}</span>
                <button className="px-3 py-2 rounded-lg border" onClick={handleSignOut}>Sign out</button>
              </div>
            ) : (
              <a href="#auth" onClick={(e)=>{e.preventDefault(); scrollToSection('auth')}} className="px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold">Login / Register</a>
            )}
          </nav>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 px-4 py-3 grid gap-2">
            {['Home','Guess Papers','Practice Tests','Features','Pricing','About','Contact'].map((label) => (
              <button key={label} className="text-left px-2 py-2 rounded hover:bg-slate-50" onClick={() => { setMenuOpen(false); scrollToSection(label.toLowerCase().replace(' ','-')) }}>{label}</button>
            ))}
            {signedInEmail ? (
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-600">{signedInEmail}</span>
                <button className="px-3 py-2 rounded-lg border" onClick={handleSignOut}>Sign out</button>
              </div>
            ) : (
              <button className="px-3 py-2 rounded-lg bg-blue-600 text-white font-semibold" onClick={() => { setMenuOpen(false); scrollToSection('auth') }}>Login / Register</button>
            )}
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="text-center bg-gradient-to-b from-sky-50 to-white px-4 pt-20 pb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Smarter Prep, Smarter Success</h1>
          <p className="max-w-3xl mx-auto mt-3 text-slate-600">AI-powered platform generating guess papers for government exams, helping students focus on what matters most.</p>
          <div className="flex justify-center gap-3 mt-5">
            <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold" onClick={() => scrollToSection('guess-papers')}>Get Guess Paper →</button>
            <button className="px-5 py-3 rounded-xl border border-slate-300" onClick={() => scrollToSection('pricing')}>See Pricing</button>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-72 h-40 md:w-[420px] md:h-48 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-400 animate-pulse opacity-80"></div>
          </div>
        </section>

        {/* Why GuessMasters */}
        <section id="why" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6">Why GuessMasters?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold">AI prediction</h3>
              <p className="text-slate-600">Identify patterns and likely topics using past paper trends.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold">Time saving</h3>
              <p className="text-slate-600">Practice what matters most and skip the noise.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-4">
              <h3 className="font-semibold">Smart prep</h3>
              <p className="text-slate-600">Focused papers designed for efficient revision.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6">How it works</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-xl p-4">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white grid place-items-center font-bold mb-2">1</div>
              <h3 className="font-semibold">Analyze</h3>
              <p className="text-slate-600">Past papers studied to spot question trends and hot topics.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-4">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white grid place-items-center font-bold mb-2">2</div>
              <h3 className="font-semibold">Predict</h3>
              <p className="text-slate-600">Likely topics prioritized for upcoming exams.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-4">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white grid place-items-center font-bold mb-2">3</div>
              <h3 className="font-semibold">Generate</h3>
              <p className="text-slate-600">High-quality mock papers for focused practice.</p>
            </div>
          </div>
        </section>

        {/* Popular Exams */}
        <section id="popular-exams" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6">Popular Exams Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {['SSC','UPSC','IBPS','Railways','State','Teaching'].map((e) => (
              <div key={e} className="border border-slate-200 rounded-xl p-4 text-center">{e}</div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="grid grid-cols-[36px,1fr] gap-3 items-start border border-slate-200 rounded-xl p-4">
              <span className="text-xl">🎯</span>
              <div>
                <h3 className="font-semibold">Pattern‑led prediction</h3>
                <p className="text-slate-600">Leverages question trends to prioritize high‑probability topics.</p>
              </div>
            </li>
            <li className="grid grid-cols-[36px,1fr] gap-3 items-start border border-slate-200 rounded-xl p-4">
              <span className="text-xl">₹</span>
              <div>
                <h3 className="font-semibold">Affordable</h3>
                <p className="text-slate-600">First paper is free. Unlock the rest for a one‑time ₹9.</p>
              </div>
            </li>
            <li className="grid grid-cols-[36px,1fr] gap-3 items-start border border-slate-200 rounded-xl p-4">
              <span className="text-xl">⚡</span>
              <div>
                <h3 className="font-semibold">Instant access</h3>
                <p className="text-slate-600">Start practicing in seconds.</p>
              </div>
            </li>
            <li className="grid grid-cols-[36px,1fr] gap-3 items-start border border-slate-200 rounded-xl p-4">
              <span className="text-xl">🧭</span>
              <div>
                <h3 className="font-semibold">Simple experience</h3>
                <p className="text-slate-600">Clean, distraction‑free interface.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Guess Papers (Pricing + access) */}
        <section id="guess-papers" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6">Guess Papers</h2>
          <p className="text-slate-600 mb-4">First paper is free for everyone. Unlock remaining papers for ₹9.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {ALL_PAPERS.map((paper) => (
              <div key={paper.id} className={`border border-slate-200 rounded-xl p-4 ${isUnlocked(paper.id) ? '' : 'opacity-90'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{paper.title}</h3>
                  <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs">{paper.exam}</span>
                </div>
                {isUnlocked(paper.id) ? (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-emerald-600">Unlocked</span>
                    <button className="px-3 py-2 rounded-lg border border-slate-300" onClick={() => alert('Opening paper...')}>Open</button>
                  </div>
                ) : (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-slate-500">Locked</span>
                    <button className="px-3 py-2 rounded-lg bg-blue-600 text-white" onClick={handleUnlockAll}>Unlock for ₹9</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Practice Tests placeholder */}
        <section id="practice-tests" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-4">Practice Tests</h2>
          <div className="border border-dashed border-slate-300 rounded-xl p-5 bg-slate-50 text-slate-600">
            Online MCQs and timed quizzes coming soon.
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-4">What students say</h2>
          <div className="border border-dashed border-slate-300 rounded-xl p-5 bg-slate-50 text-slate-600">
            “Coming soon — success stories from students who practiced smarter with Guess Master.”
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-6">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-2xl p-5">
              <h3 className="font-semibold">Free</h3>
              <p className="text-2xl mt-1">₹0</p>
              <ul className="list-disc pl-5 mt-2 text-slate-700">
                <li>First paper unlocked</li>
                <li>Instant access</li>
                <li>No sign‑up required</li>
              </ul>
            </div>
            <div className="border border-blue-600 shadow-[0_6px_24px_rgba(37,99,235,0.1)] rounded-2xl p-5">
              <h3 className="font-semibold">Standard</h3>
              <p className="text-2xl mt-1">₹9 one‑time</p>
              <ul className="list-disc pl-5 mt-2 text-slate-700">
                <li>Unlock remaining papers</li>
                <li>Highest value</li>
                <li>Study efficiently</li>
              </ul>
              <button className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold disabled:bg-blue-300" onClick={handleUnlockAll} disabled={hasPaid}>
                {hasPaid ? 'All Unlocked' : 'Unlock All for ₹9'}
              </button>
            </div>
            <div className="border border-slate-200 rounded-2xl p-5">
              <h3 className="font-semibold">Premium</h3>
              <p className="text-2xl mt-1">Coming soon</p>
              <ul className="list-disc pl-5 mt-2 text-slate-700">
                <li>Advanced analytics</li>
                <li>Detailed solutions</li>
                <li>Priority support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Auth section */}
        <section id="auth" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-4">Login / Register</h2>
          {signedInEmail ? (
            <div className="flex items-center gap-3">
              <span className="text-slate-600">Signed in as {signedInEmail}</span>
              <button className="px-4 py-2 rounded-lg border" onClick={handleSignOut}>Sign out</button>
            </div>
          ) : (
            <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSignIn}>
              <input className="w-full md:w-96 px-4 py-2 rounded-lg border border-slate-300" type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold" type="submit">Continue</button>
            </form>
          )}
        </section>

        {/* About */}
        <section id="about" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-slate-700">Our mission is to revolutionize exam preparation by using data and technology to deliver focused, predictive practice that saves time and improves outcomes.</p>
        </section>

        {/* Blog placeholder */}
        <section id="blog" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-4">Blog</h2>
          <div className="border border-dashed border-slate-300 rounded-xl p-5 bg-slate-50 text-slate-600">Tips, strategies, and exam updates coming soon.</div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-4">Contact / Support</h2>
          <form className="grid md:grid-cols-2 gap-3">
            <input className="px-4 py-2 rounded-lg border border-slate-300" placeholder="Your name" />
            <input className="px-4 py-2 rounded-lg border border-slate-300" type="email" placeholder="Email" />
            <textarea className="md:col-span-2 px-4 py-2 rounded-lg border border-slate-300" rows="4" placeholder="How can we help?" />
            <button className="md:col-span-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold" type="button" onClick={()=>setShowToast('Message sent')}>Send message</button>
          </form>
        </section>

        {/* My Papers */}
        <section id="my-papers" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold">My Papers</h2>
          <p className="text-slate-600 mb-4">Your unlocked mock papers appear here.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {ALL_PAPERS.filter(p=>isUnlocked(p.id)).map((paper) => (
              <div key={paper.id} className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{paper.title}</h3>
                  <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs">{paper.exam}</span>
                </div>
                <div className="mt-2">
                  <button className="px-3 py-2 rounded-lg border border-slate-300" onClick={() => alert('Opening paper...')}>Open</button>
                </div>
              </div>
            ))}
            {ALL_PAPERS.filter(p=>isUnlocked(p.id)).length === 0 && (
              <div className="text-slate-600">No papers yet. Start with your free paper above.</div>
            )}
          </div>
        </section>
      </main>

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
              {['Home','Exams','Guess Papers','Practice Tests','Contact'].map((l)=>(
                <button key={l} className="text-left py-1" onClick={()=>scrollToSection(l.toLowerCase().replace(' ','-'))}>{l}</button>
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

      {showToast && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-6 bg-slate-900 text-white px-4 py-2 rounded-full" role="status">
          {showToast}
        </div>
      )}
    </div>
  )

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
            <div className="relative">
              <button className="px-2 py-2 inline-flex items-center gap-1" onClick={() => setExamsOpen(!examsOpen)}>Exams <span>▾</span></button>
              {examsOpen && (
                <div className="absolute mt-2 bg-white border border-slate-200 rounded-lg shadow p-2 grid grid-cols-2 gap-1">
                  {['SSC','Banking','UPSC','Railways','State Exams','Teaching'].map((e) => (
                    <button key={e} className="px-3 py-2 rounded hover:bg-slate-50 text-left" onClick={() => { setExamsOpen(false); navigateToPage('home'); scrollToSection('popular-exams') }}>{e}</button>
                  ))}
                </div>
              )}
            </div>
            <button className="px-2 py-2" onClick={() => { navigateToPage('home'); scrollToSection('guess-papers') }}>Guess Papers</button>
            <button className="px-2 py-2" onClick={() => { navigateToPage('home'); scrollToSection('practice-tests') }}>Practice Tests</button>
            <button className="px-2 py-2" onClick={() => { navigateToPage('home'); scrollToSection('features') }}>Features</button>
            <button className="px-2 py-2" onClick={() => { navigateToPage('home'); scrollToSection('pricing') }}>Pricing</button>
            <button className="px-2 py-2" onClick={() => { navigateToPage('home'); scrollToSection('about') }}>About</button>
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
            {['Home','Guess Papers','Practice Tests','Features','Pricing','About','Contact'].map((label) => (
              <button key={label} className="text-left px-2 py-2 rounded hover:bg-slate-50" onClick={() => { setMenuOpen(false); navigateToPage('home'); scrollToSection(label.toLowerCase().replace(' ','-')) }}>{label}</button>
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
