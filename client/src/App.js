import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Destinations from './components/Destinations';
import Favoris from './components/Favoris';
import User from './components/User';
import Signup from './components/Signup';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';
import Countryfilter from './components/Countryfilter';
import Citypage from './components/Citypage';
import Resultats from './components/Resultats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
      

      <Switch>
          <Route path='/homepage' component={Homepage}/>
          <Route path='/destinations' component={Destinations}/>
          <Route path='/favoris' component={Favoris}/>
          <Route path='/user' component={User}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/countryfilter' component={Countryfilter}/>
          <Route path='/citypage' component={Citypage}/>
          <Route path='/resultats' component={Resultats}/>
      </Switch>

      </header>
      <Footer />
    
     
    </div>
  );
}

export default App;
