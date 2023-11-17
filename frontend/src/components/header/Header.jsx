import React from 'react';
import styles from "./header.module.css";


function Header() {
  return (
    <>
        <div className={styles.header}>
            <h1>SwipTory</h1>
            <button className={styles.registerButton}>Register Now</button>
            <button className={styles.SignInButton}>Sign In</button>
        </div>
    </>
  )
}

export default Header;