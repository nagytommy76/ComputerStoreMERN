import axios from 'axios'

const DEVELOPMENT_URL = 'http://localhost:3000'
// const PRODUCTION_URL = 'https://computerstorebackend.firebaseapp.com'
const PRODUCTION_URL = 'https://computerstoreproject.firebaseapp.com'

const isAxiosError = axios.isAxiosError
const axiosInstance = axios.create({
   // baseURL: 'https://compstorebackend.herokuapp.com/api',
   // baseURL: 'http://localhost:5040/api',
   baseURL: 'http://localhost:5050/api',
   // withCredentials: true,
   headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': DEVELOPMENT_URL,
      // 'Access-Control-Allow-Origin': PRODUCTION_URL,
      'Access-Control-Allow-Credentials': 'true',
   },
})

export * from 'axios'
export { axiosInstance, isAxiosError }
