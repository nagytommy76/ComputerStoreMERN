import axios from 'axios'

const DEVELOPMENT_URL = 'http://localhost:3000'

const isAxiosError = axios.isAxiosError
const axiosInstance = axios.create({
   // baseURL: 'https://compstorebackend.herokuapp.com/api',
   baseURL: 'http://localhost:5040/api',
   // baseURL: 'http://localhost:5050/api',
   headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': DEVELOPMENT_URL,
      'Access-Control-Allow-Credentials': 'true',
   },
})

export * from 'axios'
export { axiosInstance, isAxiosError }
