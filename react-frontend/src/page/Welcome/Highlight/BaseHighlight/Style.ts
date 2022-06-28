import { styled } from '@mui/material'

export const CardContainerStyle = styled('div')<{ bordercolor?: string }>(({ bordercolor = '#F5B310' }) => ({
   // display: 'flex',
   // flexDirection: 'row',
   // alignItems: 'center',
   height: '400px',
   width: '850px',
   backgroundColor: '#f9f9f9',
   padding: '1rem',

   display: 'grid',
   gridAutoRows: '400px',
   gridTemplateColumns: 'repeat(auto-fill, minmax(225px, 1fr))',
   // gridTemplateRows: 'repeat(auto-fill, minmax(400px, 1fr) )',
   alignItems: 'center',
   columnGap: '1.45rem',
   rowGap: '.85rem',

   borderRadius: '5px',
   borderLeft: `30px solid ${bordercolor}`,
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
   // https://codepen.io/AmirTugi/embed/JLNmPq?
   // minHeight: '350px',
   // padding: '0 .75rem',
})
