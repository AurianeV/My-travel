import React from 'react';
import { Link } from 'react-router-dom';
 
const Footer = () => {
  return (
    <footer>
      <ul>
          <li><a href="https://www.instagram.com/?hl=fr"><img class="insta"  src="/insta.png"/></a></li>
          <li><a href="https://fr-fr.facebook.com/"><img class="facebook"  src="/facebook.png"/></a></li>
          <li><a href="https://twitter.com/?lang=fr"><img class="twitter"  src="/twiter.png"/></a></li>
          <li><a href="https://www.google.com/intl/fr/gmail/about/policy/"><img class="mail"  src="/mail.png"/></a></li>
        </ul>
    </footer>
  )
}
 
export default Footer;