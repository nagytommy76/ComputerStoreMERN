import React, { useEffect } from 'react'
import axios from 'axios'
// import AxiosSetup from './AxiosSetup/AxiosSetup'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import Navbar from './page/Navbar/Navbar'
import { ProtectedRoute, GuestsRoute, AdminRoute } from './Routes/ProtectedRoute'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { setAccessToken } from './app/slices/AuthSlice'

const Login = React.lazy(() => import('./page/Auth/Login/Login'))
const Register = React.lazy(() => import('./page/Auth/Register/Register'))
const Welcome = React.lazy(() => import('./page/Welcome/Welcome'))
const Page404 = React.lazy(() => import('./page/404/Page404'))

const Vga = React.lazy(() => import('./page/ShopPages/Vga/Vga'))
const VgaDetails = React.lazy(() => import('./page/ShopPages/Vga/VgaDetails/VgaDetails'))
const Admin = React.lazy(() => import('./page/Admin/Admin'))

// https://lewiskori.com/blog/how-to-auto-refresh-jwts-using-axios-interceptors/
const App = () => {
   const dispatch = useAppDispatch()
   // const history = useHistory()
   // Az app megnyitásakor, ha a user ba van jelentkezve megvizsgálom, hogy érvényes-e az accessToken-je
   // Ha nem akkor a refreshToken-nel kérek egy újat,
   // Ha az sem érvényes kiléptetem és be kell újra lépnie
   // const isUserLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const accessToken = useAppSelector((state) => state.auth.accessToken)
   const refreshToken = useAppSelector((state) => state.auth.refreshToken)
   axios.defaults.baseURL = 'http://localhost:5050/api'
   axios.defaults.headers['Content-Type'] = 'Application/json'
   useEffect(() => {
      // AxiosSetup(accessToken, refreshToken)
      axios.interceptors.request.use(
         (config) => {
            if (accessToken) {
               console.log(config)
               // console.log(accessToken)
               config.headers.Authorization = `Barer ${accessToken}`
               // console.log(accessToken)
            }
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
                  if (newAccessToken.status === 200) {
                     console.log(error.response)
                     error.response.config._retry = true
                     error.response.config.__isRetryRequest = true
                     // console.log(newAccessToken.data)
                     dispatch(setAccessToken(newAccessToken.data))
                     error.response.headers.Authorization = `Barer ${newAccessToken.data}`
                     error.config.headers.Authorization = `Barer ${newAccessToken.data}`
                     axios.defaults.headers.common.Authorization = `Barer ${newAccessToken.data}`

                     return axios.request(error.config)
                  }
               })
            }
            // if (error.response?.status === 401) {
            //    console.log('401 Error van')
            //    // Itt pedig be kell lépni mert a refres token se jó
            //    // history.push('login)
            // }
            return Promise.reject(error)
         }
      )
      // console.log(accessToken)
   }, [])
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
         <BrowserRouter>
            <GlobalStyles />
            <Navbar />
            <React.Suspense fallback={<h1>Tötlés...</h1>}>
               <Switch>
                  <Route path='/' exact component={Welcome} />
                  <GuestsRoute path='/register' component={Register} />
                  <GuestsRoute path='/login' component={Login} />
                  <Route path='/vga' component={Vga} />
                  <ProtectedRoute path='/vga-details' component={VgaDetails} />
                  <AdminRoute path='/admin' component={Admin} />
                  <Route component={Page404} />
               </Switch>
            </React.Suspense>
         </BrowserRouter>
      </ThemeProvider>
   )
}

export default App
