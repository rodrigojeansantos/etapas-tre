// npm install axios --save

const axios = require('axios').default

// import Axios from 'axios'

let apiJonnie = 'https://api.github.com/users/allobos'

const axiosGet = axios.get(apiJonnie)
  .then(response => console.log(response.data))
  .catch(error => console.log(error.message))