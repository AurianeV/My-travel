import React, { Component } from 'react';
import '../components/Homepage.css';
import { Link } from 'react-router-dom';


class Homepage extends Component{


  render(){
        return(
          <div>
              
            <img class="backgroundpic" src="/imageback.png"/>

            <button>
                    <Link to='/countryfilter'>Recherche Destinations</Link>
            </button>
            <h1>Quelques idées ...</h1>
            <section>
            <div class="divhome">
              <section>
              <img class="divhomeimg"src="https://images.unsplash.com/photo-1519049069275-dea996e1a314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
              </section>
              <section>
                <h2>Un peu d'air frais en montagne !</h2>
                <p>"Venez profiter des plus belles stations de sports d'hiver situées en altitude, dans la région est de la France !"</p>
                <button>
                  <Link to='/signup'>Register</Link>
                </button>
              </section>
            </div>
            <div class="divhome">
              <section>
                <h2>Profiter des belles plages</h2>
                <p>"Lézarder au soleil sur le sable et être bercé par le doux bruit des vagues !"</p>
                <button>
                  <Link to='/signup'>Register</Link>
                </button>
              </section>
              <section>
              <img class="divhomeimg"src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
              </section>
            </div>
            <div class="divhome">
              <section>
              <img class="divhomeimg"src="https://images.unsplash.com/photo-1609537937459-9a2e947cb16c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGFydGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
              </section>
              <section>
                <h2>L'âme d'un aventurier, le Grand Nord vous attend !</h2>
                <p>"Chaussez vos raquettes et parcourez les larges territoires de la Laponie !"</p>
                <button>
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
  
 
