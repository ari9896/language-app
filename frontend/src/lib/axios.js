import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5015/api', // this is the backend
  /*baseURL: import.meta.env.MODE == "development" ? 
    'http://localhost:5015/api' : '/api',*/
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})