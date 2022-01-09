import React, { useCallback, useEffect, Suspense, lazy } from 'react'
import useAxiosSetup from './AxiosSetup/AxiosSetup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminRoute, AuthProtectedRoute, GuestsRoute } from './Routes/ProtectedRoute'
import ScrollToTop from './Routes/ScrollToTop'

import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import useMaterialTheme from './Hooks/useTheme'
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { fetchCartItemsFromDB } from './app/slices/CartSlice'

import Navbar from /*webpackChunkName: "Navbar"*/ './page/Navbar/Navbar'
import Footer from './page/Footer/Footer'
import PageSuspense from './SuspenseComponents/Page/PageSuspense'

const Login = lazy(() => import(/*webpackChunkName: "LoginPage"*/ './page/Auth/Login/Login'))
const Register = lazy(() => import(/*webpackChunkName: "RegisterPage"*/ './page/Auth/Register/Register'))
const EmailValidation = lazy(() => import(/*webpackChunkName: "EmailValidation"*/ './page/Auth/Validation/EmailValidation'))

const Welcome = lazy(() => import(/*webpackChunkName: "WelcomePage"*/ './page/Welcome/Welcome'))
const Page404 = lazy(() => import(/*webpackChunkName: "404Page"*/ './page/404/Page404'))
const Checkout = lazy(() => import(/*webpackChunkName: "Checkout"*/ './page/CheckoutPage/Checkout'))

const Admin = lazy(() => import('./page/Admin/Admin'))

const Vga = lazy(() => import('./page/ShopPages/Vga/Vga'))
const VgaDetails = lazy(() => import('./page/ShopPages/Vga/VgaDetails/VgaDetails'))

const Cpu = lazy(() => import('./page/ShopPages/Cpu/Cpu'))
const CpuDetails = lazy(() => import('./page/ShopPages/Cpu/CpuDetails/CpuDetails'))

// https://lewiskori.com/blog/how-to-auto-refresh-jwts-using-axios-interceptors/
const App = () => {
   const dispatch = useAppDispatch()

   const accessToken = useAppSelector((state) => state.auth.accessToken)
   const userIsLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const isCartEmpty = useAppSelector((state) => state.cart.cartItems.length === 0)
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)

   const customMUITheme = useMaterialTheme()

   const initUserCartItems = useCallback(() => {
      if (userIsLoggedIn && isCartEmpty && accessToken !== null) dispatch(fetchCartItemsFromDB())
   }, [userIsLoggedIn, dispatch, isCartEmpty, accessToken])

   useAxiosSetup()

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
                  <ScrollToTop>
                     <Routes>
                        <Route path='/' element={<Welcome />} />
                        <Route path='/vga/vga-details' element={<VgaDetails />} />
                        <Route path='/cpu/cpu-details' element={<CpuDetails />} />
                        <Route path='/vga' element={<Vga />} />
                        <Route path='/cpu' element={<Cpu />} />
                        <Route
                           path='/register'
                           element={
                              <GuestsRoute>
                                 <Register />
                              </GuestsRoute>
                           }
                        />
                        <Route
                           path='/login'
                           element={
                              <GuestsRoute>
                                 <Login />
                              </GuestsRoute>
                           }
                        />
                        <Route path='/email-confirm/:confirmCode' element={<EmailValidation />} />
                        <Route
                           path='/checkout'
                           element={
                              <AuthProtectedRoute>
                                 <Checkout />
                              </AuthProtectedRoute>
                           }
                        />
                        <Route
                           path='/admin/*'
                           element={
                              <AdminRoute>
                                 <Admin />
                              </AdminRoute>
                           }
                        />
                        <Route path='*' element={<Page404 />} />
                     </Routes>
                  </ScrollToTop>
               </Suspense>
               <Footer />
            </BrowserRouter>
         </ThemeProvider>
      </MUIThemeProvider>
   )
}

export default App
