import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
const Resultats = () => {
  return (
    <div>
      <h1>Résultats de recherche</h1>
      <button>
        <Link to='/citypage'>La destination</Link>
      </button>
    </div>
  )
}
 
export default Resultats;