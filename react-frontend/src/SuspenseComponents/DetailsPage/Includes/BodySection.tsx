import React from 'react'
import { styled } from '@mui/material'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

import Skeleton from '@mui/material/Skeleton'

const BodySection = () => {
   return (
      <BodySectionSuspense>
         <Skeleton sx={{ flex: 1, marginRight: 1, padding: 0 }} height={500} variant='rectangular' animation='wave' />
         <Skeleton sx={{ flex: 1, marginLeft: 1 }} height={650} variant='rectangular' animation='wave' />
      </BodySectionSuspense>
   )
}

const BodySectionSuspense = styled('section')({
   minHeight: '40vh',
   display: 'flex',
   flexDirection: 'row',
   [`@media (max-width: ${mobileWindowSize})`]: {
      flexDirection: 'column'
   }
})

export default BodySection
