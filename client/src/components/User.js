import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
const User = () => {
  const islogged = false

  return (
    <div>
      <h1>Mon Compte</h1>
      {islogged ? ("") : (
      <div>
        <p>Merci de vous login!</p>
        <Link to="/login">Login</Link>
      </div>
      )}
    </div>
  )
}
 
export default User;