import React from 'react'

import styles from "../styles/Writing.module.css"

import Post from './Post'

import { useNavigate } from 'react-router-dom'

const Writing = () => {

  const navigate = useNavigate();

  const posts = [
    {
      post_id: 1,
      title: "Future CSS: Container Queries",
      date: "Published on 23 Sept 2024",
      description: "A look at the future of CSS with container queries."
    },
    {
      post_id: 2,
      title: "Future CSS: Container Queries",
      date: "Published on 23 Sept 2024",
      description: "A look at the future of CSS with container queries."
    },
    {
      post_id: 3,
      title: "Future CSS: Container Queries",
      date: "Published on 23 Sept 2024",
      description: "A look at the future of CSS with container queries."
    },
    {
      post_id: 4,
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
            onClick={() => navigate(`/post/${post.post_id}`)}
          />
        })}
    </div>
  )
}

export default Writing