import React from 'react';
import { Link } from 'react-router-dom';
 
const navbar = () => {
  return (
    <nav className="nav-style">
        <ul class="nav1">
          <li ><Link class="my" to='/homepage'> <img class="logo"  src="/MY Travel (200 × 200 px).png" /> </Link></li>
          <li><Link to='/homepage'>Home</Link></li>
          <li><Link to='/destinations'> Idées de Destinations </Link></li>
          <li><Link to='/favoris'> Mes Destinations </Link></li>
          <li><Link to='/user'> Mon Compte </Link></li>
        </ul>
        <ul class="nav2">
          <li><Link to='/signup'> Signup </Link></li>
          <li><Link to='/login'> Login </Link></li>
        </ul>
    </nav>
  )
}
 
export default navbar;