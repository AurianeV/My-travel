import React, { Component } from 'react';
import '../components/Homepage.css';
import { Link } from 'react-router-dom';


class Homepage extends Component{


  render(){
        return(
          <div>
              
            <img class="backgroundpic" src="/imageback.png"/>

            <button>
                    <Link to='/countryfilter'>Recherche Destinations</Link>
            </button>
                  
                  
          </div>
          )
      }
  }
  
export default Homepage;
  
 
