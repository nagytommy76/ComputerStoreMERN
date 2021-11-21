import styled from 'styled-components'
import { navbarHeight } from '../Navbar/NavbarStyles'

export const AdminPageContainer = styled.section`
   min-height: calc(100vh - ${navbarHeight});
   width: 100%;
   margin-top: ${navbarHeight};
   display: flex;
`

export const RightContentStyle = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 1.5rem;
`
