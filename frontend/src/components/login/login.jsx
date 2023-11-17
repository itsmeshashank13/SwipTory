import React from 'react';
import styles from "./login.module.css";
import { GoEye } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";


function login() {
  return (
    <>
    <div className={styles.popupModal}></div>
    <div className={styles.modalContent}>
      <IoCloseCircleOutline />
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