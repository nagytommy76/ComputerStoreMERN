import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'

import { Typography, Rating } from '@mui/material'
import { ThumbUp, ThumbDown } from '@mui/icons-material'
import {
   CommentCard,
   RightSide,
   LeftSide,
   ThumbsContainer,
   CustomThumbUp,
   CustomThumbDown,
   ThumbIconsContainer
} from './CommentStyle'

const Comments: React.FC<{ requestSend: boolean }> = ({ requestSend }) => {
   const {
      state: { _id, productType }
   } = useLocation<LocationType>()
   const [allComments, setAllComments] = useState<RateState[]>([])
   const formatDate = (date: Date) => {
      return date.toLocaleDateString('hu-HU', {
         year: 'numeric',
         month: '2-digit',
         day: 'numeric',
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit'
      })
   }
   useEffect(() => {
      axios.get(`/${productType}/get-${productType}-comments`, { params: { _id } }).then((result: AxiosResponse<RateState[]>) => {
         const ratedAtFormattedToDate = result.data.map((res) => {
            return {
               ...res,
               ratedAt: new Date(res.ratedAt)
            }
         })
         setAllComments(ratedAtFormattedToDate)
      })
   }, [_id, requestSend, productType])
   return (
      <>
         {allComments.map((comment) => (
            <CommentCard key={comment._id}>
               <LeftSide>
                  <Typography variant='h5'>{comment.userName}</Typography>
                  <Rating name='read-only' value={comment.rating} size='large' readOnly />
                  <Typography variant='subtitle2'>{formatDate(comment.ratedAt)}</Typography>
               </LeftSide>
               <RightSide>
                  <Typography variant='body1'>{comment.comment}</Typography>
                  <ThumbsContainer>
                     <ThumbIconsContainer>
                        <CustomThumbUp color='secondary' />0
                     </ThumbIconsContainer>
                     <ThumbIconsContainer>
                        <CustomThumbDown color='secondary' /> 0
                     </ThumbIconsContainer>
                  </ThumbsContainer>
               </RightSide>
            </CommentCard>
         ))}
      </>
   )
}

type RateState = {
   _id: string
   rating: number
   comment?: string
   ratedAt: Date
   userName: string
}

export default Comments
