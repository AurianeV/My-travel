import React  from 'react';
 
const Login = () => {
  return (
    <div>
    <h1>Prêt à découvrir le monde !</h1>
    <div>
      <form>
      <label for="input-email"></label>
      <input
        type="text"
        id="input-email"
        name="email"
        placeholder="example@gmail.com"
      />
      <label  for="input-password"></label>
      <input
        type="password"
        name="password"
        id="input-password"
        placeholder="********"
      />
        <button type="submit">Login</button>
    </form>
    </div>
  </div>
   
  )
}
 
export default Login;