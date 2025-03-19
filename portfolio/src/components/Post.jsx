import React from 'react'

import styles from "../styles/Post.module.css"

const Post = ({title, date, description, onClick}) => {
  return (
    <div 
      className={styles.container}
      onClick={onClick}
    >
        <h1>
            {title}
        </h1>
        <h2>
            {date}
        </h2>
        <p>
            {description}
        </p>
    </div>
  )
}

export default Post