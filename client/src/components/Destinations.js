import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Destinations extends Component{
  state = {
    destinations : []
  }
  componentDidMount = () => {
    // appel au service backend avec axios
    //LAB RECIPES exemple
    // dans le thn tu remplis le tableau de destination en utilisant 'setState'
  }
  /*
  return (
    <div className="destination-ctn">
      {
        this.state.destinations.map( (idx, destination) => {
          return (
            <div>
            <img className="destination" src={destination.image}/>
            <button>
              <Link to="/citypage/${destination._id}">La destination</Link>
            </button>
          </div>
          )
        })
      }

    </div>

  )*/
}
 
export default Destinations;