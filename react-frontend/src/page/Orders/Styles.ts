import { styled } from '@mui/material'
import { footerHeight } from '../../Theme/GlobalStyles'
import { navbarHeight } from '../Navbar/NavbarStyles'

export const OrdersPageContainer = styled('section')`
   width: 60%;
   min-height: calc(100vh - ${footerHeight} - ${navbarHeight} - 1.5rem);
   margin: calc(${navbarHeight} + 1.5rem) auto 0 auto;
`
