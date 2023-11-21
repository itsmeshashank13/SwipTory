import React from 'react';
import styles from "./login.module.css";
import { GoEye } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";


function login({ onClose }) {
  return (
    <>
    <div className={styles.popupModal} onClick={onClose}></div>
    <div className={styles.modalContent}>
      <IoCloseCircleOutline className={styles.cross} onClick={onClose}/>
      <h3>Login to SwipTory</h3>
      <span>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" placeholder='Enter username here'/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder='Enter password here'/> <GoEye />
      </span>
      <button className={styles.login}>Login</button>
    </div>
    </>
  )
}

export default login;