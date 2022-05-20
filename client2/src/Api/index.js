import axios from 'axios';

export default axios.create({
  baseURL: 'https://xurshid-bmi.herokuapp.com/api/',
});