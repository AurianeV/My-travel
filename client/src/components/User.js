import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authentification from '../services/authentification';
//import { Redirect } from 'react-router-dom';
//import axios from 'axios';
 
class User extends Component {
  onLogout = () => {
    console.log('just click')
    authentification.logout()
    .then( response => {
      console.log ('response du serveur suite au logout', response)
      this.props.history.push('/login')
      this.props.updateUser(null)
      
    })
    .catch(err => console.log('error', err))
  }

 render(){
  return (
    <div class="align">
      <img class="account"class="userimg" src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png"/>
      <h1 class="account"> {this.props.userInSession.firstname} {this.props.userInSession.lastname}</h1>
      <div class="account"> 
      
    </div>
     
    <div>
      {//this.state.userInSession && 
      <button class="btnlogin" onClick={this.onLogout}>Logout</button>
      }
    </div>
    </div>
  )};
}
 
export default User;