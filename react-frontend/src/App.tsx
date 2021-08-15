import React, { useCallback, useEffect, Suspense } from 'react'
import AxiosSetup from './AxiosSetup/AxiosSetup'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './page/Navbar/Navbar'
import PageSuspense from './SuspenseComponents/Page/PageSuspense'
import { ProtectedRoute, GuestsRoute, AdminRoute } from './Routes/ProtectedRoute'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { fetchCartItemsFromDB } from './app/slices/CartSlice'

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

   const accessToken = useAppSelector((state) => state.auth.accessToken)
   const refreshToken = useAppSelector((state) => state.auth.refreshToken)
   const userIsLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const isCartEmpty = useAppSelector((state) => state.cart.cartItems.length === 0)

   const initUserCartItems = useCallback(() => {
      if (userIsLoggedIn && isCartEmpty && accessToken !== null) dispatch(fetchCartItemsFromDB())
   }, [userIsLoggedIn, dispatch, isCartEmpty, accessToken])

   const InitAxios = useCallback(async () => {
      await AxiosSetup(accessToken, refreshToken)
   }, [accessToken, refreshToken])

   useEffect(() => {
      InitAxios()
      initUserCartItems()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [accessToken])

   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   return (
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
         <BrowserRouter>
            <GlobalStyles />
            <Navbar />
            <Suspense fallback={<PageSuspense />}>
               <Switch>
                  <Route path='/' exact component={Welcome} />
                  <GuestsRoute path='/register' component={Register} />
                  <GuestsRoute path='/login' component={Login} />
                  <ProtectedRoute path='/vga-details' component={VgaDetails} />
                  <AdminRoute path='/admin' component={Admin} />
                  <Route path='/vga' component={Vga} />
                  <Route component={Page404} />
               </Switch>
            </Suspense>
         </BrowserRouter>
      </ThemeProvider>
   )
}

export default App
