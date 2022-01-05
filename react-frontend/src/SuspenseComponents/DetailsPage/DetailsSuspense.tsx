import React from 'react'
import { styled } from '@mui/material'
import { DetailsPage, HeadSection } from '../../page/ShopPages/BaseComponents/ProductDetailsPage/DetailsStyle'

import Skeleton from '@mui/material/Skeleton'

import TopNavSuspense from './Includes/TopNavSuspense'
import RightHeadSuspense from './Includes/RightHeadSuspense'
import BodySection from './Includes/BodySection'
import { mobileWindowSize } from '../../Theme/GlobalStyles'

const DetailsSuspense = () => {
   return (
      <DetailsPage data-testid='detailsSuspense'>
         <TopNavSuspense />
         <HeadSection>
            <ImageSection>
               <ImageSkeleton variant='rectangular' height={400} animation='wave' />
            </ImageSection>
            <RightHeadSuspense />
         </HeadSection>
         <BodySection />
      </DetailsPage>
   )
}

const ImageSection = styled('section')({
   minHeight: '50vh',
   flex: 1,
   [`@media (max-width: ${mobileWindowSize})`]: {
      flex: 'unset'
   }
})

const ImageSkeleton = styled(Skeleton)({
   [`@media (max-width: ${mobileWindowSize})`]: {
      margin: '.75rem 0'
   }
})

export default DetailsSuspense
