import React from 'react'

import styles from "../styles/MoreButton.module.css"

const MoreButton = ({content}) => {
  return (
    <div className={styles.container}>
        {content} <span className={styles.special}>→</span>
    </div>
  )
}

export default MoreButton