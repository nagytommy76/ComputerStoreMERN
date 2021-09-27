import { useEffect } from 'react'
import axios from 'axios'
import { store } from '../app/store'
import { logoutUser, setAccessToken } from '../app/slices/AuthSlice'
import { useHistory } from 'react-router'

// Az app megnyitásakor, ha a user ba van jelentkezve megvizsgálom, hogy érvényes-e az accessToken-je
// Ha nem akkor a refreshToken-nel kérek egy újat,
// Ha az sem érvényes kiléptetem és be kell újra lépnie

const useAxiosSetup = (accessToken: string | null, refreshToken: string | null) => {
   const history = useHistory()
   axios.defaults.baseURL = 'http://localhost:5050/api'
   axios.defaults.headers['Content-Type'] = 'Application/json'
   axios.defaults.headers.Authorization = `Barer ${accessToken}`

   useEffect(() => {
      axios.interceptors.response.use(
         (response) => {
            return response
         },
         async (error) => {
            if (error.config && error.response && !error.config._retry && error.response.status === 403) {
               // Ekkor kell egy új accessToken (Forbidden) / 403 error, tehát lejárt az accessToken
               console.log(error.response.data.errorMessage + ' 1')
               if (error.response.data.errorMessage === 'accessToken token expired') {
                  return await axios
                     .post('/auth/refresh-token', { refreshToken })
                     .then((newAccessToken) => {
                        if (newAccessToken.status === 200) {
                           store.dispatch(setAccessToken(newAccessToken.data))
                           error.config.headers.Authorization = `Barer ${newAccessToken.data}`
                           return axios.request(error.config)
                        }
                     })
                     .catch((error) => {
                        console.log(error.response.data.errorMessage + ' 2')
                        if (error.response.data.errorMessage === 'refresh token expired') {
                           store.dispatch(logoutUser())
                           history.push({ pathname: '/login', state: 'Kérlek, lépj be újra!' })
                        }
                     })
               } else if (error.response.data.errorMessage === 'user is not admin') {
                  // Ha valaki ide keveredne és nem admin...
                  store.dispatch(logoutUser())
                  history.push({ pathname: '/login', state: 'Nem vagy jó helyen! :)' })
               }
            }
            if (error.response?.status === 401) {
               // Itt pedig be kell lépni mert a refres token se jó
               console.log('401 response')
               store.dispatch(logoutUser())
               history.push({ pathname: '/login', state: 'Kérlek, lépj be újra!' })
            }
            return await Promise.reject(error)
         }
      )
   }, [accessToken])
}

export default useAxiosSetup

// https://github.com/axios/axios/issues/934
// https://github.com/axios/axios/issues/1266
// https://medium.com/swlh/authentication-using-jwt-and-refresh-token-part-2-a86150d25152
