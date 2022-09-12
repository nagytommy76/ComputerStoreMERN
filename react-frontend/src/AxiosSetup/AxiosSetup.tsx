import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { axiosInstance as axios } from './AxiosInstance'
import { useCookies } from 'react-cookie'

import { logoutUser, setAccessToken } from '../app/slices/AuthSlice'
import { restoreUserDetails } from '../app/slices/Checkout/UserDetailsSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'

// Az app megnyitásakor, ha a user ba van jelentkezve megvizsgálom, hogy érvényes-e az accessToken-je
// Ha nem akkor a refreshToken-nel kérek egy újat,
// Ha az sem érvényes kiléptetem és be kell újra lépnie

const useAxiosSetup = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   // const accessToken = useAppSelector(state => state.auth.accessToken)
   // const refreshToken = useAppSelector(state => state.auth.refreshToken)

   const [cookies, setCookies] = useCookies(['accessToken'])
   // console.log(cookies)
   const refreshToken = cookies.accessToken?.refreshToken
   const accessToken = cookies.accessToken?.accessToken

   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
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
                     .post('/auth/refresh-token')
                     .then(newAccessToken => {
                        if (newAccessToken.status === 200) {
                           dispatch(setAccessToken(newAccessToken.data))
                           error.config.headers.Authorization = `Bearer ${newAccessToken.data}`
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
   }, [navigate, refreshToken, dispatch])
}

export default useAxiosSetup

// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81
// https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#introduction-what-is-a-jwt

// https://bilot.group/articles/using-react-router-inside-axios-interceptors/

// https://github.com/axios/axios/issues/934
// https://github.com/axios/axios/issues/1266
// https://medium.com/swlh/authentication-using-jwt-and-refresh-token-part-2-a86150d25152
