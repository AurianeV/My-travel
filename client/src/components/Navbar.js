import React from 'react';
import { Link } from 'react-router-dom';


 
const navbar = () => { 
  return (
    <nav className="nav-style">
        <ul class="nav1">
          <li ><Link class="my" to='/homepage'> <img class="logo"  src="/MY Travel (200 × 200 px).png" /> </Link></li>
          <li><Link to='/destinations'> <img class="destinationideas"  src="/destinationideas.png" /> </Link></li>
          <li><Link to='/user'> <img class="myaccount"  src="/myaccount.png" /> </Link></li>
        </ul>
        <ul class="nav2">
          <li><Link to='/signup'> Signup </Link></li>
          <li><Link to='/login'> Login </Link></li>
        </ul>
    </nav>
  )
}
 
export default navbar;