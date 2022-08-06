import styled from 'styled-components'
import { mobileWindowSize, footerHeight } from '../../Theme/GlobalStyles'
import { navbarHeight } from '../Navbar/NavbarStyles'

export const PageContainer = styled.section`
   width: 100%;
   min-height: calc(100vh - ${footerHeight} - ${navbarHeight} - 1.5rem);
   margin-top: 1.5rem;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   @media (max-width: ${mobileWindowSize}) {
      width: 100%;
      flex-direction: column;
      margin-top: 6rem;
      align-items: center;
   }
`
export const RightFlexContainer = styled.section`
   width: 80%;
   min-height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

export const CardGridContainer = styled.section`
   min-height: 100vh;
   display: grid;
   width: 85%;
   row-gap: 3rem;
   column-gap: 2rem;
   justify-content: center;
   grid-auto-rows: 380px;
   grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));

   @media (max-width: ${mobileWindowSize}) {
      width: 100%;
      justify-items: center;
   }
`
// https://dev.to/srinivasankk/creating-dynamic-rows-columns-with-css-grid-55md
