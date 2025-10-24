import React from 'react'

import styles from "../styles/Landing.module.css"
import Projects from './Projects'
import MoreButton from '../components/MoreButton'
import Contests from './Contests'

const Landing = () => {
  return (
    <div className={styles.container}>
        <h1>
            Hello, I am Daniel 👋
        </h1>
        <h2>
          Software Engineer from Romania
        </h2>
        
        <MoreButton content="More Information"/>

        <Projects/>

        <Contests/>
    </div>
  )
}

export default Landing