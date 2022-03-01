import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import destinations from '../services/destinations';
 
class Resultats extends React.Component {

 state = {
    results: [],
  }


 getresultats = () => {
  destinations.getDestinations(this.props.location.search)
    .then(data => {
      console.log('destinations repondues par le serveur:', data)
      this.setState({ results: data.destinations }) // [ {...}, {...}, {...}]
    })
    .catch(error => console.log("error from destinations", error))
}



componentDidMount = () => {
  this.getresultats()
}

render(){

  return (
    <div class="results-ctn">
    {
      this.state.results.map( (destination, idx) => {
        return (
        
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

export default Resultats;