import React from 'react'

import styles from "../styles/Navigation.module.css"

const Navigation = ({ set_page }) => {
  return (
    <div className={styles.container}>
        <img 
          src="Daniel_logo2.png" 
          onClick={() => set_page("landing")}
        />

        <button onClick={() => set_page("contact")}>
            Contact
        </button>
        <button onClick={() => set_page("writing")}>
            Writing
        </button>
        <button>
            Information
        </button>
    </div>
  )
}

export default Navigation