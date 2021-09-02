import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle<{ theme: { body: string; text: string } }>`
body {
    font-family: 'Work Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
    margin: 0;
    background: ${({ theme }) => theme.body};
    transition: all .25s linear;
}


a {
   text-decoration: none;
   color: unset;
}
`

// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/#top

export const mobileWindowSize = `950px`
export const largeWindowSize = '2000px'

export const backgroundColor = `#272c33`
