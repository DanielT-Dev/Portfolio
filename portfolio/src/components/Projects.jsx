import React from 'react'

import styles from "../styles/Projects.module.css"

import ProjectCard from './ProjectCard'

const Projects = () => {

  const projects = [1, 2, 3, 4]

  return (
    <div className={styles.container}>
        <h1>
            Personal Projects
        </h1>
        <p>
            Below is a selection of recent projects that I have worked on.
        </p>

        <div className={styles.projects_container}>
          {projects.map((project, index) => { return <ProjectCard key={index}/> })}
        </div>
    </div>
  )
}

export default Projects