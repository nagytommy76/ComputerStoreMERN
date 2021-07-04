import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle<{ theme: { body: string; text: string } }>`
body {
    font-family: 'Work Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .3s linear;
}

h3,h5{
    color: #000;
}

a {
   text-decoration: none;
   color: unset;
}
`

// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/#top
