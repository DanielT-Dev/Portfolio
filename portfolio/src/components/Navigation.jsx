import React from 'react'

import styles from "../styles/Navigation.module.css"

import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
        <img 
          src="Daniel_logo2.png" 
          onClick={() => navigate("/")}
        />

        <button onClick={() => navigate("/contact")}>
            Contact
        </button>
        <button onClick={() => navigate("/writing")}>
            Writing
        </button>
        <button>
            Information
        </button>
    </div>
  )
}

export default Navigation