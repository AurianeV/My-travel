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

    const periode = []
    event.target.bestperiod.forEach(el => {
      if (el.checked) {
        periode.push(el.value)
      }
    })
    console.log('periode=', periode)

    const temperatures = []
    event.target.temperature.forEach(el => {
      if (el.checked) {
        temperatures.push(el.value)
      }
    })
    console.log('temperatures=', temperatures)

    const moods = []
    event.target.mood.forEach(el => {
      if (el.checked) {
        moods.push(el.value)
      }
    })
    console.log('moods=', moods)
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
    <div >
      
      <h1>Looking for <img class="logo"  src="/MY Travel (200 × 200 px).png" /></h1>
      <form class="divp" onSubmit={this.handleFormSubmit}> 
        <h3>Continents to Explore</h3>

        <section id="inputdiv">
          <div class="test">
            <label>
              <input type="checkbox" value="africa" name="continent"/>  
              Africa
            </label>
            <label>
              <input type="checkbox" value="europe" name="continent"  />
              Europe
            </label>
            <label>
            <input type="checkbox" value="asia" name="continent" />
              Asia
            </label>
            <label>
            <input type="checkbox" value="oceania" name="continent" />
              Oceania
            </label>
            <label>
            <input type="checkbox" value="ameriequen" name="continent" />
              North America</label>
            <label>
            <input type="checkbox" value="ameriques" name="continent" />
              South America</label>
            <label>
            <input type="checkbox" value="antarctic" name="continent" />
              Antarctic
            </label>
          </div>
        </section>

        <h3>When I want to leave</h3>
        <section class="inputdiv2" >
          <div>
            <div id="field">
              <label>
              <input type="checkbox" value="january" name="bestperiod"  />
                January
              </label>
            </div>
            <div id="field">
              <label>
              <input type="checkbox" value="february" name="bestperiod"  />
                February
              </label>
            </div>
            <div id="field">
              <label>
              <input type="checkbox" value="march" name="bestperiod"  />
                March
              </label>
            </div>
            <div id="field">
              <label>
              <input type="checkbox" value="march" name="bestperiod"  />
                April
              </label>
            </div>
            <div id="field">
              <label>
              <input type="checkbox" value="may" name="bestperiod"  />
                May
              </label>
            </div>
            <div id="field">
              <label>
              <input type="checkbox" value="june" name="bestperiod"  />
                June
              </label>
            </div>
          </div>
          <div>
            <div id="field">
              <label>
              <input type="checkbox" value="july" name="bestperiod"  />
              July
              </label>
            </div>
            <div id="field">
              <label>
              <input type="checkbox" value="august" name="bestperiod"  />
                August
              </label>
            </div>
            <div id="field">
              <label>
              <input type="checkbox" value="september" name="bestperiod"  />
                September
              </label>
            </div>
            <div id="field">
              <label>
              <input type="checkbox" value="october" name="bestperiod"  />
                October
              </label>
            </div>
            <div id="field">
              <label>
              <input type="checkbox" value="november" name="bestperiod"  />  
                November
              </label>
            </div>
            <div id="field">
              <label>
              <input type="checkbox" value="december" name="bestperiod"  /> 
                December
              </label>
            </div>
          </div>
        </section>

        <h3>Temperatures</h3>

        <section id="inputdiv">
          <div >
            <label>
            <input type="checkbox" value="" name="temperature"  />
              -10°C to 0°C
            </label>
            <label>
            <input type="checkbox" value="" name="temperature"  />
              1°C to 10°C
            </label>
            <label>
            <input type="checkbox" value="" name="temperature"  />
              11°C to 20°C
            </label>
            <label>
            <input type="checkbox" value="" name="temperature"  />
              21°C to 30°C
            </label>
            <label>
            <input type="checkbox" value="" name="temperatures"  /> 
              31°C to 40°C
            </label>
          </div>
        </section>

        <h3>My Mood</h3>

        <section id="inputdiv">
          <div >
            <label>
            <input type="checkbox" value="hiking" name="mood"  /> 
              Hiking <img src="" />
            </label>
            <label>
            <input type="checkbox" value="ski" name="mood"  /> 
              Ski <img src="" />
            </label>
            <label>
            <input type="checkbox" value="beach" name="mood"  /> 
              Beach <img src="" />
            </label>
            <label>
            <input type="checkbox" value="visit" name="mood"  /> 
              Visit <img src="" />
            </label>
          </div>
        </section>
        <button class="btnlogin">Go !</button>
      </form>
    </div>
  )
}
}
export default Countryfilter;