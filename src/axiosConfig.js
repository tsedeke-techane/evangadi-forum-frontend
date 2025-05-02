import axios from 'axios';

const axoisBaseURL = axios.create({
  baseURL: 'http://localhost:3000/api'

});

export default axoisBaseURL;