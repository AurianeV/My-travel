import React  from 'react';
import { Link } from 'react-router-dom';

const Countryfilter = () => {
  const islogged = false
  return (
    <div>
      <h1>Continents à Explorer</h1>
      <div>
      <input type="checkbox" id="afrique" name="afrique"/>
      <label for="scales">Afrique</label>
    </div>
    <div>
      <input type="checkbox" id="europe" name="europe"/>
      <label for="europe">Europe</label>
    </div>
    <div>
      <input type="checkbox" id="asie" name="asie"/>
      <label for="asie">Asie</label>
    </div>
    <div>
      <input type="checkbox" id="océanie" name="océanie"/>
      <label for="océanie">Océanie</label>
    </div>
    <div>
      <input type="checkbox" id="ameriequen" name="ameriquen"/>
      <label for="ameriquen">Amérique du Nord</label>
    </div>
    <div>
      <input type="checkbox" id="ameriques" name="amreriques"/>
      <label for="ameriques">Amérique du Sud</label>
    </div>
    <div>
      <input type="checkbox" id="antarctique" name="antarctique"/>
      <label for="antarctique">Antarctique</label>
    </div>

    <h1>Je veux partir en</h1>
    <div>
      <input type="checkbox" id="janvier" name="janvier"/>
      <label for="janvier">Janvier</label>
    </div>

    <h1>Températures</h1>
    <div>
      <input type="checkbox" id="degré" name="degré"/>
      <label for="degré">de 10°C à 0°C</label>
    </div>

    <h1>Je suis plutôt</h1>
    <div>
      <input type="checkbox" id="randonnée" name="randonnée"/>
      <label for="randonnée">Randonnée</label>
    </div>

    <button><Link to='/resultats'>Go !</Link></button>

      {islogged ? ("") : (
      <div>
        <p>Merci de vous login!</p>
        <Link to="/login">Login</Link>
      </div>
      )}
    </div>
  )
}
 
export default Countryfilter;