import { styled } from '@mui/material'

export const StyledProductCard = styled('div')({
   width: '100%',
   margin: '.45rem 0',
   height: '95px',

   display: 'flex',
   alignItems: 'center',
   border: '1px solid rgba(0,0,0, .2)',
   borderRadius: '5px',
})

export const StyledImage = styled('img')({
   objectFit: 'contain',
   width: '30%',
})

export const StyledRightSection = styled('span')({
   fontSize: '.9rem',
   width: '70%',
   display: 'flex',
})
