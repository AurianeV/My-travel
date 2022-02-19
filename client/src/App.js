import React, { Component } from 'react';
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
import authentification from './services/authentification';


// 1. redirect
// 2. state user
// 3. /desitiinations/:id

class App extends Component {

  state = {
    user: {}
   
  }


  fetchUser = () => {
    if (!this.state.user._id) {
      authentification.loggedin()
        .then(data => this.setState({user: data}))
        .catch(err => this.setState({user: false}))
      ;
    } else {
      console.log('user already in the state')
    }
  };

 
  updateUser = (data) => {
    this.setState({user: data});
  };

  // state user (transformer en class-component)
  render(){
    console.log(this.state.user)
  return (
    <div className="App">
      <header>
      <Navbar />
      

      <Switch>
          <Route path='/homepage' component={Homepage}/>
          <Route path='/destinations' component={Destinations}/> {/* a l'interieur de Desintinatino this.props.match.params.id */}
          <Route path='/favoris' component={Favoris}/>
          <Route path='/user' render={(props) => <User userInSession = {this.state.user}/>}/>
          <Route path='/signup' render={(props) => <Signup history={props.history} updateUser={props.updateUser} />}/>
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
}

export default App;
