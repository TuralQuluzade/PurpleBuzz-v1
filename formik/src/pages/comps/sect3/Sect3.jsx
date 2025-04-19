import React from 'react'
import styles from "./Sect3.module.css"
const Sect3 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.ust}>
            <div className={styles.ustcont}>
                <button>All</button>
                <button>Graphics</button>
                <button>UI/UX</button>
                <button>Branding</button>
            </div>
        </div>
        <div className={styles.alt}>
            <div className={styles.altcont}>
                <div style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-01.jpg)"}} className={styles.cont}>
                    <div className={styles.metin}>
                    <button>UI/UX design</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </div>
                </div>
                <div style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-02.jpg)"}} className={styles.cont}>
                <div className={styles.metin}>
                    <button>Social Media</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </div>
                </div>
                <div style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-03.jpg)"}} className={styles.cont}>
                <div className={styles.metin}>
                    <button>Marketing</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </div>
                </div>
                <div style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-04.jpg)"}} className={styles.cont}>
                <div className={styles.metin}>
                    <button>Graphic</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </div>
                </div>
                <div style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-05.jpg)"}} className={styles.cont}>
                <div className={styles.metin}>
                    <button>Digital Marketing</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </div>
                </div>
                <div style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-06.jpg)"}} className={styles.cont}>
                <div className={styles.metin}>
                    <button>Market Research</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </div>
                </div>
                <div style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-07.jpg)"}} className={styles.cont}>
                <div className={styles.metin}>
                    <button>Business</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </div>
                </div>
                <div style={{backgroundImage:"url(https://themewagon.github.io/purple-buzz/assets/img/services-08.jpg)"}}  className={styles.cont}>
                <div className={styles.metin}>
                    <button>Branding</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sect3