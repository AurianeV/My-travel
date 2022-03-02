import React, { Component } from 'react';

import authentification from '../services/authentification';
import { Redirect } from 'react-router-dom';

export default class extends React.Component {

  logout = (event) => {
    authentification.logout()
      .then(response => {
        this.props.updateUser(false);
      });
  }

  handleUpload = (event) => {
    let formData = new FormData();
    formData.append('photo', event.target.files[0]);

    authentification.upload(formData)
      .then(response => {
        this.props.updateUser(response);
      })
    ;
  } 

  render() {
    if (this.props.user === false) return <Redirect to="/homepage" />

    return (
<div>
<h1>edit profil</h1>
</div>
      

 /*<div>
      <h1>Profile</h1>

     <div>     

      <p>
        Birthdate
        <span>{this.props.user.birthdate}</span>
      </p>

      <p>
        Age
        <span>{this.props.user.age}</span>
      </p>

      <p>
        Gender
        <span>{this.props.user.gender}</span>
      </p>

      <div className="cta">
        <button className="btn logout" onClick={this.logout}>Logout</button>
      </div>
    
      <form>
        <label>
          <img className="avatar" src={this.props.user.image || "https://material.io/tools/icons/static/icons/baseline-person-24px.svg"} />
          <input type="file" name="image" onChange={this.handleUpload} />
        </label>
        
      </form>

      </div>  
      </div>
  */
    )};
    } 