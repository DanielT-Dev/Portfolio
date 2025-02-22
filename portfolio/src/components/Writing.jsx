import React from 'react'

import styles from "../styles/Writing.module.css"

import Post from './Post'

const Writing = () => {

  const posts = [
    {
      title: "Future CSS: Container Queries",
      date: "Published on 23 Sept 2024",
      description: "A look at the future of CSS with container queries."
    },
    {
      title: "Future CSS: Container Queries",
      date: "Published on 23 Sept 2024",
      description: "A look at the future of CSS with container queries."
    },
    {
      title: "Future CSS: Container Queries",
      date: "Published on 23 Sept 2024",
      description: "A look at the future of CSS with container queries."
    },
    {
      title: "Future CSS: Container Queries",
      date: "Published on 23 Sept 2024",
      description: "A look at the future of CSS with container queries."
    },
  ]

  return (
    <div className={styles.container}>

        {posts.map((post, index) => {
          return <Post 
            key={index} 
            title={post.title} 
            date={post.date} 
            description={post.description}
          />
        })}
    </div>
  )
}

export default Writing