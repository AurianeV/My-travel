import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authentification from '../services/authentification';
//import { Redirect } from 'react-router-dom';
//import axios from 'axios';
 
class User extends Component {
  onLogout = () => {
    authentification.logout()
    .then( response => {
      this.props.updateUser(null)
      this.props.history.push('/homepage')
    })
    .catch(err => console.log('error', err))
  }
  render(){
  return (
    <div>
      <h1>Mon Compte</h1>
      <p>Firstname:{this.props.userInSession.firstname}</p>
      <p>Lastname:{this.props.userInSession.lastname}</p>
      <p>Birthdate:</p>
      <p>Age:</p>
      <p>Gender:</p>
      <p>My Favorites:</p>
      <button><Link to='/edit'>Edit profile</Link></button>
      {//this.state.userInSession && 
      <button onClick={this.onLogout}>Logout</button>
      }
    </div>
  )};
}
 
export default User;