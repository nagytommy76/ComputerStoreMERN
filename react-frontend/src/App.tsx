import React, { useCallback, useEffect, Suspense, lazy } from 'react'
import useAxiosSetup from './AxiosSetup/AxiosSetup'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GuestsRoute, AdminRoute, AuthProtectedRoute } from './Routes/ProtectedRoute'

import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import useMaterialTheme from './Hooks/useTheme'
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { fetchCartItemsFromDB } from './app/slices/CartSlice'

import PageSuspense from './SuspenseComponents/Page/PageSuspense'
import Navbar from './page/Navbar/Navbar'
import Footer from './page/Footer/Footer'

const Login = lazy(() => import('./page/Auth/Login/Login'))
const Register = lazy(() => import('./page/Auth/Register/Register'))
const Welcome = lazy(() => import('./page/Welcome/Welcome'))
const Page404 = lazy(() => import('./page/404/Page404'))
const Checkout = lazy(() => import('./page/CheckoutPage/Checkout'))

const Admin = lazy(() => import('./page/Admin/Admin'))

const Vga = lazy(() => import('./page/ShopPages/Vga/Vga'))
const VgaDetails = lazy(() => import('./page/ShopPages/Vga/VgaDetails/VgaDetails'))

const Cpu = lazy(() => import('./page/ShopPages/Cpu/Cpu'))
const CpuDetails = lazy(() => import('./page/ShopPages/Cpu/CpuDetails/CpuDetails'))

// https://lewiskori.com/blog/how-to-auto-refresh-jwts-using-axios-interceptors/
const App = () => {
   const dispatch = useAppDispatch()

   const accessToken = useAppSelector((state) => state.auth.accessToken)
   const refreshToken = useAppSelector((state) => state.auth.refreshToken)
   const userIsLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const isCartEmpty = useAppSelector((state) => state.cart.cartItems.length === 0)
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)

   const customMUITheme = useMaterialTheme()

   const initUserCartItems = useCallback(() => {
      if (userIsLoggedIn && isCartEmpty && accessToken !== null) dispatch(fetchCartItemsFromDB())
   }, [userIsLoggedIn, dispatch, isCartEmpty, accessToken])

   useAxiosSetup(accessToken, refreshToken)

   useEffect(() => {
      initUserCartItems()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [accessToken])

   return (
      <MUIThemeProvider theme={customMUITheme}>
         <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <BrowserRouter>
               <GlobalStyles />
               <Navbar />
               <Suspense fallback={<PageSuspense />}>
                  <Switch>
                     <Route path='/' exact component={Welcome} />
                     <Route path='/vga/vga-details' component={VgaDetails} />
                     <Route path='/cpu/cpu-details' component={CpuDetails} />
                     <Route path='/vga' component={Vga} />
                     <Route path='/cpu' component={Cpu} />
                     <GuestsRoute path='/register' component={Register} />
                     <GuestsRoute path='/login' component={Login} />
                     <AuthProtectedRoute path='/checkout' component={Checkout} />
                     <AdminRoute path='/admin' component={Admin} />
                     <Route component={Page404} />
                  </Switch>
               </Suspense>
               <Footer />
            </BrowserRouter>
         </ThemeProvider>
      </MUIThemeProvider>
   )
}

export default App
