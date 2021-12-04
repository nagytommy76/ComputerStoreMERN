import styled from 'styled-components'
import { mobileWindowSize } from '../../Theme/GlobalStyles'
import { navbarHeight } from '../Navbar/NavbarStyles'

export const AdminPageContainer = styled.section`
   position: relative;
   min-height: calc(100vh - ${navbarHeight});
   width: 100%;
   margin-top: ${navbarHeight};
   margin-bottom: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: ${mobileWindowSize}) {
      position: initial;
   }
`

export const RightContentStyle = styled.div`
   width: 60%;
   display: flex;
   justify-content: center;
   margin-top: 1.5rem;
   @media (max-width: ${mobileWindowSize}) {
      max-width: 90%;
      width: 90%;
   }
`
