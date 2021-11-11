import React, { useContext, useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../BaseTypes'

import { RatingContext } from '../RatingContext'
import { formatRatedAtToDateType, RateState } from './Helpers'

import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Collapse from '@mui/material/Collapse'
import CardContent from '@mui/material'
import { TransitionGroup } from 'react-transition-group'

import { CommentCard, RightSide, LeftSide } from './CommentStyle'

const LikeDislike = React.lazy(() => import('./Likes'))
const DeleteIcon = React.lazy(() => import('./DeleteSection'))
const CreateAnswer = React.lazy(() => import('./Answers/CreateAnswer'))

const Comments: React.FC = () => {
   const {
      state: { _id, productType }
   } = useLocation<LocationType>()
   const { commentRequestSend } = useContext(RatingContext)

   const [allComments, setAllComments] = useState<RateState[]>([])
   const formatDate = (date: Date) => {
      return date.toLocaleDateString('hu-HU', {
         year: 'numeric',
         month: '2-digit',
         day: '2-digit',
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit'
      })
   }

   useEffect(() => {
      axios.get(`/${productType}/get-${productType}-comments`, { params: { _id } }).then((result: AxiosResponse<RateState[]>) => {
         const ratedAtFormattedToDate = formatRatedAtToDateType(result.data)
         setAllComments(ratedAtFormattedToDate)
      })
   }, [_id, commentRequestSend, productType])
   return (
      <TransitionGroup>
         {allComments.map((comment) => (
            <Collapse key={comment._id}>
               <CommentCard key={comment._id}>
                  <LeftSide>
                     <Typography variant='h5'>{comment.userName}</Typography>
                     <Rating name='read-only' precision={0.5} value={comment.rating} size='large' readOnly />
                     <Typography variant='subtitle2'>{formatDate(comment.ratedAt)}</Typography>
                  </LeftSide>
                  <RightSide>
                     <Typography variant='body1'>{comment.comment}</Typography>
                     <LikeDislike productType={productType} commentId={comment._id} responses={comment.responses} />
                  </RightSide>
                  <DeleteIcon setComments={setAllComments} commentId={comment._id} commentsUserName={comment.userName} />
                  {/* <CardContent>
                     <CreateAnswer isAnswerOpen={true} />
                  </CardContent> */}
               </CommentCard>
            </Collapse>
         ))}
      </TransitionGroup>
   )
}

export default Comments
