import React from 'react'

import styles from "../styles/Navigation.module.css"

const Navigation = () => {
  return (
    <div className={styles.container}>
        <img src="Daniel_logo2.png" />

        <button>
            Contact
        </button>
        <button>
            Writing
        </button>
        <button>
            Information
        </button>
    </div>
  )
}

export default Navigation