import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
 
const Signup = () => {
  return (
    <div>
       <h1>Rejoignez nous !</h1>
    <form action="/signup" method="POST">
    <label for="input-firstname"></label>
      <input
        type="text"
        id="input-firstname"
        name="firstname"
        placeholder="First name"
      />
      <label for="input-lastname"></label>
      <input
        type="text"
        id="input-lastname"
        name="lastname"
        placeholder="Last name"
      />
      <label for="input-email"></label>
      <input
        type="text"
        id="input-email"
        name="email"
        placeholder="example@gmail.com"
      />

      <label for="input-password"></label>
      <input
        type="password"
        name="password"
        id="input-password"
        placeholder="********"
      />
      <button type="submit">Enregistrer</button>
    </form>
    </div>
  )
}
 
export default Signup;