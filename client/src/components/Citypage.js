import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import destinations from '../services/destinations';
 
class Citypage extends React.Component {

  state = {
    ville: {}
  }
  getville = () => {
    const {params} = this.props.match
    destinations.getDestinationDetails(params.id)
      .then(data => {
        console.log('destinations repondues par le serveur 2:', data)
        this.setState({ ville: data.destination}) // [ {...}, {...}, {...}]
      })
      .catch(error => console.log("error from destinations", error))
  }

  componentDidMount = () => {
    this.getville()
    console.log("this state destinations", this.state.ville)
  }

 
  render() {
//Use componentDidMount
    return (
      <div className="destination-ctn">
        <p>{this.state.ville.city}</p>
        <p>{this.state.ville.country}</p>
        <img className="destination" src={this.state.ville.image} />
        <p>{this.state.ville.incontournables}</p>
      </div>
    )
  }
}
 
export default Citypage;