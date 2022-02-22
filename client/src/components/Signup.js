import React, { Component } from 'react';
import authentification from '../services/authentification';
import { Link } from 'react-router-dom';

class Signup extends Component {
 
  state = { firstname: "", lastname: "", email: "", password: "" }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const email = this.state.email;
    const password = this.state.password;

    authentification.signup(firstname, lastname, email, password)
      .then(response => {
        this.setState({ firstname: "", lastname: "", email: "", password: "" });
        /*redirect vers userprofile*/
        console.log(this.props)
        console.log(response)
        this.props.updateUser(response)
        this.props.history.push('/user')
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div class="signupdiv">
        <h1>Rejoignez nous !</h1>
        <form class="signupform" onSubmit={this.handleFormSubmit} action="/signup" method="POST">
          <label for="input-firstname"></label>
          <input class="lab"
            type="text"
            name="firstname" value={this.state.firstname} onChange={e => this.handleChange(e)}
            placeholder="First name"
          />
          <label for="input-lastname"></label>
          <input class="lab"
            type="text" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)}
            placeholder="Last name"
          />
          <label for="input-email"></label>
          <input class="lab"
            type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)}
            placeholder="example@gmail.com"
          />

          <label  for="input-password"></label>
          <input class="lab"
            type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}
            placeholder="********"
          />
          <button class="btn" onClick={this.handleFormSubmit} type="submit">Enregistrer</button>
        </form>
        <p>Already have an account?
          <button>
            <Link to={"/login"}>Login</Link>
          </button>
        </p>
      </div>
    )
  }
};

export default Signup;