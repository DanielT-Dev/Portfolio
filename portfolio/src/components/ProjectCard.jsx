import React from 'react'

import styles from "../styles/ProjectCard.module.css"

const ProjectCard = () => {
  return (
    <div className={styles.container}>
        <img src="placeholder1.jpg" alt="image unavaiable"/>
        <h1>
            Project Name
        </h1>
        <p>
            Some example description
        </p>
    </div>
  )
}

export default ProjectCard