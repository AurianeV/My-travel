import axios from 'axios';
export default {
  service: axios.create({
    baseURL: `${process.env.REACT_APP_APIURL || "http://localhost:5005"}`,
    withCredentials: true
  }),
  getDestinations() {

  /* NO DEFINED CHECK ON TUESDAY
  const myquerystring = querystring.stringify({
    continent: continents,
    bestperiod: periode,
    temperature: temperatures,
    mood: moods,
  })

    let qs = ""
    if (myquerystring) {
      qs = `?${myquerystring}`
    }
  
    return this.service.get(`/destinations${qs}`)
      .then(response => response.data)
  */
    return this.service.get('/destinations')
      .then(response => response.data)
  },
  getDestinationDetails(id) {
    return this.service.get(`/destinations/${id}`)
      .then(response => response.data)
  },
}
