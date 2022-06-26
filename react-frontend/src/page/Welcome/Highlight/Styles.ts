import { styled } from '@mui/material'

import { navbarHeight } from '../../Navbar/NavbarStyles'

export const ContainerStyle = styled('section')({
   minHeight: `calc(100vh - ${navbarHeight})`,
   paddingTop: `calc(${navbarHeight} + 1.5rem)`,
   margin: 'auto',
   width: '75%',
})
