import { styled } from '@mui/material'
import { footerHeight } from '../../Theme/GlobalStyles'
import { navbarHeight } from '../Navbar/NavbarStyles'

export const OrdersPageContainer = styled('section')`
   width: 60%;
   min-height: calc(100vh - ${footerHeight} - ${navbarHeight} - 1.5rem);
   margin: calc(${navbarHeight} + 1.5rem) auto 2.5rem auto;
`

export const StyledProduct = styled('div')({
   margin: '1rem 0 1rem 0',
   width: '100%',
   height: '200px',
   display: 'flex',
   flexDirection: 'row',
})

export const ProductDataStyle = styled('div')({
   padding: '0 1.4rem 0 1.4rem',
})

export const ProductImage = styled('img')({
   maxWidth: '230px',
   height: '100%',
   objectFit: 'contain',
})
