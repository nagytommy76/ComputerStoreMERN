import { amber } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { useAppSelector } from '../app/hooks'
import { huHU } from '@mui/material/locale'

const useMaterialTheme = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)

   const transitions = { create: () => 'all .15s linear' }

   const lightTheme = createTheme(
      {
         transitions,
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
            },
            action: {
               disabled: '#888'
            },
            background: {
               default: '#FFF',
               paper: '#FFF'
            }
         },
         typography: {
            fontFamily: 'Work+Sans'
         }
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
               contrastText: '#FFF'
            },
            secondary: {
               main: '#FFF'
            },
            text: {
               primary: '#FFF',
               secondary: '#fff'
            },
            action: {
               disabled: '#888'
            }
         },
         typography: {
            fontFamily: 'Work+Sans'
         }
      },
      huHU
   )

   return createTheme(isDarkTheme ? darkTheme : lightTheme, {})
}

//  main: '#df730e'

export default useMaterialTheme
