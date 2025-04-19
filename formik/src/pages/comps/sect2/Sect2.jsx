import React from 'react'
import styles from "./Sect2.module.css"
import { FaGift } from "react-icons/fa6";

const Sect2 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
        <h1>Services</h1>
        <div className={styles.gift}>
            <h2><FaGift /> Make Success for future</h2>
            </div>

        <div className={styles.alt}>
            <p>You are free to use this template for your commercial or business websites. You are not allowed to re-distribute this template ZIP file on any template collection websites. It is too easy to illegally copy and repost this template.</p>
        </div>
        </div>
    </div>
  )
}

export default Sect2