import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
const Favoris = () => {
  const islogged = false
  return (
    <div>
      <h1>Mes Destinations favorites</h1>
      {islogged ? ("") : (
      <div>
        <p>Merci de vous login!</p>
        <Link to="/login">Login</Link>
      </div>
      )}
      <button>
        <Link to='/citypage'>La destination</Link>
      </button>
    </div>
  )
}
 
export default Favoris;