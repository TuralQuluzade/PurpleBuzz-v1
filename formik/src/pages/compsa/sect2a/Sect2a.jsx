import React from 'react'
import styles from "./Sect2a.module.css"
const Sect2a = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.team}>
                <h1>Our Team</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={styles.bir}>
                <img src="https://themewagon.github.io/purple-buzz/assets/img/team-01.jpg" alt="" />
                <div className={styles.yazi1}>
                <h4>John Doe</h4>
                <h4>Business Development</h4>
                </div>
            </div>
            <div className={styles.iki}>
                <img src="https://themewagon.github.io/purple-buzz/assets/img/team-02.jpg" alt="" />
                <div className={styles.yazi2}>
                <h4>Jane Doe</h4>
                <h4>Media Development</h4>
                </div>
            </div>
            <div className={styles.uc}>
                <img src="https://themewagon.github.io/purple-buzz/assets/img/team-03.jpg" alt="" />
                <div className={styles.yazi3}>
                <h4>Sam</h4>
                <h4>Developer</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sect2a