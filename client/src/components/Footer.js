import React from 'react';
import { Link } from 'react-router-dom';
 
const Footer = () => {
  return (
    <footer>
      <ul>
         <li><Link to='/destinations'> Idées de Destinations </Link></li>
          <li><Link to='/favoris'> Mes Destinations </Link></li>
          <li><Link to='/user'> Mon Compte </Link></li>
        </ul>
      <div>
      <a href="http://twitter.com/share" class="twitter-share-button" 
      data-count="vertical" data-via="InfoWebMaster">Tweeter  </a>
      </div>
    </footer>
  )
}
 
export default Footer;