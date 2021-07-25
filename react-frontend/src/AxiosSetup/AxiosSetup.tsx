import axios from 'axios'
import { store } from '../app/store'
import { generateNewAccessToken, logoutUser, setAccessToken } from '../app/slices/AuthSlice'

export default function AxiosSetup(accessToken: string | null, refreshToken: string | null) {
   axios.defaults.baseURL = 'http://localhost:5050/api'
   axios.defaults.headers['Content-Type'] = 'Application/json'

   axios.interceptors.request.use(
      (config) => {
         if (accessToken) config.headers.Authorization = `Barer ${accessToken}`
         return config
      },
      (error) => Promise.reject(error)
   )

   axios.interceptors.response.use(
      (response) => {
         return response
      },
      async (error) => {
         if (error.config && error.response && !error.config._retry && error.response.status === 403) {
            // Ekkor kell egy új accessToken (Forbidden)
            console.log('403 error, tehát lejárt az accessToken')
            return await axios.post('/auth/refresh-token', { refreshToken }).then((newAccessToken) => {
               error.config._retry = true
               if (newAccessToken.status === 200) {
                  console.log(newAccessToken.data)
                  store.dispatch(setAccessToken(newAccessToken.data))
                  error.config.headers['Authorization'] = `Barer ${newAccessToken.data}`
                  return axios(error.config)
               }
            })

            // store.dispatch(generateNewAccessToken(refreshToken)).then((response) => {
            //    console.log(response)
            //    error.config.headers['Authorization'] = `Barer ${response.payload}`
            //    // return axios.request(error.config)
            // })
         }
         // if (error.response?.status === 401) {
         //    console.log('401 Error van')
         //    // Itt pedig be kell lépni mert a refres token se jó
         //    // history.push('login)
         // }
         return Promise.reject(error)
      }
   )
}
// https://github.com/axios/axios/issues/934
// https://github.com/axios/axios/issues/1266
// https://medium.com/swlh/authentication-using-jwt-and-refresh-token-part-2-a86150d25152
//
