import React from 'react'
import { styled } from '@mui/material'

import Skeleton from '@mui/material/Skeleton'

const RightHeadSuspense = () => {
   return (
      <RightHeader>
         <Skeleton variant='text' animation='wave' height={50} />
         <Skeleton variant='text' animation='wave' height={50} width={275} />
         <Skeleton variant='text' animation='wave' height={4} sx={{ margin: '1.5rem 0' }} />
         <PriceCartContainer>
            <Skeleton variant='text' animation='wave' height={90} width={60} />
            <Skeleton variant='text' animation='wave' height={90} width={60} />
            <Skeleton variant='text' animation='wave' height={70} width={170} />
         </PriceCartContainer>
         <Skeleton variant='text' animation='wave' height={4} sx={{ margin: '1.5rem 0' }} />
         <Skeleton variant='text' animation='wave' height={40} width={300} sx={{ marginBottom: 1.5 }} />
         <Skeleton variant='text' animation='wave' height={40} width={250} />
      </RightHeader>
   )
}

const RightHeader = styled('aside')({
   flex: 1,
   margin: '0 1rem'
})

const PriceCartContainer = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center'
})

export default RightHeadSuspense
