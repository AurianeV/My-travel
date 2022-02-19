import React  from 'react';
import { Link } from 'react-router-dom';

const Countryfilter = () => {
  const islogged = false
  return (
    <div>
      <h1>hahaha</h1>
      {islogged ? ("") : (
      <div>
        <p>Merci de vous login!</p>
        <Link to="/login">Login</Link>
      </div>
      )}
    </div>
  )
}
 
export default Countryfilter;