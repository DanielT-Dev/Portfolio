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
          A full-stack web developer from Romania based in Cluj-Napoca.
        </h2>
        <p>
        I am a problem-solver at heart, dedicated to transforming complex challenges into simple, intuitive, and user-friendly experiences. With expertise in modern programming languages and frameworks, I specialize in building dynamic front-end interfaces using JavaScript, TypeScript, React, and Vue.js, while also developing reliable back-end systems with Node.js, Express, MongoDB, and FaunaDB. My goal is to create efficient, reliable, and scalable solutions that deliver exceptional value.
        </p>
        
        <MoreButton content="More Information"/>

        <Projects/>

        <Contests/>
    </div>
  )
}

export default Landing