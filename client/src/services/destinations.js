import axios from 'axios';
export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || "http://localhost:5005"}`,
    withCredentials: true
  }),
  getDestinations(query="") {
    let url = '/destinations'
    
    if(query) url = url += query

    return this.service.get(url)
      .then(response => response.data)
  },
  getDestinationDetails(id) {
    return this.service.get(`/destinations/${id}`)
      .then(response => response.data)
  },
}
