import styled from 'styled-components'
import { navbarHeight } from '../../Navbar/NavbarStyles'

export const PageContainer = styled.section`
   min-height: 100vh;
   width: 100%;
   margin-top: calc(${navbarHeight} + 1.5rem);
   display: flex;
   justify-content: center;
`

export const CardGridContainer = styled.section`
   display: grid;
   width: 85%;
   row-gap: 3rem;
   column-gap: 2rem;
   grid-template-columns: repeat(5, 1fr);
`
