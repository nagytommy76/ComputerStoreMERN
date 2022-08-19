import React from 'react'
import { styled } from '@mui/material'

import SadImage from '../Asset/sad.png'
import Tpyography from '@mui/material/Typography'
import { mobileWindowSize } from '../../../../../Theme/GlobalStyles'

const ProductNotFound = () => {
   return (
      <StyledProductNotFound>
         <StyledImage src={SadImage} alt='sad image :(' />
         <StyledTypography variant='h2' color='secondary'>
            Sajnos nincsen megjeleníthető találat
         </StyledTypography>
      </StyledProductNotFound>
   )
}

export default ProductNotFound

const StyledProductNotFound = styled('div')({
   position: 'absolute',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
})

const StyledTypography = styled(Tpyography)({
   [`@media(max-width: ${mobileWindowSize})`]: {
      textAlign: 'center',
      fontSize: '2rem',
   },
})

const StyledImage = styled('img')({
   width: '25%',

   [`@media(max-width: ${mobileWindowSize})`]: {
      width: '55%',
      marginBottom: '1rem',
   },
})
