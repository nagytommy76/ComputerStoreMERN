import styled from 'styled-components'
import { mobileWindowSize } from '../../Theme/GlobalStyles'
import { navbarHeight } from '../Navbar/NavbarStyles'
import { CardWidth } from './BaseComponents/ProductCard/CardStyle'

export const PageContainer = styled.section`
   min-height: calc(97vh - ${navbarHeight});
   width: 100%;
   margin-top: calc(${navbarHeight} + 1.5rem);
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   @media (max-width: ${mobileWindowSize}) {
      flex-direction: column;
      margin-top: 3rem;
   }
`
export const RightFlexContainer = styled.section`
   width: 85%;
   min-height: 85%;
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
   min-width: 0;
   min-height: 0;
   grid-template-columns: repeat(auto-fit, minmax(250px, ${CardWidth}));
   grid-template-rows: repeat(auto-fit, 380px);
`
