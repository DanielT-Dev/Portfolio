import React from 'react'

import styles from "../styles/Contests.module.css"

const Contests = () => {
    const contests = [
        {
            name: "💻 \u00A0 \" National Olympiad of Applied Informatics, AcadNet \"",
            date: "📅 \u00A0 2024, Romania, Bucharest",
            result: "🏆 \u00A0 21st place",
            image: "/AcadNet1.png",
        },
        {
            name: "💻 \u00A0 \" Olympiad of the Society for Excellence and Performance in Informatics \"",
            date: "📅 \u00A0 2023, Romania, local",
            result: "🏆 \u00A0 3rd place",
            image: "/OSEPI1.png",
        },
        {
            name: "💻 \u00A0 \" FIRST Tech Challenge (FTC) \"",
            date: "📅 \u00A0 2023, Romania, Bucharest",
            result: "🏆 \u00A0 Top finalist teams",
            image: "/FTC1.png",
        },
    ]

  return (
    <div className={styles.container}>
            <h1>
                Contests & Achievements
            </h1>
            <p>
            I love testing my skills in coding competitions.
            Here are some of the contests and olympiads I have participated in along with my placement.
            </p>
            <br/>
            <br/>
            {
                contests.map((contest, index) => {
                    return (
                        <div 
                            key={index}
                            className={styles.contest}
                        >
                            <div className={styles.info}>
                                <h2>
                                    {contest.name}
                                </h2>
                                <p>
                                    {contest.date}
                                </p>
                                <p>
                                    {contest.result}
                                </p>
                            </div>
                            <img src={contest.image}/>
                        </div>
                    )
                })
            }
    </div>
  )
}

export default Contests