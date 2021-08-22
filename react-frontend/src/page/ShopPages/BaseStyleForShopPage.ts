import styled from 'styled-components'
import { mobileWindowSize } from '../../Theme/GlobalStyles'
import { navbarHeight } from '../Navbar/NavbarStyles'
import { CardWidth } from './BaseComponents/ProductCard/CardStyle'

export const PageContainer = styled.section`
   width: 100%;
   margin-top: calc(${navbarHeight} + 1.5rem);
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   @media (max-width: ${mobileWindowSize}) {
      flex-direction: column;
      margin-top: 3rem;
      align-items: center;
   }
`
export const RightFlexContainer = styled.section`
   width: 80%;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

export const CardGridContainer = styled.section`
   display: grid;
   width: 85%;
   row-gap: 3rem;
   column-gap: 2rem;
   justify-content: center;
   min-width: 0%;
   min-height: 100vh;
   grid-template-columns: repeat(auto-fit, minmax(250px, ${CardWidth}));
   grid-template-rows: repeat(auto-fit, 380px);

   @media (max-width: ${mobileWindowSize}) {
      width: 100%;
   }
`
