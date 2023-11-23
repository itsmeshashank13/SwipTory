import React, { useState } from 'react';
import { GoEye } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import styles from "./register.module.css";


function Register({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = ()=> {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
    <div className={styles.popupModal} onClick={onClose}></div>
    <div className={styles.modalContent}>
      <IoCloseCircleOutline className={styles.cross} onClick={onClose}/>
      <h3>Register to SwipTory</h3>
      <span>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" placeholder='Enter Username here'/>
        <label htmlFor="password">Password</label>
        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder='Enter Password here'/> 
        <GoEye className={styles.eyeIcon} onClick={handleShowPassword} />
      </span>
      <button className={styles.register}>Register</button>
    </div>
    </>
  )
}

export default Register;