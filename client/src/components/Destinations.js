import React, { Component } from 'react';
import destinations from '../services/destinations'
import { Link } from 'react-router-dom';


class Destinations extends React.Component {
  state = {
    destinations: []
  }

  getpays = () => {
    destinations.getDestinations()
      .then(data => {
        console.log('destinations repondues par le serveur:', data)
        this.setState({ destinations: data.destinations }) // [ {...}, {...}, {...}]
      })
      .catch(error => console.log("error from destinations", error))
  }


  componentDidMount = () => {
    this.getpays()
    console.log("this state destinations", this.state.destinations)
  }

  render() {
    console.log('state inside render, 0 city', this.state.destinations[0])

    if (this.state.destinations.length === 2) {
      return <p>Loading</p>
    } else {
      return (
        <div className="destination">
          {
            this.state.destinations.map((destination, idx) => {
              console.log('destination=', destination)
              return (
                // nom pays, nom ville, image, lien

                
                <div class="divdestination">
                  <div class="blocdestination">
                    <img class="picdestination"  src={destination.image} />
                    <h1 class="cityname"> {destination.city} </h1>
                    <h3 class="countryname"> {destination.country} </h3>
                    
                      <Link class="btncity" to={`/citypage/${destination._id}`}>Je découvre cette ville</Link>
                    
                  
                  </div>
                 
                 
                </div>
              )
            })
          }
        </div>
      )
    }
  }
}

export default Destinations;