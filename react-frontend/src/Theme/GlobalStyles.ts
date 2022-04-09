import { createGlobalStyle } from 'styled-components'

export const mobileWindowSize = `950px`
export const largeWindowSize = '2000px'

export const backgroundColor = `#272c33`
// export const backgroundColor = `#000814`
// export const backgroundColor = `#2d3142`
// export const CardBackground = '#4f5d75'

export const footerHeight = '140px'

export const transitionSetup = `all .15s linear`

export const GlobalStyles = createGlobalStyle<{
   theme: { body: string; text: string; scrollbarThumbColor: string; scrollbarThumbColorHover: string }
}>`
::-webkit-scrollbar {
  width: 9px;
  transition: all .2s ease;
}
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.body};
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: ${({ theme }) => theme.scrollbarThumbColor};
}
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.scrollbarThumbColorHover};
}

body {
    font-family: 'Work Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
    margin: 0;
    background: ${({ theme }) => theme.body};
    transition: ${transitionSetup};
}


a {
   text-decoration: none;
   color: unset;
}
`

// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/#top
