import styled from 'styled-components'
import { mobileWindowSize } from '../../Theme/GlobalStyles'
import { navbarHeight } from '../Navbar/NavbarStyles'
import { CardWidth } from './BaseComponents/ProductCard/CardStyle'

export const PageContainer = styled.section`
   min-height: 85vh;
   width: 100%;
   margin-top: calc(${navbarHeight} + 1.5rem);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;

   @media (max-width: ${mobileWindowSize}) {
      margin-top: 3rem;
   }
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
