import React from 'react'
import styles from "./Sect6a.module.css"
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { RiCheckboxMultipleLine } from "react-icons/ri";


const Sect6a = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.part}>
            <h2><FaRegLightbulb/></h2>
            <div className={styles.text}>
                <h1>Our Vision</h1>
                <p>Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.</p>
            </div>
            </div>
            <div className={styles.part}>
            <h2><IoMdRefresh /></h2>
            <div className={styles.text}>
                <h1>Our Mission</h1>
                <p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis.</p>
            </div>
            </div>
            <div className={styles.part}>
            <h2><RiCheckboxMultipleLine /></h2>
            <div className={styles.text}>
                <h1>Our Goal</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Sect6a