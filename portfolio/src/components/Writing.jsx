import React from 'react'

import styles from "../styles/Writing.module.css"

import Post from './Post'

import { useNavigate } from 'react-router-dom'

import { avaiable_posts } from '../posts/data/data'

const Writing = () => {

  const navigate = useNavigate();

  const posts = avaiable_posts

  return (
    <div className={styles.container}>
        {posts.map((post, index) => {
          return <Post 
            key={index} 
            title={post.title} 
            date={`Published on ${post.date}`} 
            description={post.description}
            onClick={() => navigate(`/post/${post.post_id}`)}
          />
        })}
    </div>
  )
}

export default Writing