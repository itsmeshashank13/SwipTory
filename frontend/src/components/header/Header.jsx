import React from 'react';
import styles from "./header.module.css";


function Header({ onLoginClick, onRegisterClick }) {
  return (
    <>
        <div className={styles.header}>
            <h1>SwipTory</h1>
            <span>
                <button className={styles.registerButton} onClick={onRegisterClick}>Register Now</button>
                <button className={styles.signInButton} onClick={onLoginClick}>Sign In</button>
            </span>
        </div>
    </>
  )
}

export default Header;