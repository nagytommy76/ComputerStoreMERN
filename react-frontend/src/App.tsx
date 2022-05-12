import React, { useCallback, useEffect, Suspense } from 'react'
import { useLocation } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import useMaterialTheme from './Hooks/useTheme'
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { fetchCartItemsFromDB, fillDBWithCartItemsAfterLogin } from './app/slices/CartSlice'

import Navbar from './page/Navbar/Navbar'
import Footer from './page/Footer/Footer'
import PageSuspense from './SuspenseComponents/Page/PageSuspense'
import Routes from './Routes'
import useAxiosSetup from './AxiosSetup/AxiosSetup'

// https://lewiskori.com/blog/how-to-auto-refresh-jwts-using-axios-interceptors/
const App = () => {
   const { state } = useLocation() as any
   useAxiosSetup()
   const dispatch = useAppDispatch()

   const accessToken = useAppSelector(state => state.auth.accessToken)
   const userIsLoggedIn = useAppSelector(state => state.auth.userLoggedIn)
   const isCartEmpty = useAppSelector(state => state.cart.cartItems.length === 0)
   const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)

   const customMUITheme = useMaterialTheme()

   const initUserCartItems = useCallback(() => {
      if (userIsLoggedIn && isCartEmpty && accessToken !== null) dispatch(fetchCartItemsFromDB())
   }, [userIsLoggedIn, dispatch, isCartEmpty, accessToken])

   useEffect(() => {
      initUserCartItems()
   }, [accessToken, initUserCartItems])

   // useEffect(() => {
   //    console.log(isCartEmpty)
   //    if (userIsLoggedIn && state && state.testing) {
   //       dispatch(fillDBWithCartItemsAfterLogin())
   //    }
   // }, [userIsLoggedIn, dispatch, isCartEmpty])

   return (
      <MUIThemeProvider theme={customMUITheme}>
         <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Navbar />
            <Suspense fallback={<PageSuspense />}>
               <Routes />
            </Suspense>
            <Footer />
         </ThemeProvider>
      </MUIThemeProvider>
   )
}

export default App
