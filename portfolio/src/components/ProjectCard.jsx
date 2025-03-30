import React from 'react'

import styles from "../styles/ProjectCard.module.css"

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
        <img src={project.image} alt="image unavaiable"/>
        <h1>
            {project.name}
        </h1>
        <p>
            {project.dscription}
        </p>
    </div>
  )
}

export default ProjectCard