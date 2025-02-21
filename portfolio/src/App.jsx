import React, { useState } from 'react'

import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landing from './components/Landing'

const App = () => {

  const [page, set_page] = useState("landing")

  return (
    <div>
      <Navigation set_page={set_page}/>
      { page === "landing" && <Landing />}

      { page === "contact" && 
      <>
        <h1 className="header">
          Contact
        </h1>
        <Contact />
      </>}

      <Footer />
    </div>
  )
}

export default App