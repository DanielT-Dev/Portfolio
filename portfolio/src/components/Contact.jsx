import React from 'react'

import styles from "../styles/Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        If you want to reach out, you can contact me using the following methods:
      </p>

      <div className={styles.grid}>
        <div className={styles.grid_item}>
          <h1>
            Email
          </h1>
          <p>
            danieltrusca1@outlook.com
          </p>
        </div>
        <div className={styles.grid_item}>
          <h1>
            UpWork
          </h1>
          <p>
            example
          </p>
        </div>
        <div className={styles.grid_item}>
          <h1>
            GitHub
          </h1>
          <p>
            example
          </p>
        </div>
        <div className={styles.grid_item}>
          <h1>
            LinkedIn
          </h1>
          <p>
            example
          </p>
        </div>
      </div>

    </div>
  )
}

export default Contact