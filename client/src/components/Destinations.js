import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
const Destinations = () => {
  return (
    <div>
      <img class="countrypic" src="/client/src/paris(1).jpg"/>
      <button>
        <Link to='/citypage'>La destination</Link>
      </button>
    </div>
  )
}
 
export default Destinations;