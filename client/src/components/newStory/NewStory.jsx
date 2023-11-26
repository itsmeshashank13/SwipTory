import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import styles from "./newStory.module.css";


function NewStory({ onClose }) {
  return (
    <>
      <div className={styles.popupModal}></div>
      <div className={styles.modalContent}>
      <IoCloseCircleOutline className={styles.cross} onClick={onClose}/>
      <small>Add upto 6 slides</small>
        <span>
          <h3>Slide 1</h3>
          <h3>Slide 2</h3>
          <h3>Slide 3</h3>
          <h3>Slide 4</h3>
          <h3>Slide 5</h3>
        </span>
        <label htmlFor="heading">Heading:</label>
        <input type="text" placeholder="Your Heading"/>
        <label htmlFor="description">Description:</label>
        <input type="text" placeholder="Story Description"/>
        <label htmlFor="image">Image:</label>
        <input type="text" placeholder="Add Image url"/>
        <label htmlFor="category">Category:</label>
        <select name="category" id="category">
          <option value="none">Select Category</option>
          <option value="food">Food</option>
          <option value="health and fitness">Health and Fitness</option>
          <option value="travel">Travel</option>
          <option value="movies">Movies</option>
          <option value="education">Education</option>
        </select>
        <span>
          <button>Previous</button>
          <button>Next</button>
        </span>
        <button>Post</button>
      </div>
    </>
  )
}

export default NewStory;