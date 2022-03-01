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
    <div>
    {
      this.state.results.map( (destination, idx) => {
        return <p>{destination.city}</p>
    })} 
  
    </div>
  )
}
}

export default Resultats;