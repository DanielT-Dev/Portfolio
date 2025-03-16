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
            <a href="https://www.upwork.com/freelancers/~01b4addf9f9fe5676c?mp_source=share" target='blank'>
              Daniel Trusca
            </a>
          </p>
        </div>
        <div className={styles.grid_item}>
          <h1>
            GitHub
          </h1>
          <a href="https://github.com/DanielT-Dev" target='blank'>
            https://github.com/DanielT-Dev
          </a>
        </div>
        <div className={styles.grid_item}>
          <h1>
            LinkedIn
          </h1>
          <p>
            <a href="https://www.linkedin.com/in/marian-daniel-tru%C8%99c%C4%83-784074286/" target="blank">
              Daniel Trusca
            </a>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Contact