import React, { Component } from 'react';
import '../components/Homepage.css';
import { Link } from 'react-router-dom';


class Homepage extends Component{


  render(){
        return(
            <div>
                  <h1>Hello !</h1>
            <button>
                    <Link to='/countryfilter'>Recherche Destinations</Link>
            </button>
                  
                  
            </div>
          )
      }
  }
  
export default Homepage;
  
 
