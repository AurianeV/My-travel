import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Homepage extends Component{


  render(){
        return(
          <div>
              
            <img class="backgroundpic" src="/banniere.png"/>

            <button class="search_dest">
                  <Link to='/countryfilter'>Search destination ✈️ </Link>
            </button>
      
          <section>
            <div class="divhome">
              <section>
              <img class="divhomeimg"src="/ski.png"/>
              </section>
              <section>
                <h2>Un peu d'air frais en montagne !</h2>
                <p>Venez profiter des plus belles stations de sports d'hiver situées en altitude ! En vacances, l’une des premières choses à laquelle on aspire est le repos. Quoi de mieux que de le trouver au sommet, au cœur d’une nature apaisée, face à des paysages grandioses ? Les panoramas que propose la montagne contribuent à apporter cet apaisement recherché et conduisent assurément au bien-être total.</p>
                <button class="register">
                  <Link to='/signup'>Register</Link>
                </button>
              </section>
            </div>
            <div class="divhome2">
              <section>
                <h2>Profiter des belles plages</h2>
                <p>Lézarder au soleil sur le sable et être bercé par le doux bruit des vagues ! Le soleil, la baignade, du sable à perte de vue, des farnientes et des jeux aquatiques divers, voilà le résumé des vacances à la plage.</p>
                <button class="register">
                  <Link to='/signup'>Register</Link>
                </button>
              </section>
              <section>
              <img class="divhomeimg"src="/plage.png"/>
              </section>
            </div>
            <div class="divhome">
              <section>
              <img class="divhomeimg"src="/laponie.png"/>
              </section>
              <section>
                <h2>L'âme d'un aventurier, le Grand Nord vous attend !</h2>
                <p>Vous rêvez de grands espaces et de nature intacte ? Le grand nord vous fascine et vous attire ? Découvrez des destinations arctiques aux paysages gelés et aux étendues sans limite. L’espace grand nord vous promet un séjour inoubliable, où le temps s’arrête et la nature est reine. Groenland, Alaska, Sibérie, explorez des lieux sauvages et captivants.</p>
                <button class="register">
                  <Link to='/signup'>Register</Link>
                </button>
              </section>
            </div>
            </section> 
                  
                  
          </div>
          )
      }
  }
  
export default Homepage;
  
 
