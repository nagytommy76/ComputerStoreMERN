import axios from 'axios'

const DEVELOPMENT_URL = 'http://localhost:3000'
const PRODUCTION_URL = 'https://computerstore.up.railway.app/api'

const isAxiosError = axios.isAxiosError
const axiosInstance = axios.create({
   // docker port
   // baseURL: DEVELOPMENT_URL,
   baseURL: PRODUCTION_URL,
   withCredentials: true,
   headers: {
      'Content-Type': 'application/json',
   },
})

export * from 'axios'
export { axiosInstance, isAxiosError }
