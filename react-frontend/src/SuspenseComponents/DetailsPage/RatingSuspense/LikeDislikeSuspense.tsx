import React from 'react'
import { styled } from '@mui/material'

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
   paddingLeft: '.9rem'
})

export default LikeDislikeSuspense
