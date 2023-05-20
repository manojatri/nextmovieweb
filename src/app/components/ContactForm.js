"use client";

import styles from "@/app/contact/contact.module.css"
import {Mulish} from "next/font/google";
import { useState } from "react";
const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

const ContactForm = () => {
   const [user, setUser] = useState({
    username : "",
    email : "",
    phone : "",
    message : ""
   });

   const [status, setStatus] = useState(null);

   const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({...prevUser, [name] : value}))
   }

   const handleSubmit = async(e) => {
        e.preventDefault();
        try {

            const response = await fetch('/api/contact', {
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })
            
            // Set the status based on the response from the API route

            if (response.status === 200) {
                setUser({
                    username : "",
                    email : "",
                    phone : "",
                    message : ""
                })
                setStatus('success')
            } else {
                setStatus('error')
            }

        } catch (error) {
            console.log(error)
        }
   }


  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
            <label htmlFor="username" className={styles.label}>
                Enter your name
                <input type="text" name="username" id="username" value={user.username} onChange={handleChange} placeholder="Enter your name" className={mulish.className} required autoComplete="off" />
            </label>
        </div>
        <div className={styles.input_field}>
            <label htmlFor="email" className={styles.label}>
                Email
                <input type="text" name="email" id="email" value={user.email} onChange={handleChange} placeholder="Enter your email" className={mulish.className} required autoComplete="off" />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone" value={user.phone} onChange={handleChange} placeholder="Enter your phone" className={mulish.className} required autoComplete="off" />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea  name="message" id="message" value={user.message} onChange={handleChange} rows={5} placeholder="Enter your Message" className={mulish.className} required autoComplete="off" />
                </label>
            </div>

            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
                <button type="submit" className={mulish.className}>Send Message</button>
            </div>
    </form>
  )
}

export default ContactForm