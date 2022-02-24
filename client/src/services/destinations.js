import axios from 'axios';
export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || "http://localhost:5005"}`,
    withCredentials: true
  }),
  getDestinations() {
    return this.service.get('/destinations')
      .then(response => response.data)
  }
}
