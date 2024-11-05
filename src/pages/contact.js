import React, { useState } from "react";
import styles from '../styles/Header.module.css'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("")
    setEmail("")
    
  };
  return (
    <>
    <div className={styles.contactContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div>
          <h1 className={styles.formTitle}>Contact us</h1>
        </div>
        <div>
          <label className={styles.inputLabel}>
            Name
          </label>
        </div>
        <div >
          <input 
          className={styles.inputField}
          type='text' 
          placeholder='Enter your name...'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required>
          </input>
        </div>
        <div>
          <label className={styles.inputLabel}>
            Email
          </label>
        </div>
        <div >
          <input 
          className={styles.inputField}
          placeholder='Enter your email...'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required>
          </input>
        </div>
        <div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Contact