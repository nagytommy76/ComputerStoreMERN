import { styled } from '@mui/material'

export const CardContainerStyle = styled('div')<{ borderColor?: string }>(({ borderColor = '#F5B310' }) => ({
   display: 'flex',
   flexDirection: 'row',
   alignContent: 'center',
   height: '430px',
   width: '900px',
   backgroundColor: '#f9f9f9',

   borderRadius: '5px',
   borderLeft: `30px solid ${borderColor}`,
   boxShadow: '1px 0px 17px rgba(0, 0, 0, 0.15)',
   overflowX: 'auto',
}))

export const CardInnerContainerStyle = styled('div')({
   // display: 'grid',
   // rowGap: '2rem',
   // columnGap: '1.5rem',
   // justifyContent: 'center',
   // gridAutoRows: '380px',
   // gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr) )',
   // gridTemplateRows: 'repeat(auto-fit, minmax(400px, 1fr) )',

   padding: '1rem',
})
