import { useEffect } from 'react'
import axios from 'axios'
import { globalHistory } from '..'

import { useAppSelector } from '../app/hooks'
import { store } from '../app/store'
import { logoutUser, setAccessToken } from '../app/slices/AuthSlice'
import { restoreUserDetails } from '../app/slices/Checkout/UserDetailsSlice'

// Az app megnyitásakor, ha a user ba van jelentkezve megvizsgálom, hogy érvényes-e az accessToken-je
// Ha nem akkor a refreshToken-nel kérek egy újat,
// Ha az sem érvényes kiléptetem és be kell újra lépnie

const useAxiosSetup = () => {
   const accessToken = useAppSelector(state => state.auth.accessToken)
   const refreshToken = useAppSelector(state => state.auth.refreshToken)

   // const DEPLOY_URL = 'https://computerstorebackend.firebaseapp.com/'
   const PRODUCTION_URL = 'http://localhost:3000'

   axios.defaults.baseURL = 'http://localhost:5050/api'
   // axios.defaults.baseURL = 'https://compstorebackend.herokuapp.com/api'
   axios.defaults.headers.common['Content-Type'] = 'Application/json'
   axios.defaults.headers.common['Access-Control-Allow-Origin'] = PRODUCTION_URL
   axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
   axios.defaults.headers.common.Authorization = `Barer ${accessToken}`
   useEffect(() => {
      axios.interceptors.response.use(
         response => {
            return response
         },
         async error => {
            if (error.config && error.response && !error.config._retry && error.response.status === 403) {
               // Ekkor kell egy új accessToken (Forbidden) / 403 error, tehát lejárt az accessToken
               if (error.response.data.errorMessage === 'accessToken token expired') {
                  return axios
                     .post('/auth/refresh-token', { refreshToken })
                     .then(newAccessToken => {
                        if (newAccessToken.status === 200) {
                           store.dispatch(setAccessToken(newAccessToken.data))
                           error.config.headers.Authorization = `Barer ${newAccessToken.data}`
                           return axios.request(error.config)
                        }
                     })
                     .catch(error => {
                        if (error.response.data.errorMessage === 'refresh token expired') {
                           globalHistory.push('/login', { isFailure: true, message: 'Kérlek, lépj be újra!' })
                           store.dispatch(restoreUserDetails())
                           store.dispatch(logoutUser())
                        }
                     })
               } else if (error.response.data.errorMessage === 'user is not admin') {
                  // Ha valaki ide keveredne és nem admin...
                  globalHistory.push('/login', { isFailure: true, message: 'Nem vagy jó helyen! :)' })
                  store.dispatch(restoreUserDetails())
                  store.dispatch(logoutUser())
               }
            }
            if (error.response?.status === 401) {
               // Itt pedig be kell lépni mert a refres token se jó
               globalHistory.push('/login', { isFailure: true, message: 'Kérlek, lépj be újra!' })
               store.dispatch(restoreUserDetails())
               store.dispatch(logoutUser())
            }
            return await Promise.reject(error)
         }
      )
      // eslint-disable-next-line
   }, [accessToken])
}

export default useAxiosSetup

// https://bilot.group/articles/using-react-router-inside-axios-interceptors/

// https://github.com/axios/axios/issues/934
// https://github.com/axios/axios/issues/1266
// https://medium.com/swlh/authentication-using-jwt-and-refresh-token-part-2-a86150d25152
