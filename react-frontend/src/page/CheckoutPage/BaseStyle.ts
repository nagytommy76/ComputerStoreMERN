import styled from 'styled-components'
import { navbarHeight } from '../Navbar/NavbarStyles'

export const PageContainer = styled.section<{ isDarkTheme: boolean }>`
   margin-top: calc(${navbarHeight} + 1.5rem);
   width: 90%;
   color: ${({ isDarkTheme }) => (isDarkTheme ? '#FFF' : '#000')};
   transition: color 0.25s;
`
