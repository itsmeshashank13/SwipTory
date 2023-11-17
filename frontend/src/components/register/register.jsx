import React from 'react';
import { GoEye } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import styles from "./register.module.css";


function register() {
  return (
    <>
    <div className={styles.popupModal}></div>
    <div className={styles.modalContent}>
      <IoCloseCircleOutline />
      <h3>Register to SwipTory</h3>
      <span>
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" />
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" /> <GoEye />
      </span>
      <button>Register</button>
    </div>
    </>
  )
}

export default register;