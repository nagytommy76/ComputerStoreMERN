import React, { useEffect } from 'react'
import AxiosSetup from './AxiosSetup/AxiosSetup'
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom'
import Navbar from './page/Navbar/Navbar'
import { ProtectedRoute, GuestsRoute, AdminRoute } from './Routes/ProtectedRoute'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'

import { useAppSelector } from './app/hooks'

const Login = React.lazy(() => import('./page/Auth/Login/Login'))
const Register = React.lazy(() => import('./page/Auth/Register/Register'))
const Welcome = React.lazy(() => import('./page/Welcome/Welcome'))
const Page404 = React.lazy(() => import('./page/404/Page404'))

const Vga = React.lazy(() => import('./page/ShopPages/Vga/Vga'))
const VgaDetails = React.lazy(() => import('./page/ShopPages/Vga/VgaDetails/VgaDetails'))
const Admin = React.lazy(() => import('./page/Admin/Admin'))

// https://lewiskori.com/blog/how-to-auto-refresh-jwts-using-axios-interceptors/
const App = () => {
   const history = useHistory()
   // Az app megnyitásakor, ha a user ba van jelentkezve megvizsgálom, hogy érvényes-e az accessToken-je
   // Ha nem akkor a refreshToken-nel kérek egy újat,
   // Ha az sem érvényes kiléptetem és be kell újra lépnie
   // const isUserLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const accessToken = useAppSelector((state) => state.auth.accessToken)
   const refreshToken = useAppSelector((state) => state.auth.refreshToken)
   useEffect(() => {
      AxiosSetup(accessToken, refreshToken, history)
   }, [accessToken, refreshToken])
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
