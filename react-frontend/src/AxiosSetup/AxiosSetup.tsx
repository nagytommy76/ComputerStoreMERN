import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import useLogout from '../Hooks/useLogout'
import { axiosInstance as axios, isAxiosError } from './AxiosInstance'

import { setAccessToken } from '../app/slices/TokenSlice'
import { restoreUserDetails } from '../app/slices/Checkout/UserDetailsSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'

// Az app megnyitásakor, ha a user ba van jelentkezve megvizsgálom, hogy érvényes-e az accessToken-je
// Ha nem akkor a refreshToken-nel kérek egy újat,
// Ha az sem érvényes kiléptetem és be kell újra lépnie

const useAxiosSetup = () => {
   const logoutUser = useLogout()
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const accessToken = useAppSelector(state => state.token.accessToken)
   // const userIsLoggedIn = useAppSelector(state => state.auth.userLoggedIn)

   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`

   useEffect(() => {
      // const getNewAccessToken = async () => {
      //    try {
      //       const response = await axios.post('/auth/refresh-token')
      //       if (response.status === 200) {
      //          dispatch(setAccessToken(response.data))
      //          axios.defaults.headers.common.Authorization = `Bearer ${response.data}`
      //       }
      //    } catch (error) {
      //       if (isAxiosError(error)) {
      //          if (error.response?.data?.errorMessage === 'refresh token expired') {
      //             navigate('/login', {
      //                state: {
      //                   isFailure: true,
      //                   message: 'Kérlek, jelentkezz be újra!',
      //                },
      //             })
      //             dispatch(restoreUserDetails())
      //             logoutUser()
      //          }
      //          console.dir(error)
      //       }
      //    }
      // }
      // if (accessToken === null) {
      //    userIsLoggedIn && getNewAccessToken()
      // } else {
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
                        console.log('CSÁÁSÉD')
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
                           logoutUser()
                        }
                     })
               } else if (error.response.data.errorMessage === 'user is not admin') {
                  // Ha valaki ide keveredne és nem admin...
                  navigate('/login', {
                     state: { isFailure: true, message: 'Nem vagy jó helyen!!! :)' },
                  })
                  dispatch(restoreUserDetails())
                  logoutUser()
               }
            }
            if (error.response?.status === 401) {
               // Itt pedig be kell lépni mert a refres token se jó
               navigate('/login', {
                  state: { isFailure: true, message: 'Kérlek, jelentkezz be újra!' },
               })
               dispatch(restoreUserDetails())
               logoutUser()
            }
            return await Promise.reject(error)
         }
      )
   }, [navigate, dispatch, logoutUser])
}

export default useAxiosSetup

// https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/JSON_Web_Token_for_Java_Cheat_Sheet.md

// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81
// https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#introduction-what-is-a-jwt

// https://bilot.group/articles/using-react-router-inside-axios-interceptors/

// https://github.com/axios/axios/issues/934
// https://github.com/axios/axios/issues/1266
// https://medium.com/swlh/authentication-using-jwt-and-refresh-token-part-2-a86150d25152
