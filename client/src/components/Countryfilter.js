import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import destinations from '../services/destinations';

class Countryfilter extends Component {
  
  // state = {
  //   query: {},
  //   isChecked: false
  // } 

  handleFormSubmit = (event) => {
    event.preventDefault(); // stop refresh page

    console.log('coucou')

    console.log('all continent checkboxes:', event.target.continent) // <form>

    const continents = []
    event.target.continent.forEach(el => {
      if (el.checked) {
        continents.push(el.value)
      }
    })
    console.log('continents=', continents)
     // faire const aussi pour les autres champs

    // const continent = this.state.continent;
    // const temperature = this.state.temperature;
    // const bestperiod = this.state.bestperiod;
    // const mood = this.state.mood;

    // destinations.getResults(continent, temperature, bestperiod, mood)
    //   .then(response => {
    //     this.setState({ query: this.state.query });
    //     console.log(this.props)
    //     console.log(response)
    //     this.props.history.push('/resultats')
    //   })
    //   .catch(error => console.log(error))
  }

  // handleChange = (event) => {
  //   this.setState({isChecked : event.target.checked});
  // }


  /*RENDER STARTS HERE*/ //metter les label dans input et changer les value et names cf idem que EUrope

  render(){
  return (
    <div class="divp">
      <form onSubmit={this.handleFormSubmit}> 
        <h1>Continents to Explore</h1>

        <section id="inputdiv">
          <div id="field">
            <input type="checkbox" value="afrique" name="continent"   />
            <label for="scales">Africa</label>
          </div>
          <div id="field">
            <label>
              <input type="checkbox" value="europe" name="continent"  />
              Europe
            </label>
          </div>
          <div id="field">
            <input type="checkbox" value="asie" name="continent" />
            <label for="asie">Asia</label>
          </div>
          <div id="field">
            <input type="checkbox" value="océanie" name="continent" />
            <label for="océanie">Oceania</label>
          </div>
          <div id="field">
            <input type="checkbox" value="ameriequen" name="continent" />
            <label for="ameriquen">North America</label>
          </div>
          <div id="field">
            <input type="checkbox" value="ameriques" name="continent" />
            <label for="ameriques">South America</label>
          </div>
          <div id="field">
            <input type="checkbox" value="antarctique" name="continent" />
            <label for="antarctique">Antarctic</label>
          </div>
        </section>

        <h1>When I want to leave</h1>
        <section class="inputdiv2" >
          <div>
            <div id="field">
              <input type="checkbox" id="janvier" name="janvier"  />
              <label for="janvier">January</label>
            </div>
            <div id="field">
              <input type="checkbox" id="février" name="févier" />
              <label for="février">February</label>
            </div>
            <div id="field">
              <input type="checkbox" id="mars" name="mars" />
              <label for="mars">March</label>
            </div>
            <div id="field">
              <input type="checkbox" id="april" name="april" />
              <label for="april">April</label>
            </div>
            <div id="field">
              <input type="checkbox" id="may" name="may" />
              <label for="may">May</label>
            </div>
            <div id="field">
              <input type="checkbox" id="june" name="june" />
              <label for="june">June</label>
            </div>
          </div>
          <div>
            <div id="field">
              <input type="checkbox" id="july" name="july" />
              <label for="july">July</label>
            </div>
            <div id="field">
              <input type="checkbox" id="august" name="august" />
              <label for="august">August</label>
            </div>
            <div id="field">
              <input type="checkbox" id="september" name="september" />
              <label for="september">September</label>
            </div>
            <div id="field">
              <input type="checkbox" id="october" name="october" />
              <label for="october">October</label>
            </div>
            <div id="field">
              <input type="checkbox" id="november" name="november" />
              <label for="november">November</label>
            </div>
            <div id="field">
              <input type="checkbox" id="december" name="december" />
              <label for="december">December</label>
            </div>
          </div>
        </section>

        <h1>Temperatures</h1>

        <section id="inputdiv">
          <div id="field">
            <input type="checkbox" id="degré" name="degré" />
            <label for="degré">-10°C to 0°C</label>
          </div>
          <div id="field">
            <input type="checkbox" id="degré" name="degré" />
            <label for="degré">1°C to 10°C</label>
          </div>
          <div id="field">
            <input type="checkbox" id="degré" name="degré" />
            <label for="degré">11°C to 20°C</label>
          </div>
          <div id="field">
            <input type="checkbox" id="degré" name="degré" />
            <label for="degré">21°C to 30°C</label>
          </div>
          <div id="field">
            <input type="checkbox" id="degré" name="degré" />
            <label for="degré">31°C to 40°C</label>
          </div>
        </section>

        <h1>My Mood</h1>

        <section id="inputdiv">
          <div id="field">
            <input type="checkbox" id="randonnée" name="randonnée" />
            <label for="randonnée">Hiking <img src="" /></label>
          </div>
          <div id="field">
            <input type="checkbox" id="ski" name="ski" />
            <label for="ski">Ski <img src="" /></label>
          </div>
          <div id="field">
            <input type="checkbox" id="beach" name="beach" />
            <label for="beach">Beach <img src="" /></label>
          </div>
          <div id="field">
            <input type="checkbox" id="visit" name="visit"  />
            <label for="visit">Visit <img src="" /></label>
          </div>
        </section>
        <button class="btnlogin">Go !</button>
      </form>
    </div>
  )
}
}
export default Countryfilter;