import React from 'react';
 import { useFormik } from 'formik';
 import styles from "./SignupForm.module.css"
import axios from 'axios';
import { IoDocument } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";


 
 const SignupForm = () => {
   const formik = useFormik({
     initialValues: {
       Name: '',
       Email: '',
       Phone: '',
       Company:"",
       Subject:"",
       Message:"",

     },
     onSubmit: values=> {
        axios.post("https://northwind.vercel.app/api/categories",values);
    },
   });
   return (
    <div className={styles.container}>
        <div className={styles.yazi}>
            <h1>Create success campaign with us!</h1>
            <h3>Elit, sed do eiusmod tempor</h3>
            <p>Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
        </div>
        <div className={styles.alt}>
            <div className={styles.aciq}>
                <div className={styles.one}>
                <IoDocument style={{fontSize:"50px",color:"#4232C2"}}/>
                <div className={styles.ayazi}>
                <h2>Media Contact</h2>
                <h4>Mr. John Doe</h4>
                <h4>010-020-0340</h4>
                </div>
                </div>
                <div className={styles.one}>
                <MdComputer style={{fontSize:"50px",color:"#4232C2"}}/>
                <div className={styles.ayazi}>
                <h2>Technical Contact</h2>
                <h4>Mr. John Stiles</h4>
                <h4>010-020-0340</h4>
                </div>
                </div>
                <div className={styles.one}>
                <FaMoneyBill style={{fontSize:"50px",color:"#4232C2"}} />
                <div className={styles.ayazi}>
                <h2>Billing Contact</h2>
                <h4>Mr. Richard Miles</h4>
                <h4>010-020-0340</h4>
                </div>
                </div>
            </div>
        <form className={styles.main} onSubmit={formik.handleSubmit}>
       <div className={styles.four}>
       <input
         id="Name"
         name="Name"
         type="text"
         placeholder='Name'
         className={styles.form}
         onChange={formik.handleChange}
         value={formik.values.Name}
       />
       <input
         id="Email"
         name="Email"
         type="text"
         placeholder='Email'
         className={styles.form}
         onChange={formik.handleChange}
         value={formik.values.Email}
       />
       <input
         id="Phone"
         name="Phone"
         type="text"
         placeholder='Phone'
         className={styles.form}
         onChange={formik.handleChange}
         value={formik.values.Phone}
       />
       <input
         id="Company"
         name="Company"
         type="text"
         placeholder='Company'
         className={styles.form}
         onChange={formik.handleChange}
         value={formik.values.Company}
       />
       <div className={styles.altform}>
       <input
         id="Subject"
         name="Subject"
         type="text"
         placeholder='Subject'
         className={styles.altform}
         onChange={formik.handleChange}
         value={formik.values.Subject}
       />
       </div>
       <div className={styles.msg}>
       <input
         id="Message"
         name="Message"
         type="text"
         placeholder='Message'
         className={styles.mesg}
         onChange={formik.handleChange}
         value={formik.values.Message}
       />
       </div>
       </div>
       <button type="submit" onClick={()=> formik.resetForm()}>Submit</button>
     </form>
    </div>
        </div>
         
   );
 };

export default SignupForm