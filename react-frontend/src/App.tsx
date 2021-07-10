import React, { useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import Navbar from './page/Navbar/Navbar'
import GuestRoute from './GuestRoute'
import ProtectedRoute from './ProtectedRoute'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { logoutUser, setAccessToken } from './app/slices/AuthSlice'

const Login = React.lazy(() => import('./page/Auth/Login/Login'))
const Register = React.lazy(() => import('./page/Auth/Register/Register'))
const Welcome = React.lazy(() => import('./page/Welcome/Welcome'))
const Page404 = React.lazy(() => import('./page/404/Page404'))

const Vga = React.lazy(() => import('./page/ShopPages/Vga/Vga'))
const VgaDetails = React.lazy(() => import('./page/ShopPages/Vga/VgaDetails/VgaDetails'))

axios.defaults.baseURL = 'http://localhost:5050/api'
axios.defaults.headers['Content-Type'] = 'Application/json'

const App = () => {
   const dispatch = useAppDispatch()
   const history = useHistory()
   // Az app megnyitásakor, ha a user ba van jelentkezve megvizsgálom, hogy érvényes-e az accessToken-je
   // Ha nem akkor a refreshToken-nel kérek egy újat,
   // Ha az sem érvényes kiléptetem és be kell újra lépnie
   const accessToken = useAppSelector((state) => state.auth.accessToken)
   const refreshToken = useAppSelector((state) => state.auth.refreshToken)
   const isUserLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   useEffect(() => {
      // https://medium.com/swlh/authentication-using-jwt-and-refresh-token-part-2-a86150d25152
      if (isUserLoggedIn) {
         axios.defaults.headers.common['Authorization'] = `Barer ${accessToken}`
         axios
            .post('/auth/check-access-token')
            .then(() => {})
            .catch((error: AxiosError) => {
               // Ha 403/Forbidden a response akkor lejárt
               if (error.response?.status === 403) {
                  axios
                     .post('/auth/refresh-token', {
                        refreshToken
                     })
                     // Kapunk egy új access tokent
                     .then((newAccessToken) => {
                        dispatch(setAccessToken(newAccessToken.data))
                        axios.defaults.headers.common['Authorization'] = `Barer ${accessToken}`
                     })
                     // Lejárt a refresh token, be kell lépni újra
                     .catch((refreshTokenExpiredError: AxiosError) => {
                        if (refreshTokenExpiredError.response?.status === 403) {
                           dispatch(logoutUser())
                           history?.push('/login')
                        }
                     })
               }
            })
      }
   }, [accessToken, dispatch, history, isUserLoggedIn, refreshToken])
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
         <BrowserRouter>
            <GlobalStyles />
            <Navbar />
            <React.Suspense fallback={<h1>Tötlés...</h1>}>
               <Switch>
                  <Route path='/' exact component={Welcome} />
                  <GuestRoute path='/register' component={Register} />
                  <GuestRoute path='/login' component={Login} />
                  <Route path='/vga' component={Vga} />
                  <ProtectedRoute path='/vga-details' component={VgaDetails} />
                  <Route component={Page404} />
               </Switch>
            </React.Suspense>
         </BrowserRouter>
      </ThemeProvider>
   )
}

export default App
