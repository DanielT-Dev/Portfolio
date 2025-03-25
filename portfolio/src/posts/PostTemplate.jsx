import React, { useEffect, useRef, useState } from 'react'

import styles from "./PostTemplate.module.css"
import { useParams } from 'react-router-dom'

import { avaiable_posts } from "../posts/data/data"

const PostTemplate = () => {

  const { post_id } = useParams()

  const [post, setPost] = useState();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get post by ID
    const found_post = avaiable_posts.find(p => p.post_id === parseInt(post_id));
    if (found_post) {
      setPost(found_post);
    }
  }, [post_id])

  useEffect(() => {
    // After component mounts, set visibility to true
    setIsVisible(true);
  }, []);  // Empty dependency array, so it runs once after mount

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
        {
          post.content.map((section, index) => {
            return (
              <div
                key={index}
                className={styles.section}
                style={{ visibility: isVisible ? 'visible' : 'hidden' }}  // Dynamically control visibility
              >
                <h4>{section.header}</h4>
                <div dangerouslySetInnerHTML={{ __html: section.paragraph }} />
                {section.media && <img src={section.media} />}
              </div>
            )
          })
        }
    </div>
  )
}

export default PostTemplate