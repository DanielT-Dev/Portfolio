import React, { useEffect, useState } from 'react'

import styles from "./PostTemplate.module.css"
import { useParams } from 'react-router-dom'

import { avaiable_posts } from "../posts/data/data"

const PostTemplate = () => {

  const { post_id } = useParams()

  const [post, setPost] = useState();

  useEffect(() => {
    // Get post by ID
    const found_post = avaiable_posts.find(p => p.post_id === parseInt(post_id));
    if (found_post) {
      setPost(found_post);
    }
  }, [post_id])

  if (!post) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
        <h1>
          {post.title}
        </h1>
        <br/>
        <h2>
          Published on {post.date}
        </h2>
        <br/>
        <h3>
          {post.description}
        </h3>
    </div>
  )
}

export default PostTemplate