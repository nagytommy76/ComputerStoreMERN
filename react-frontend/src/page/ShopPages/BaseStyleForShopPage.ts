import styled from 'styled-components'
import { navbarHeight } from '../Navbar/NavbarStyles'
import { CardWidth } from './BaseComponents/ProductCard/CardStyle'

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
   justify-content: center;
   min-width: 0;
   min-height: 0;
   grid-template-columns: repeat(auto-fit, minmax(250px, ${CardWidth}));
   grid-template-rows: repeat(auto-fit, 380px);
`
