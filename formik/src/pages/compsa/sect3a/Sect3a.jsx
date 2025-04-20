import React from 'react'
import styles from "./Sect3a.module.css"
import { FaRegBuilding } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOfflineBolt } from "react-icons/md";
import { RiFlowerFill } from "react-icons/ri";


const Sect3a = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.partner}>
            <h1>Our Partner</h1>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon}>
            <FaRegBuilding />
            </div>
            <div className={styles.icon}>
            <IoShieldCheckmark />
            </div>
            <div className={styles.icon}>
            <MdOfflineBolt />
            </div>
            <div className={styles.icon}>
            <RiFlowerFill />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sect3a