import React from 'react'

import styles from "../styles/Footer.module.css"

const Footer = () => {

    const socials = ["github", "linkedin"]

    return (
        <div className={styles.container}>
            <p className={styles.copyright}>
                © 2025 | Marian-Daniel Trușcă
            </p>

            <div className={styles.socials}>
            {
                socials.map((platform, i) => (
                    <button key={i} className={styles.social}>
                        <a href="#" className={`fa fa-${platform}`}></a>
                    </button>
                ))
            }
            </div>
        </div>
    )
}

export default Footer