import React from 'react'
import { styled } from '@mui/material'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

import Skeleton from '@mui/material/Skeleton'

const LikeDislikeSuspense = () => {
   return (
      <RightContent>
         <Skeleton sx={{ marginBottom: 0 }} height={40} width={250} variant='text' animation='wave' />
         <Skeleton sx={{ marginBottom: 0 }} height={40} width={100} variant='text' animation='wave' />
      </RightContent>
   )
}

const RightContent = styled('section')({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   width: '65%',
   paddingLeft: '.9rem',
   [`@media(max-width: ${mobileWindowSize})`]: {
      width: '100%',
      paddingLeft: 0,
   },
})

export default LikeDislikeSuspense
