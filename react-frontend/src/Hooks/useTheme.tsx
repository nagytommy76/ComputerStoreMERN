import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setTheme } from '../app/slices/ThemeSlice'

import { amber } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { huHU } from '@mui/material/locale'

const useMaterialTheme = () => {
   const dispatch = useAppDispatch()
   const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)

   const transitions = { create: () => 'all .15s linear' }

   useEffect(() => {
      try {
         const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
         if (darkThemeMq.matches) {
            // Theme set to dark.
            dispatch(setTheme(true))
         } else {
            // Theme set to light.
            dispatch(setTheme(false))
         }
      } catch (error) {
         console.log(error)
      }
   }, [dispatch])

   const lightTheme = createTheme(
      {
         transitions,
         palette: {
            mode: 'light',
            primary: {
               main: amber[800],
               contrastText: '#000',
            },
            secondary: {
               main: '#444',
            },
            text: {
               primary: '#000',
               secondary: '#000',
            },
            action: {
               disabled: '#888',
            },
            background: {
               default: '#FFF',
               paper: '#FFF',
            },
         },
         typography: {
            fontFamily: 'Work+Sans',
         },
      },
      huHU
   )

   const darkTheme = createTheme(
      {
         transitions,
         palette: {
            mode: 'dark',
            primary: {
               // main: '#ffc300',
               main: amber[800],
               contrastText: '#FFF',
            },
            secondary: {
               main: '#FFF',
            },
            text: {
               primary: '#FFF',
               secondary: '#fff',
            },
            action: {
               disabled: '#888',
            },
         },
         typography: {
            fontFamily: 'Work+Sans',
         },
      },
      huHU
   )

   return createTheme(isDarkTheme ? darkTheme : lightTheme, {})
}

//  main: '#df730e'

export default useMaterialTheme
