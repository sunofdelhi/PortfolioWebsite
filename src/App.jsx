import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Paradox from './components/sections/Paradox'
import Timeline from './components/sections/Timeline'
import Impact from './components/sections/Impact'
import Expertise from './components/sections/Expertise'
import ThoughtLeadership from './components/sections/ThoughtLeadership'
import Contact from './components/sections/Contact'
import CookieBanner from './components/layout/CookieBanner'
import { useEffect } from 'react'
import { initAnalytics } from './utils/analytics'
function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Paradox />
        <Timeline />
        <Impact />
        <Expertise />
        <ThoughtLeadership />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
