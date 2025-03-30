import React from 'react'

import styles from "../styles/Projects.module.css"

import ProjectCard from './ProjectCard'

const Projects = () => {

  const projects = [
    {
      name: "Pathfinding Algorithms Visualizer",
      dscription: "A web-based tool that visually demonstrates various pathfinding algorithms (like A*, Dijkstra, and DFS / BFS)",
      image: "/PAV1.png",
      link: "https://github.com/DanielT-Dev/Pathfinding-Algorithms-Visualizer"
    },
    {
      name: "Project Name",
      dscription: "Some example description",
      image: "/placeholder1.jpg",
      link: "/",
    },
    {
      name: "Project Name",
      dscription: "Some example description",
      image: "/placeholder1.jpg",
      link: "/",
    },
    {
      name: "Project Name",
      dscription: "Some example description",
      image: "/placeholder1.jpg",
      link: "/",
    },
  ]

  const handleRedirect = (url) => {
    window.open(url, "_blank")
  };

  return (
    <div className={styles.container}>
        <h1>
            Personal Projects
        </h1>
        <p>
            Below is a selection of recent projects that I have worked on.
        </p>

        <div className={styles.projects_container}>
          {projects.map((project, index) => { return <div onClick={() => handleRedirect(project.link)}>
              <ProjectCard key={index} project={project}/> 
            </div>
          })}
        </div>
    </div>
  )
}

export default Projects