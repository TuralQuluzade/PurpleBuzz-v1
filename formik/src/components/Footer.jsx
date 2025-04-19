import React from 'react'
import styles from "./Footer.module.css"
import { BsBuildings } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFlickr } from "react-icons/fa";
import { IoLogoMedium } from "react-icons/io5";
import { Link } from 'react-router';
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";







const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.bir}>
                <div className={styles.headb}>
                     <BsBuildings />
                     <h3>Purple Buzz</h3>
                </div>
                <div className={styles.altb}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>

                </div>
                <div className={styles.logob}>
                <IoLogoFacebook />
                <FaLinkedin />
                <FaSquareWhatsapp />
                <FaFlickr />
                <IoLogoMedium />
                </div>
            </div>
            <div className={styles.iki}>
                <h2>Our Company</h2>
            <div className={styles.links}>
                <Link to="/">Home</Link>
                <a href="">About Us</a> 
                <a href="">Work</a>
                <a href="">Price</a>
                <Link to="/contact">Contact</Link>
            </div>
            </div>
            <div className={styles.uc}>
                <h2>Our Works</h2>
            <div className={styles.linku}>
                <a href="">Branding</a>
                <a href="">Business</a> 
                <a href="">Marketing</a>
                <a href="">Social Media</a>
                <a href="">Digital Solution</a>
                <a href="">Graphic</a>
            </div>
            </div>
            <div className={styles.dord}>
                <h2>For Client</h2>
            <div className={styles.nom}>
            <div className={styles.nomre}>
            <BsTelephone />
            <h4>010-020-0340</h4>
            </div>
            <div className={styles.mail}>
            <CiMail />
            <h4>info@company.com</h4>
            </div>

            </div>
            </div>
            
        </div>
        <div className={styles.secus}>
        <div className={styles.sec}>
            <p>© Copyright 2021 Purple Buzz Company. All Rights Reserved.</p>
            <p>Designed by TemplateMo</p>
            <p>Distributed by Themewagon</p>
        </div>
        </div>

    </div>
  )
}

export default Footer