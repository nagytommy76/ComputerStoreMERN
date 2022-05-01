import React from 'react'
import { styled } from '@mui/material'

import Skeleton from '@mui/material/Skeleton'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import SummarySuspense from './SummarySuspense'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

const RatingSuspense = () => {
   return (
      <RatingStyle data-testid='ratingSuspense'>
         <Card>
            <CardContentStyle>
               <LeftContent>
                  <Skeleton
                     sx={{ marginBottom: 3 }}
                     height={40}
                     width={350}
                     variant='rectangular'
                     animation='wave'
                  />
                  <Skeleton
                     sx={{ marginBottom: 2 }}
                     height={40}
                     width={200}
                     variant='rectangular'
                     animation='wave'
                  />
                  <Skeleton sx={{ marginBottom: 2 }} variant='rectangular' height={200} animation='wave' />
                  <Skeleton
                     sx={{ marginBottom: 4 }}
                     variant='rectangular'
                     height={45}
                     width={200}
                     animation='wave'
                  />
               </LeftContent>
               <SummarySuspense />
            </CardContentStyle>
         </Card>
      </RatingStyle>
   )
}

const RatingStyle = styled('section')({
   width: '100%',
   minHeight: '40vh',
   display: 'flex',
   flexDirection: 'column',
   margin: '0 auto',
   [`@media(max-width: ${mobileWindowSize})`]: {
      marginTop: '2rem',
   },
})

export const CardContentStyle = styled(CardContent)({
   height: '100%',
   display: 'flex',
   flexDirection: 'row',
   [`@media(max-width: ${mobileWindowSize})`]: {
      flexDirection: 'column',
   },
})

const LeftContent = styled('section')({
   width: '50%',
   paddingRight: '.9rem',
   [`@media(max-width: ${mobileWindowSize})`]: {
      width: '100%',
      paddingRight: 0,
   },
})

export default RatingSuspense
