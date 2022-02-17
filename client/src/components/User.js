import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class User extends Component {
  
  render(){
  return (
    <div>
      <h1>Mon Compte</h1>
      <p>{this.props.userInSession.firstname}</p>
      <p>{this.props.userInSession.lastname}</p>
      
     
      <div>
        <p>Merci de vous login!</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )};
}
 
export default User;