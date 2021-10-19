import axios from 'axios';
console.log("Iniciado!")
export const api = axios.create({
  baseURL: 'http://localhost:3333',
});