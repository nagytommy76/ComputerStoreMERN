import { styled } from '@mui/material'

export const CardContainerStyle = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-evenly',
   alignContent: 'center',
   height: '500px',
   width: '1200px',
   backgroundColor: '#f9f9f9',

   borderRadius: '8px',
   borderLeft: '30px solid #F5B310',
   boxShadow: '1px 0px 17px rgba(0, 0, 0, 0.15)',
})

export const CardInnerContainerStyle = styled('section')({
   padding: '1rem',
   display: 'grid',
   rowGap: '2rem',
   columnGap: '1.5rem',
   justifyContent: 'center',
   gridAutoRows: '380px',
   gridTemplateColumns: 'repeat(auto-fill, 250px)',
   overflowX: 'auto',
})
