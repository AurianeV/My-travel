import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class User extends Component {
  
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
      <button>Logout</button>
    </div>
  )};
}
 
export default User;