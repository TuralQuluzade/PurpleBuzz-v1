import React from 'react'
import styles from "./Sect4a.module.css"
const Sect4a = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.create}>
                <h1>Creative & Make Perfect</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus.</p>
            </div>
            <div className={styles.pers}>
                <h3 style={{width:"66%"}} >Development  (66%)</h3>
                <h3 style={{width:"90%"}} >Design  (90%)</h3>
                <h3 style={{width:"74%"}}>Marketing  (74%)</h3>
            </div>
        </div>
    </div>
  )
}

export default Sect4a