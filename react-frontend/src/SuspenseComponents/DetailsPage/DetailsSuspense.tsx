import React from 'react'
import { styled } from '@mui/material'
import { DetailsPage, HeadSection } from '../../page/ShopPages/BaseComponents/ProductDetailsPage/DetailsStyle'
import { mobileWindowSize } from '../../Theme/GlobalStyles'

import Skeleton from '@mui/material/Skeleton'

import TopNavSuspense from './Includes/TopNavSuspense'
import RightHeadSuspense from './Includes/RightHeadSuspense'

const DetailsSuspense = () => {
   return (
      <DetailsPage>
         <TopNavSuspense />
         <HeadSection>
            <Skeleton sx={{ flex: 1 }} variant='text' animation='wave' />
            <RightHeadSuspense />
         </HeadSection>
         <BodySectionSuspense>
            <Skeleton sx={{ flex: 1 }} variant='text' animation='wave' />
            <Skeleton sx={{ flex: 1 }} variant='text' animation='wave' />
         </BodySectionSuspense>
      </DetailsPage>
   )
}

const BodySectionSuspense = styled('section')({
   minHeight: '55vh',
   display: 'flex',
   flexDirection: 'row',
   [`@media (max-width: ${mobileWindowSize})`]: {
      flexDirection: 'column'
   }
})

export default DetailsSuspense
