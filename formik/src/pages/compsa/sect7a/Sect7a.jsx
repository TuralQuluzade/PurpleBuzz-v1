import React, { useState } from 'react'
import styles from "./Sect7a.module.css"
import axios from 'axios'
const Sect7a = () => {
    const [email,setEmail]=useState("")
    const setItem =(e)=>{
        e.preventDefault()
        axios.post("https://northwind.vercel.app/api/categories",{
           email:email
    });
    if(email.includes("@")){
        alert("Ugurla Qeydiyyatdan kecdiz")
    }else{
        alert("Mail de xeta var")
        
    }
    }
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <h1>Stay up to date with us</h1>
            <form className={styles.form} action="" onSubmit={setItem}>
                <input type="text" name='' id='' placeholder='  Your Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <button type='submit'>Subscribe</button>
            </form>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.</p>
        </div>
    </div>
  )
}

export default Sect7a