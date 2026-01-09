import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        {/* Additional sections will be added here */}
      </main>
      <Footer />
    </div>
  )
}

export default App
