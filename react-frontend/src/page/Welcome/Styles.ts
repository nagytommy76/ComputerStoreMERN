import { styled } from '@mui/material'
import { mobileWindowSize } from '../../Theme/GlobalStyles'

export const WelcomeContainer = styled('section')({
   minHeight: '100vh'
})

export const StyledWelcomeImg = styled('section')<{ backgroundimage: string }>((props) => ({
   width: '100%',
   height: '60vh',
   background: `url(${props.backgroundimage}) no-repeat center`,
   backgroundSize: '100%',
   [`@media(max-width: ${mobileWindowSize})`]: {
      backgroundSize: '150%'
   }
}))

export const WelcomeMaintitleContainer = styled('div')({
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'rgba(1,1,1, .5)'
})
