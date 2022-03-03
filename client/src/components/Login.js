import React, { Component} from 'react';
import authentification from '../services/authentification';
import { Link } from 'react-router-dom';

 
class Login extends Component {

  state = {email: "", password: "", error:""}

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
 
  authentification.login(email, password)
      .then(response => {
          this.setState({error: ""});
          this.setState({ email: "", password: "" });
          this.props.updateUser(response)
          this.props.history.push('/user')
      })
      .catch(err => this.setState({error: err.response.data.errorMessage}))

  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
  return (
    <div class="logingeneral">
        <div>
          <img class="travelpic" src="/pictravel3.png"/>
        </div>
    <div class="logindiv">
    <h1 class="h1login">Prêt à découvrir le monde ?</h1>
    <div>
      <form class="loginform" onSubmit={this.handleFormSubmit}>
      <label for="input-email"></label>
      <input class="lab"
        type="text"
        id="input-email"
        name="email"
        placeholder="example@gmail.com"
        value={this.state.email} onChange={e => this.handleChange(e)}
      />
      <label  for="input-password"></label>
      <input class="lab"
        type="password"
        name="password"
        id="input-password"
        placeholder="********"
        value={this.state.password} onChange={e => this.handleChange(e)}
      />
        <button class="btnlogin" type="submit">Login</button>
        {this.state.error && (<p>{this.state.error}</p>)}
    </form>
    <p>Don't have account? 
         <button class="notcount"> <Link to={"/signup"}>Register</Link> </button>
    </p>
    </div>
  </div>
   </div>
  )
}}
 
export default Login;