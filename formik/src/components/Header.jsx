import React from 'react'
import styles from "../components/Header.module.css"
import { BsBuildings } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router';
import { FaBars } from "react-icons/fa6";





const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
        <BsBuildings />
        <Link to="/">Purple Buzz</Link>
        </div>
        <div className={styles.info}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="">Work</a>
            <a href="">Pricing</a>
            <Link to="/contact">Contact</Link>
        </div>
        <div className={styles.icon}>
        <IoIosNotificationsOutline style={{color:"#4232C2"}} />
        <IoSettingsOutline style={{color:"#4232C2"}} />
        <FaRegUserCircle style={{color:"#4232C2"}} />
        </div>
        <div className={styles.bar}>
        <FaBars />
        </div>
    </div>
  )
}

export default Header