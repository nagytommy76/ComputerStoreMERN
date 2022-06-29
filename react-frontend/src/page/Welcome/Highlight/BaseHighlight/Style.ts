import { styled } from '@mui/material'

export const CardContainerStyle = styled('div')<{ bordercolor?: string }>(({ bordercolor = '#F5B310' }) => ({
   height: '400px',
   width: '850px',
   backgroundColor: '#f9f9f9',
   padding: '1rem',

   borderRadius: '5px',
   borderLeft: `30px solid ${bordercolor}`,
   boxShadow: '1px 0px 17px rgba(0, 0, 0, 0.15)',
   overflowX: 'auto',

   display: 'grid',
   gridTemplateColumns: 'repeat(3, 250px)',
   gridAutoRows: '380px',
   justifyContent: 'center',
   columnGap: '1.7rem',
   rowGap: '2rem',
}))

// https://learncssgrid.com/
