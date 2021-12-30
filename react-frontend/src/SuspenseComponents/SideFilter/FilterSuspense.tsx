import React from 'react'

import { mobileWindowSize } from '../../Theme/GlobalStyles'
import { styled } from '@mui/material'

import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'

const Style = { margin: '2rem auto' }

const FilterSuspense = () => {
   return (
      <StyledFilterCard>
         <Skeleton height={30} width='50%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={60} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={60} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={60} width='85%' sx={Style} animation='wave' variant='rectangular' />
         <Skeleton height={20} width='85%' sx={Style} animation='wave' variant='text' />
      </StyledFilterCard>
   )
}

const StyledFilterCard = styled(Paper)`
   width: 270px;
   min-height: 100%;
   margin-top: -1.5rem;

   @media (max-width: ${mobileWindowSize}): {
      width: 95%;
      min-height: 100%;
      margin-top: -2rem
      margin-bottom: 2.5rem;
   }
`

export default FilterSuspense
