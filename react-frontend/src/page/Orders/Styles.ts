import { styled, Typography } from '@mui/material'
import { footerHeight } from '../../Theme/GlobalStyles'
import { navbarHeight } from '../Navbar/NavbarStyles'
import { mobileWindowSize } from '../../Theme/GlobalStyles'

export const OrdersPageContainer = styled('section')`
   width: 60%;
   min-height: calc(100vh - ${footerHeight} - ${navbarHeight});
   margin: ${navbarHeight} auto 2.5rem auto;

   @media (max-width: ${mobileWindowSize}) {
      width: 90%;
      min-height: calc(100vh - ${navbarHeight});
      margin-bottom: 1rem;
   }
`

export const StyledProduct = styled('div')({
   margin: '1rem 0 1rem 0',
   width: '100%',
   height: '200px',
   display: 'flex',
   flexDirection: 'row',

   [`@media (max-width: ${mobileWindowSize})`]: {
      minHeight: '400px',
      flexDirection: 'column',
      alignItems: 'center',
   },
})

export const ProductDataStyle = styled('div')({
   padding: '0 1.4rem 0 1.4rem',
})

export const ProductImage = styled('img')({
   maxWidth: '230px',
   height: '100%',
   objectFit: 'contain',
})

export const AccordionSummaryTypography = styled(Typography)({
   width: '25%',
   [`@media (max-width: ${mobileWindowSize})`]: {
      width: '70%',
   },
})
