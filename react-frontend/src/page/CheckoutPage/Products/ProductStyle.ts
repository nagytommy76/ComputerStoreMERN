import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'
import { navbarHeight } from '../../Navbar/NavbarStyles'

export const ProductsContainer = styled.section`
   flex: 1;
   margin-top: calc(${navbarHeight} + 1.5rem);
   color: black;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width: ${mobileWindowSize}) {
   }
`

export const ProductCards = styled.div`
   width: 450px;
   height: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const SummaryHeading = styled.h1`
   margin-top: 0;
   font-size: 2.8rem;
`
