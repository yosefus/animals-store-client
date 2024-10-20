import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export const AXIOS = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

// Adding request and response interceptors
AXIOS.interceptors.response.use(
   (response) => {
     // If the response is successful (status code 2xx), just return the response
     return response;
   },
   (error) => {
     // Handle error response
     if (error.response) {
       // If there is a message in the response, throw it as an error
       const errorMessage = error.response.data.message || 'An error occurred';
       throw new Error(errorMessage);
     } else if (error.request) {
       // The request was made but no response was received
       throw new Error('No response received from the server');
     } else {
       // Something happened in setting up the request that triggered an error
       throw new Error(error.message || 'An error occurred');
     }
   }
 );



