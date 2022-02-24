import React, { Component } from 'react';
import destinations from '../services/destinations'
import { Link } from 'react-router-dom';


class Destinations extends React.Component{
  state = {
    destinations : []
  }

  getpays = () =>{
    destinations.getDestinations()
    .then(destinations => {
     this.setState({ destinations: destinations })
    })
   .catch(error => console.log("error from destinations", error))
  }


  componentDidMount = () => {
    this.getpays()
    console.log("this state destinations", this.state.destinations)
  
   }
  render(){

    console.log('state inside render, 0 city', this.state.destinations[0])
     if(this.state.destinations.length === 0){
       return <p>Loading</p>
      }
      else {return (
        <div>
          toto
        </div>
    )}
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