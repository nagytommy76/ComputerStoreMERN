import { styled } from '@mui/material'
import { mobileWindowSize } from '../../../../Theme/GlobalStyles'

export const CardContainerStyle = styled('div')<{ bordercolor?: string }>(({ bordercolor = '#F5B310' }) => ({
   height: '380px',
   width: '790px',
   backgroundColor: '#f9f9f9',
   padding: '1rem',

   borderRadius: '5px',
   borderLeft: `12px solid ${bordercolor}`,
   boxShadow: '1px 0px 17px rgba(0, 0, 0, 0.15)',
   overflowX: 'auto',

   display: 'grid',
   gridTemplateColumns: 'repeat(3, 250px)',
   gridAutoRows: '380px',
   justifyContent: 'center',
   columnGap: '1rem',
   rowGap: '2rem',

   [`@media(max-width: ${mobileWindowSize})`]: {
      width: '85%',
      height: '400px',
      gridTemplateColumns: 'repeat(1, auto)',
      alignItems: 'center',
   },
}))

// https://learncssgrid.com/
