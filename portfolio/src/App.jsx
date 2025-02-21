import React from 'react'

import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landing from './components/Landing'

const App = () => {
  return (
    <div>
      <Navigation />
      <Landing />
      <h1 className="header">
        Contact
      </h1>
      <Contact />
      <Footer />
    </div>
  )
}

export default App