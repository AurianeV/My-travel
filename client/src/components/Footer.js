import React from 'react';
import { Link } from 'react-router-dom';
 
const Footer = () => {
  return (
    <footer>
      <ul>
      <li><img class="insta"  src="/insta.png" href=""  /></li>
          <li><img onClickclass="facebook"  src="/facebook.png" href=""  /></li>
          <li><img class="twitter"  src="/twiter.png" href=""  /></li>
          <li><img class="mail"  src="/mail.png" href=""  /></li>
        </ul>
    </footer>
  )
}
 
export default Footer;