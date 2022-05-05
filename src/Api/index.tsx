import axios from 'axios';

export const BASE_URL = "/api/";

export default axios.create({
  baseURL: 'https://mindicador.cl',
  headers: {
    "Content-type": "application/json"
  }
});