import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44376/api',
});

export default api;

