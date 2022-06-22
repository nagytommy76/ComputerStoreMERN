import { styled } from '@mui/material'
import { mobileWindowSize } from '../../Theme/GlobalStyles'

import Typography from '@mui/material/Typography'

export const WelcomeContainer = styled('section')({
   minHeight: '100vh',
})

export const StyledWelcomeImg = styled('section')<{ backgroundimage: string }>(props => ({
   width: '100%',
   height: '70vh',
   background: `url(${props.backgroundimage}) no-repeat left top`,
   backgroundSize: '100%',
   [`@media(max-width: ${mobileWindowSize})`]: {
      backgroundSize: '150%',
   },
}))

export const WelcomeMaintitleContainer = styled('div')({
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'rgba(1,1,1, .3)',
})

export const StyledHeading = styled(Typography)({
   fontSize: '3.8rem',
   color: 'white',
   [`@media(max-width: ${mobileWindowSize})`]: {
      fontSize: '2rem',
   },
})
