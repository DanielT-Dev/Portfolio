import React from 'react'

import styles from "../styles/Landing.module.css"
import MoreButton from '../components/MoreButton'

const Landing = () => {
  return (
    <div className={styles.container}>
        <h1>
            Hello, I am Daniel 👋
        </h1>
        <p>
            I’m a full stack web developer with a passion for building end-to-end digital solutions that are both functional and visually engaging. Proficient in front-end technologies like HTML, CSS, JavaScript (React, Vue.js) and back-end frameworks such as Node.js, Express, and Django, I bring a holistic approach to web development. From designing intuitive user interfaces to developing scalable server-side architectures and managing databases (SQL, MongoDB), I ensure seamless performance and a great user experience across the stack. Whether it’s crafting dynamic web applications, optimizing APIs, or deploying cloud-based solutions, I thrive on turning ideas into reality. Let’s create something impactful together!
        </p>
        <MoreButton content="More Information"/>
    </div>
  )
}

export default Landing