import { styled } from '@mui/material'
import { footerHeight } from '../../../../Theme/GlobalStyles'
import { navbarHeight } from '../../../Navbar/NavbarStyles'

export const ComparePageStyle = styled('section')({
   width: '100%',
   minHeight: `calc(100vh - ${footerHeight} - ${navbarHeight} - 1.5rem)`,
   marginTop: '1.5rem',
})
