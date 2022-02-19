import React, { Component} from 'react';
import authentification from '../services/authentification';
import { Link } from 'react-router-dom';

 
class Login extends Component {

  state = {email: "", password: ""}

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
 
  authentification.login(email, password)
      .then(response => {
          this.setState({ email: "", password: "" });
          this.props.updateUser(response)
          this.props.history.push('/user')
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
  return (
    <div>
    <h1>Prêt à découvrir le monde !</h1>
    <div>
      <form onSubmit={this.handleFormSubmit}>
      <label for="input-email"></label>
      <input
        type="text"
        id="input-email"
        name="email"
        placeholder="example@gmail.com"
        value={this.state.email} onChange={e => this.handleChange(e)}
      />
      <label  for="input-password"></label>
      <input
        type="password"
        name="password"
        id="input-password"
        placeholder="********"
        value={this.state.password} onChange={e => this.handleChange(e)}
      />
        <button type="submit">Login</button>
    </form>
    <p>Don't have account? 
          <Link to={"/signup"}>Register</Link>
    </p>
    </div>
  </div>
   
  )
}}
 
export default Login;