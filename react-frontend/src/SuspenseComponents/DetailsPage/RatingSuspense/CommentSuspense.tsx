import React from 'react'
import { styled } from '@mui/material'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

import { CardContentStyle } from './RatingSuspense'
import LikeDislikeSuspense from './LikeDislikeSuspense'

import Skeleton from '@mui/material/Skeleton'
import Card from '@mui/material/Card'

const CommentSuspense = () => {
   return (
      <CommentsStyle>
         <Card>
            <CardContentStyle>
               <LeftContent>
                  <Skeleton sx={{ marginBottom: 0 }} height={40} width={150} variant='text' animation='wave' />
                  <Skeleton sx={{ marginBottom: 0 }} height={30} width={170} variant='rectangular' animation='wave' />
                  <Skeleton sx={{ marginBottom: 1 }} height={30} width={150} variant='text' animation='wave' />
               </LeftContent>
               <LikeDislikeSuspense />
            </CardContentStyle>
         </Card>
      </CommentsStyle>
   )
}

const CommentsStyle = styled('section')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   margin: '1.5rem auto'
})

const LeftContent = styled('section')({
   width: '35%',
   paddingRight: '.9rem',
   [`@media(max-width: ${mobileWindowSize})`]: {
      width: '100%',
      paddingRight: 0
   }
})

export default CommentSuspense
