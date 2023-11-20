import React from 'react';
import styles from "./login.module.css";
import { GoEye } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";


function login({ onClose }) {
  return (
    <>
    <div className={styles.popupModal} onClick={onClose}></div>
    <div className={styles.modalContent}>
      <IoCloseCircleOutline onClick={onClose}/>
      <h3>Login to SwipTory</h3>
      <span>
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" />
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" /> <GoEye />
      </span>
      <button>Login</button>
    </div>
    </>
  )
}

export default login;