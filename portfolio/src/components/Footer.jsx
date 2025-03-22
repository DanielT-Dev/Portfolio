import React from 'react'

import styles from "../styles/Footer.module.css"

const Footer = () => {

    const socials = [
        {
            name: "github",
            url: "https://github.com/DanielT-Dev",
        },
        {
            name: "linkedin",
            url: "https://www.linkedin.com/in/marian-daniel-tru%C8%99c%C4%83-784074286/"
        }
    ]

    return (
        <div className={styles.container}>
            <p className={styles.copyright}>
                © 2025 | Marian-Daniel Trușcă
            </p>

            <div className={styles.socials} >
            {
                socials.map((platform, i) => (
                    <button 
                        key={i} 
                        className={styles.social}
                        onClick={() => window.open(platform.url, '_blank')}
                    >
                        <i className={`fa fa-${platform.name}`} />
                    </button>
                ))
            }
            </div>
        </div>
    )
}

export default Footer