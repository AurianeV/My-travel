import React  from 'react';
import { Link } from 'react-router-dom';

const Countryfilter = () => {
  const islogged = false
  return (
    <div class="divp">
      <h1>Continents to Explore</h1>
    <section id="inputdiv">
      <div id="field">
      <input type="checkbox" id="afrique" name="afrique"/>
      <label for="scales">Africa</label>
    </div>
    <div id="field">
      <input type="checkbox" id="europe" name="europe"/>
      <label for="europe">Europe</label>
    </div>
    <div id="field">
      <input type="checkbox" id="asie" name="asie"/>
      <label for="asie">Asia</label>
    </div>
    <div id="field">
      <input type="checkbox" id="océanie" name="océanie"/>
      <label for="océanie">Oceania</label>
    </div>
    <div id="field">
      <input type="checkbox" id="ameriequen" name="ameriquen"/>
      <label for="ameriquen">North America</label>
    </div>
    <div id="field">
      <input type="checkbox" id="ameriques" name="amreriques"/>
      <label for="ameriques">South America</label>
    </div>
    <div id="field">
      <input type="checkbox" id="antarctique" name="antarctique"/>
      <label for="antarctique">Antarctic</label>
    </div>
   </section> 
    <h1>When I want to leave</h1>
    <section  class="inputdiv2" >
    <div>
    <div id="field">
      <input type="checkbox" id="janvier" name="janvier"/>
      <label for="janvier">January</label>
    </div>
    <div id="field">
      <input type="checkbox" id="février" name="févier"/>
      <label for="février">February</label>
    </div>
    <div id="field">
      <input type="checkbox" id="mars" name="mars"/>
      <label for="mars">March</label>
    </div>
    <div id="field">
      <input type="checkbox" id="april" name="april"/>
      <label for="april">April</label>
    </div>
    <div id="field">
      <input type="checkbox" id="may" name="may"/>
      <label for="may">May</label>
    </div>
    <div id="field">
      <input type="checkbox" id="june" name="june"/>
      <label for="june">June</label>
    </div>
    </div>
    <div>
    <div id="field">
      <input type="checkbox" id="july" name="july"/>
      <label for="july">July</label>
    </div>
    <div id="field">
      <input type="checkbox" id="august" name="august"/>
      <label for="august">August</label>
    </div>
    <div id="field">
      <input type="checkbox" id="september" name="september"/>
      <label for="september">September</label>
    </div>
    <div id="field">
      <input type="checkbox" id="october" name="october"/>
      <label for="october">October</label>
    </div>
    <div id="field">
      <input type="checkbox" id="november" name="november"/>
      <label for="november">November</label>
    </div>
    <div id="field">
      <input type="checkbox" id="december" name="december"/>
      <label for="december">December</label>
    </div>
    </div>
    </section>

    <h1>Temperatures</h1>

    <section id="inputdiv">
    <div id="field">
      <input type="checkbox" id="degré" name="degré"/>
      <label for="degré">-10°C to 0°C</label>
    </div>
    <div id="field">
      <input type="checkbox" id="degré" name="degré"/>
      <label for="degré">1°C to 10°C</label>
    </div>
    <div id="field">
      <input type="checkbox" id="degré" name="degré"/>
      <label for="degré">11°C to 20°C</label>
    </div>
    <div id="field">
      <input type="checkbox" id="degré" name="degré"/>
      <label for="degré">21°C to 30°C</label>
    </div>
    <div id="field">
      <input type="checkbox" id="degré" name="degré"/>
      <label for="degré">31°C to 40°C</label>
    </div>
    </section>

    <h1>My Mood</h1>

    <section id="inputdiv">
    <div id="field">
      <input type="checkbox" id="randonnée" name="randonnée"/>
      <label for="randonnée">Hiking <img src=""/></label>
    </div>
    <div id="field">
      <input type="checkbox" id="ski" name="ski"/>
      <label for="ski">Ski <img src=""/></label>
    </div>
    <div id="field">
      <input type="checkbox" id="beach" name="beach"/>
      <label for="beach">Beach <img src=""/></label>
    </div>
    <div id="field">
      <input type="checkbox" id="visit" name="visit"/>
      <label for="visit">Visit <img src=""/></label>
    </div>
    </section>

    <button class="btnlogin"><Link to='/resultats'>Go !</Link></button>
  </div>
  )
}
 
export default Countryfilter;