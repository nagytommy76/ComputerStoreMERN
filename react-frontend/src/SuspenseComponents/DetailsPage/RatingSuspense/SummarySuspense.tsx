import React from 'react'
import { styled } from '@mui/material'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

import Skeleton from '@mui/material/Skeleton'

const SummarySuspense = () => {
   return (
      <RightContent>
         <Skeleton sx={{ marginBottom: 1 }} variant='rectangular' width={90} height={50} animation='wave' />
         <Skeleton sx={{ marginBottom: 2 }} variant='text' width={150} animation='wave' />
         <Skeleton sx={{ marginBottom: 2 }} height={40} width={200} variant='rectangular' animation='wave' />
      </RightContent>
   )
}

const RightContent = styled('section')({
   width: '50%',
   paddingLeft: '.9rem',
   [`@media(max-width: ${mobileWindowSize})`]: {
      paddingLeft: 0
   }
})

export default SummarySuspense
