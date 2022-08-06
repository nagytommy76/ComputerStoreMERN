import { styled } from '@mui/material'
import { mobileWindowSize } from '../../Theme/GlobalStyles'
import { navbarHeight } from '../Navbar/NavbarStyles'

import Typography from '@mui/material/Typography'

export const WelcomeContainer = styled('section')({
   height: '100vh',
   marginTop: `-${navbarHeight}`,
   [`@media(max-width: ${mobileWindowSize})`]: {
      marginTop: 0,
   },
})

export const StyledWelcomeImg = styled('section')<{ backgroundimage: string }>(props => ({
   width: '100%',
   height: '100vh',
   backgroundImage: `url(${props.backgroundimage})`,
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   backgroundSize: 'cover',
}))

export const WelcomeMaintitleContainer = styled('div')({
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-evenly',
   alignItems: 'center',
   backgroundColor: 'rgba(1,1,1, .3)',
})

export const StyledHeading = styled(Typography)({
   fontFamily: 'Rubik Moonrocks, cursive',
   textAlign: 'center',
   textTransform: 'uppercase',
   fontSize: '120px',
   color: 'white',
   [`@media(max-width: ${mobileWindowSize})`]: {
      fontSize: '40px',
   },
})

export const HighlightLetterStyle = styled('span')({
   color: '#ff8f00',
})
