import { styled } from '@mui/material'

export const StyledHeaderBox = styled('div')({
   height: 200,
   position: 'relative',

   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
})

export const StyledSpan = styled('span')({
   display: 'flex',
})

export const StyledImage = styled('img')({
   objectFit: 'contain',
   width: 180,
   height: 120,
})
