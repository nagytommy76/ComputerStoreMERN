import styled from 'styled-components'
// import { navbarHeight } from '../Navbar/NavbarStyles'

export const PageContainer = styled.section<{ isDarkTheme: boolean }>`
   margin: 0 auto 0 auto;
   /* width: 95%; */
   min-height: 100vh;
   color: ${({ isDarkTheme }) => (isDarkTheme ? '#FFF' : '#000')};
   transition: color 0.25s;

   display: flex;
   justify-content: center;
`
