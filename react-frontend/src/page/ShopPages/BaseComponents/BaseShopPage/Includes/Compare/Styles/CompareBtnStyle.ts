import { Fab, styled } from '@mui/material'
import { mobileWindowSize } from '../../../../../../../Theme/GlobalStyles'

export const StyledCompareCount = styled('span')({
   width: 25,
   height: 25,
   marginRight: 10,

   background: 'red',
   borderRadius: '50%',
})

export const StyledFab = styled(Fab)({
   zIndex: 3,
   position: 'fixed',
   right: '50px',
   bottom: 150,

   [`@media(max-width: ${mobileWindowSize})`]: {
      right: '7px',
      bottom: 120,
   },
})
