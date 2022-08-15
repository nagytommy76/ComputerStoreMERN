import React from 'react'
import { styled } from '@mui/material'
import { mobileWindowSize } from '../../../../../Theme/GlobalStyles'
import { useAppSelector } from '../../../../../app/hooks'

import Typography from '@mui/material/Typography'

const ShopHeader: React.FC<{ productName: string; productType: string }> = ({ productName, productType }) => {
   const productLength = useAppSelector(state => state.products.totalProductCount)
   return (
      <StyledShopHeader>
         <Typography variant='h3' color='secondary'>
            {productName}
         </Typography>
         <Typography color='action.disabled' variant='subtitle1'>
            ({productLength} termék)
         </Typography>
      </StyledShopHeader>
   )
}

export default ShopHeader

const StyledShopHeader = styled('header')({
   width: '385px',
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',

   marginBottom: '15px',

   [`@media(max-width: ${mobileWindowSize})`]: {
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      marginBottom: '35px',
   },
})
