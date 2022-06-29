import { styled } from '@mui/material'
// import { mobileWindowSize } from '../../../Theme/GlobalStyles'

import { navbarHeight } from '../../Navbar/NavbarStyles'

export const ContainerStyle = styled('section')({
   minHeight: `calc(100vh - ${navbarHeight})`,
   paddingTop: `calc(${navbarHeight} + 1.5rem)`,
   margin: '2rem 0',

   display: 'grid',
   justifyContent: 'center',
   gridTemplateColumns: 'repeat(2, auto)',
   gridAutoRows: '420px',
   columnGap: '1.7rem',
   rowGap: '1rem',

   [`@media (max-width: 1920px`]: {
      gridTemplateRows: '800px',
   },
})
