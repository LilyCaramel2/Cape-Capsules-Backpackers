import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import ValueProps from './sections/ValueProps'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        {/* Additional sections will be added here */}
      </main>
      <Footer />
    </div>
  )
}

export default App
