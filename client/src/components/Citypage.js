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
        <div class="globaldiv">
        <section class="divsize">
          <img class="pic"  src={this.state.ville.image} />
        </section>
        <section class="middle" class="divsize">
          <h1>{this.state.ville.city}</h1>
          <h3>{this.state.ville.country}, {this.state.ville.continent}</h3>
          <p class="text">"{this.state.ville.text}"</p>
        </section>
        </div>
        <section class="bottom">
          <article class="art">
          <h1>❣️</h1>
          <h3>Incontournables</h3>
          <p>{this.state.ville.incontournables}</p>
          </article>
          <article class="art">
          <h1>📅</h1>
          <h3>Best Period</h3>
          <p>{this.state.ville.bestperiod}</p>
          </article>
          <article class="art">
          <h1>🌡️</h1>
          <h3>Temperatures</h3>
          <p>{this.state.ville.variations}</p>
          </article>
        </section>
      </div>
    )
  }
}
 
export default Citypage;