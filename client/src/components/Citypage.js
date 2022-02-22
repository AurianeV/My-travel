import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
const Citypage = () => {
  const islogged = false
//Use componentDidMount
  return (
    <div>
      <h1>Page d'une destination</h1>
      {islogged ? ("") : (
      <div>
        <p>Merci de vous login!</p>
        <Link to="/login">Login</Link>
      </div>
      )}
    </div>
  )
}
 
export default Citypage;