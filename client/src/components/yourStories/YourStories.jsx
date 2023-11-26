import React from 'react';
import styles from './yourStories.module.css';
import { TbEdit } from "react-icons/tb";


function YourStories() {
  return (
    <>
      <div className={styles.container}>
        <h1>Your Stories</h1>
        <div className={styles.wrapper}>
          <span className={styles.card}>
            <h4>Heading comes here</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className={styles.edit}><TbEdit />Edit</button>
          </span>
        </div>
      </div>
    </>
  )
};

export default YourStories;