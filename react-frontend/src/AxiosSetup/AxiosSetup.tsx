import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

import { logoutUser, setAccessToken } from '../app/slices/AuthSlice'
import { restoreUserDetails } from '../app/slices/Checkout/UserDetailsSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
// import { store } from '../app/store'

// Az app megnyitásakor, ha a user ba van jelentkezve megvizsgálom, hogy érvényes-e az accessToken-je
// Ha nem akkor a refreshToken-nel kérek egy újat,
// Ha az sem érvényes kiléptetem és be kell újra lépnie

const useAxiosSetup = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const accessToken = useAppSelector(state => state.auth.accessToken)
   const refreshToken = useAppSelector(state => state.auth.refreshToken)

   const DEPLOY_URL = 'https://computerstorebackend.firebaseapp.com/'
   // const PRODUCTION_URL = 'http://localhost:3000'
   // Docker port
   const DOCKER_FRONTEND_URL = 'http://localhost:8080'
   const DOCKER_BACKEND_URL = 'http://localhost:5040/api'
   // axios.defaults.baseURL = 'http://localhost:5050/api'
   axios.defaults.baseURL = DOCKER_BACKEND_URL
   // axios.defaults.baseURL = 'https://compstorebackend.herokuapp.com/api'

   axios.defaults.headers.common['Content-Type'] = 'Application/json'
   axios.defaults.headers.common['Access-Control-Allow-Origin'] = DOCKER_FRONTEND_URL
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
                           dispatch(setAccessToken(newAccessToken.data))
                           error.config.headers.Authorization = `Barer ${newAccessToken.data}`
                           return axios.request(error.config)
                        }
                     })
                     .catch(error => {
                        if (error.response.data.errorMessage === 'refresh token expired') {
                           navigate('/login', {
                              state: {
                                 isFailure: true,
                                 message: 'Kérlek, jelentkezz be újra!',
                              },
                           })
                           dispatch(restoreUserDetails())
                           dispatch(logoutUser())
                        }
                     })
               } else if (error.response.data.errorMessage === 'user is not admin') {
                  // Ha valaki ide keveredne és nem admin...
                  navigate('/login', {
                     state: { isFailure: true, message: 'Nem vagy jó helyen!!! :)' },
                  })
                  dispatch(restoreUserDetails())
                  dispatch(logoutUser())
               }
            }
            if (error.response?.status === 401) {
               // Itt pedig be kell lépni mert a refres token se jó
               navigate('/login', {
                  state: { isFailure: true, message: 'Kérlek, jelentkezz be újra!' },
               })
               dispatch(restoreUserDetails())
               dispatch(logoutUser())
            }
            return await Promise.reject(error)
         }
      )
   }, [accessToken, navigate, refreshToken, dispatch])
}

export default useAxiosSetup

// https://bilot.group/articles/using-react-router-inside-axios-interceptors/

// https://github.com/axios/axios/issues/934
// https://github.com/axios/axios/issues/1266
// https://medium.com/swlh/authentication-using-jwt-and-refresh-token-part-2-a86150d25152
