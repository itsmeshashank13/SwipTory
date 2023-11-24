import React, { useState } from 'react';
import styles from "./login.module.css";
import { GoEye } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";


function Login({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = ()=> {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
    <div className={styles.popupModal} onClick={onClose}></div>
    <div className={styles.modalContent}>
      <IoCloseCircleOutline className={styles.cross} onClick={onClose}/>
      <h3>Login to SwipTory</h3>
      <div className={styles.formGroup}>
          <div className={styles.formField}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder='Enter Username here'/>
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <div className={styles.passwordContainer}>
              <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Enter Password here'/> 
              <GoEye className={styles.eyeIcon} onClick={handleShowPassword} />
            </div>
          </div>
        </div>
      <button className={styles.login}>Login</button>
    </div>
    </>
  )
}

export default Login;