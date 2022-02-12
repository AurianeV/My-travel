import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/homepage'>Home</Link></li>
        <li><Link to='/destinations'> Idées de Destinations </Link></li>
        <li><Link to='/favoris'> Mes Destinations </Link></li>
        <li><Link to='/user'> Mon Compte </Link></li>
        <li><Link to='/signup'> Signup </Link></li>
        <li><Link to='/login'> Login </Link></li>
      </ul>
    </nav>
  )
}
 
export default navbar;