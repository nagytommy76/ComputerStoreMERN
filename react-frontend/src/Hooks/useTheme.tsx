import { createTheme } from '@mui/material'
import { useAppSelector } from '../app/hooks'

const useMaterialTheme = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)

   const customMUITheme = createTheme(
      isDarkTheme
         ? {
              palette: {
                 mode: 'dark',
                 primary: {
                    main: '#df730e'
                 },
                 secondary: {
                    main: '#FFF'
                 },
                 text: {
                    primary: '#FFF',
                    secondary: '#000'
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
                    secondary: '#FFF'
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
