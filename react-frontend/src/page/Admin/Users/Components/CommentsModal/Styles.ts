import { styled } from '@mui/material'
import { mobileWindowSize } from '../../../../../Theme/GlobalStyles'

import CardContent from '@mui/material/CardContent'

export const StyledBox = styled('section')(({ theme }) => ({
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   // boxSizing: 'border-box',

   padding: '1rem',
   width: '60%',
   minHeight: '60%',
   borderRadius: '5px',

   boxShadow: '2px 0px 20px rgba(0, 0,0, 0.2)',
   background: 'linear-gradient(to right, hsl(210, 60%, 20%), hsl(210, 20%, 25%))',
   color: '#FFF',
   // backgroundColor: theme.palette.primary.dark,
   // color: theme.palette.mode === 'dark' ? '#fff' : '#000',

   // https://codepen.io/AbubakerSaeed/pen/eYOvKpY
}))

export const StyledCommentSection = styled('section')(({ theme }) => ({
   width: '100%',
   height: '100%',
}))

export const StyledCommentCard = styled(CardContent)(({ theme }) => ({
   padding: '1rem 1rem 0 1rem',
   display: 'flex',
   flexDirection: 'row',
   [`@media (max-width: ${mobileWindowSize})`]: {
      flexDirection: 'column',
   },
}))
