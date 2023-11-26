import React, { useState } from "react";
import styles from "./header.module.css";

function Header({ onLoginClick, onRegisterClick }) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <div className={styles.header}>
        <h1>SwipTory</h1>
        <div>
          <button className={styles.registerButton} onClick={onRegisterClick}>
            Register Now
          </button>
          <button className={styles.signInButton} onClick={onLoginClick}>
            Sign In
          </button>
          
          <div
            className={`${styles.hamburger} ${
              isMenuActive ? styles.active : ""
            }`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
