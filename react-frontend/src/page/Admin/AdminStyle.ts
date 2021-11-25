import styled from 'styled-components'
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
`

export const RightContentStyle = styled.div`
   width: 60%;
   display: flex;
   justify-content: center;
   margin-top: 1.5rem;
`
