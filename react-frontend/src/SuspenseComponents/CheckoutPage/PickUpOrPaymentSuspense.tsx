import React from 'react'
import { styled } from '@mui/material'

import Skeleton from '@mui/material/Skeleton'

const PickUpOrPaymentSuspense: React.FC<{ isPickUp?: boolean }> = ({ isPickUp = true }) => {
   return (
      <StyledFormControl>
         <Inputs>
            <Skeleton sx={{ alignSelf: 'self-start' }} variant='text' width={175} height={30} animation='wave' />
            <Skeleton variant='text' width='100%' height={85} animation='wave' />
            <Skeleton variant='text' width='100%' height={85} animation='wave' />
            {isPickUp && <Skeleton variant='text' width='100%' height={85} animation='wave' />}
         </Inputs>
      </StyledFormControl>
   )
}

const StyledFormControl = styled('div')({
   width: '100%',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center'
})

const Inputs = styled('div')({
   width: '85%'
})

export default PickUpOrPaymentSuspense
