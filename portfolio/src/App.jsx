import React, { useState } from 'react'

import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Writing from './components/Writing'

const App = () => {

  const [page, set_page] = useState("landing")

  return (
    <div>
      <Navigation set_page={set_page}/>
      { page === "landing" && <Landing />}

      { page === "writing" && 
      <>
        <h1 className="header">
          Writing
        </h1>
        <Writing />
      </>}

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