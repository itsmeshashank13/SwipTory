import React from 'react';
import { GoEye } from "react-icons/go";

function login() {
  return (
    <>
    <div></div>
    <div>
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