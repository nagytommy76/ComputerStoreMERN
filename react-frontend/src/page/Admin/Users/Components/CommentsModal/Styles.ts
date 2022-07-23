import { styled } from '@mui/material'
import { mobileWindowSize } from '../../../../../Theme/GlobalStyles'

import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'

export const StyledBox = styled(Paper)(({ theme }) => ({
   position: 'relative',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',

   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',

   outline: 'none',
   padding: '1rem',
   width: '50%',
   height: '60%',
   borderRadius: '5px',
   overflow: 'auto',

   boxShadow: '2px 0px 20px rgba(0, 0,0, 0.2)',
   background: 'linear-gradient(to right, hsl(210, 60%, 20%), hsl(210, 20%, 25%))',
   color: '#FFF',

   // backgroundColor: theme.palette.primary.dark,
   // color: theme.palette.mode === 'dark' ? '#fff' : '#000',

   // https://codepen.io/AbubakerSaeed/pen/eYOvKpY
}))

export const StyledCommentSection = styled('section')(({ theme }) => ({
   width: '100%',
}))

export const StyledCommentCard = styled(CardContent)(({ theme }) => ({
   padding: '1rem 1rem 0 1rem',
   display: 'flex',
   flexDirection: 'row',
   [`@media (max-width: ${mobileWindowSize})`]: {
      flexDirection: 'column',
   },
}))
