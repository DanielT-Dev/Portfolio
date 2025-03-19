import React from 'react'

import styles from "./PostTemplate.module.css"
import { useParams } from 'react-router-dom'

const PostTemplate = () => {

  const { post_id } = useParams()

  return (
    <div className={styles.container}>
        Currently viewing post with ID - {post_id}
    </div>
  )
}

export default PostTemplate