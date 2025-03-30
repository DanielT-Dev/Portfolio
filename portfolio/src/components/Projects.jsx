import React from 'react'

import styles from "../styles/Projects.module.css"

import ProjectCard from './ProjectCard'

const Projects = () => {

  const projects = [
    {
      name: "Pathfinding Algorithms Visualizer",
      dscription: "A web-based tool that visually demonstrates various pathfinding algorithms (like A*, Dijkstra, and DFS / BFS)",
      image: "/PAV1.png"
    },
    {
      name: "Project Name",
      dscription: "Some example description",
      image: "/placeholder1.jpg"
    },
    {
      name: "Project Name",
      dscription: "Some example description",
      image: "/placeholder1.jpg"
    },
    {
      name: "Project Name",
      dscription: "Some example description",
      image: "/placeholder1.jpg"
    },
  ]

  return (
    <div className={styles.container}>
        <h1>
            Personal Projects
        </h1>
        <p>
            Below is a selection of recent projects that I have worked on.
        </p>

        <div className={styles.projects_container}>
          {projects.map((project, index) => { return <ProjectCard key={index} project={project}/> })}
        </div>
    </div>
  )
}

export default Projects