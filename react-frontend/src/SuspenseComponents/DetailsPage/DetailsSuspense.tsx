import React from 'react'
import { DetailsPage, HeadSection } from '../../page/ShopPages/BaseComponents/ProductDetailsPage/DetailsStyle'

import Skeleton from '@mui/material/Skeleton'

import TopNavSuspense from './Includes/TopNavSuspense'
import RightHeadSuspense from './Includes/RightHeadSuspense'
import BodySection from './Includes/BodySection'

const DetailsSuspense = () => {
   return (
      <DetailsPage>
         <TopNavSuspense />
         <HeadSection>
            <Skeleton sx={{ flex: 1 }} variant='text' animation='wave' />
            <RightHeadSuspense />
         </HeadSection>
         <BodySection />
      </DetailsPage>
   )
}

export default DetailsSuspense
