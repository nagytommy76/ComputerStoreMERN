import { amber } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { useAppSelector } from '../app/hooks'

const useMaterialTheme = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)

   const theme = createTheme(
      isDarkTheme
         ? {
              palette: {
                 mode: 'dark',
                 primary: {
                    main: amber[800],
                    contrastText: '#FFF'
                 },
                 secondary: {
                    main: '#FFF'
                 },
                 text: {
                    primary: '#FFF',
                    secondary: '#fff'
                 }
              },
              typography: {
                 fontFamily: 'Work+Sans'
              }
           }
         : {
              palette: {
                 mode: 'light',
                 primary: {
                    main: amber[800],
                    contrastText: '#000'
                 },
                 secondary: {
                    main: '#444'
                 },
                 text: {
                    primary: '#000',
                    secondary: '#000'
                 }
              },
              typography: {
                 fontFamily: 'Work+Sans'
              }
           }
   )

   const customMUITheme = createTheme(theme, {
      components: {
         MuiCard: {
            styleOverrides: {
               root: {
                  transition: 'all .15s linear'
               }
            }
         }
      }
   })

   return customMUITheme
}

//  main: '#df730e'

export default useMaterialTheme
