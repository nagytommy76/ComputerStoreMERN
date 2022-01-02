import React from 'react'
import { styled } from '@mui/material'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

import Skeleton from '@mui/material/Skeleton'

const BodySection = () => {
   return (
      <BodySectionSuspense>
         <LeftSkeleton height={500} variant='rectangular' animation='wave' />
         <RightSkeleton height={650} variant='rectangular' animation='wave' />
      </BodySectionSuspense>
   )
}

const BodySectionSuspense = styled('section')({
   minHeight: '40vh',
   display: 'flex',
   flexDirection: 'row',
   [`@media (max-width: ${mobileWindowSize})`]: {
      minHeight: '100vh',
      flexDirection: 'column',
      justifyContent: 'center'
   }
})

const LeftSkeleton = styled(Skeleton)({
   flex: 1,
   marginRight: 1,
   [`@media (max-width: ${mobileWindowSize})`]: {
      marginRight: 0
   }
})
const RightSkeleton = styled(Skeleton)({
   flex: 1,
   marginLeft: 1,
   [`@media (max-width: ${mobileWindowSize})`]: {
      marginTop: '2rem',
      marginLeft: 0,
      height: 800
   }
})

export default BodySection
