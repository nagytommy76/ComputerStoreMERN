import { createTheme } from '@mui/material/styles'
import { useAppSelector } from '../app/hooks'

const useMaterialTheme = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)

   const customMUITheme = createTheme(
      isDarkTheme
         ? {
              palette: {
                 mode: 'dark',
                 primary: {
                    main: '#df730e',
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
                    main: '#df730e'
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
   return customMUITheme
}

export default useMaterialTheme
