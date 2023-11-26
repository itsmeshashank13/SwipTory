import React from 'react';
import styles from "./headBottom.module.css";

function HeadBottom() {
  return (
    <>
      <div className={styles.wrapper}>
          <span className={styles.card} id='all'>
            <h2>All</h2>
          </span>
          <span className={styles.card} id='food'>
            <h2>Food</h2>
          </span>
          <span className={styles.card} id='health'>
            <h2>Health & Fitness</h2>
          </span>
          <span className={styles.card} id='travel'>
            <h2>Travel</h2>
          </span>
          <span className={styles.card} id='movies'>
            <h2>Movies</h2>
          </span>
          <span className={styles.card} id='education'>
            <h2>Education</h2>
          </span>
          <span className={styles.card} id='sports'>
            <h2>Sports</h2>
          </span>
      </div>
    </>
  )
}

export default HeadBottom;