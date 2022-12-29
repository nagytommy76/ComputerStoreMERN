import { styled } from '@mui/material'
import { footerHeight } from '../../../../Theme/GlobalStyles'
import { navbarHeight } from '../../../Navbar/NavbarStyles'

export const ComparePageStyle = styled('section')({
   width: '85%',
   minHeight: `calc(100vh - ${footerHeight} - ${navbarHeight} - 1.5rem)`,
   margin: '1.5rem auto 0 auto',
})
