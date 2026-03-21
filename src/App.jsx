import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Paradox from './components/sections/Paradox'
import Timeline from './components/sections/Timeline'
import Impact from './components/sections/Impact'
import Expertise from './components/sections/Expertise'
import ThoughtLeadership from './components/sections/ThoughtLeadership'
import Contact from './components/sections/Contact'

function App() {
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
    </div>
  )
}

export default App
