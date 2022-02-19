import axios from 'axios';
export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || ""}/api`,
    withCredentials: true
  }),
  login(email, password) {
    return this.service.post('/login', {email, password})
      .then(response => response.data)
  },
  signup(firstname, lastname, email, password) {
    return this.service.post('/signup', {
      firstname,
      lastname,
      email,
      password
    })
      .then(response => response.data)
  },
  loggedin() {
    return this.service.get('/loggedin')
      .then(response => response.data)
  },
  logout() {
    return this.service.get('/logout', {})
      .then(response => response.data)
  },
  /*edit(username, campus, course) {
    return this.service.post('/edit', {
      username,
      campus,
      course
    })
      .then(response => response.data)
  }, */
  upload(formdata) {
    return this.service.post('/upload', formdata)
      .then(response => response.data)
  }
};














