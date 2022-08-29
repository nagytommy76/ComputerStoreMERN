import { styled } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { mobileWindowSize } from '../../../../../../Theme/GlobalStyles'

export const StyledModal = styled('div')({
   outline: 'none',
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '100%',
   height: '100%',
   backgroundColor: 'rgba(0, 0, 0, 0.6)',

   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   alignItems: 'center',
})

export const StyledModalHeader = styled('div')({
   width: '100%',
   marginTop: '20px',

   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
})

export const StyledTypography = styled(Typography)({
   color: '#FFF',
   fontSize: '1.8rem',
   paddingLeft: '2rem',

   [`@media(max-width: ${mobileWindowSize})`]: {
      fontSize: '.9rem',
      paddingLeft: '1rem',
   },
})

// IMAGE
export const ImageContainer = styled('section')({
   width: '100%',
   height: '65%',
})

export const StyledImage = styled('img')({
   width: '100%',
   height: '100%',
   objectFit: 'contain',
})

// BUTTON
export const StyledIconBtn = styled(IconButton)({
   marginRight: '2rem',
   fontSize: '55px',
   color: '#EC1102',

   [`@media(max-width: ${mobileWindowSize})`]: {
      fontSize: '40px',
      marginRight: '.5rem',
   },
})
