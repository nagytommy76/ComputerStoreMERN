import React, { useCallback, useEffect, Suspense } from 'react'
import useAxiosSetup from './AxiosSetup/AxiosSetup'
import NavbarContextProvider from './page/Navbar/NavbarContext'

import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import useMaterialTheme from './Hooks/useTheme'
import { GlobalStyles } from './Theme/GlobalStyles'
import { lightTheme, darkTheme } from './Theme/Themes'

import { useAppDispatch, useAppSelector } from './app/hooks'
import { fetchCartItemsFromDB } from './app/slices/CartSlice'

import Navbar from './page/Navbar/Navbar'
import Footer from './page/Footer/Footer'
import PageSuspense from './SuspenseComponents/Page/PageSuspense'
import Routes from './Routes'
import ScrollToTopButton from './Routes/ScrollToTopButton'
import ScrollToTopWrapper from './Routes/ScrollToTop'

// https://lewiskori.com/blog/how-to-auto-refresh-jwts-using-axios-interceptors/
const App = () => {
   useAxiosSetup()
   const dispatch = useAppDispatch()

   const userIsLoggedIn = useAppSelector((state) => state.auth.userLoggedIn)
   const isCartEmpty = useAppSelector((state) => state.cart.cartItems.length === 0)
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)

   const customMUITheme = useMaterialTheme()

   const initUserCartItems = useCallback(() => {
      if (userIsLoggedIn && isCartEmpty) dispatch(fetchCartItemsFromDB())
   }, [userIsLoggedIn, dispatch, isCartEmpty])

   useEffect(() => {
      initUserCartItems()
   }, [initUserCartItems])

   return (
      <MUIThemeProvider theme={customMUITheme}>
         <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <ScrollToTopWrapper>
               <GlobalStyles />
               <NavbarContextProvider>
                  <Navbar />
               </NavbarContextProvider>
               <Suspense fallback={<PageSuspense />}>
                  <Routes />
               </Suspense>
               <Footer />
               <ScrollToTopButton />
            </ScrollToTopWrapper>
         </ThemeProvider>
      </MUIThemeProvider>
   )
}

export default App
