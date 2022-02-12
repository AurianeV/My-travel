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
      </Switch>

      </header>
      
    
     
    </div>
  );
}

export default App;
