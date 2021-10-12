import axios from 'axios';

//Key_api 
export const key_api = '4b680ce4c188159492bcafc2610293a4';
//base URL
export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});