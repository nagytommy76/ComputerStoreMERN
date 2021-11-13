import React, { useState } from 'react'
import { useLocation } from 'react-router'

import Collapse from '@mui/material/Collapse'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

import { CommentCard, RightSide, LeftSide } from '../CommentStyle'

import { RateState } from '../Helpers'
import { LocationType } from '../../../../../BaseTypes'

const LikeDislike = React.lazy(() => import('../Likes'))
const DeleteIcon = React.lazy(() => import('../DeleteSection'))
const CreateAnswer = React.lazy(() => import('../Answers/CreateAnswer'))

const SingleComment: React.FC<{ comment: RateState; setAllComments: React.Dispatch<React.SetStateAction<RateState[]>> }> = ({
   comment,
   setAllComments
}) => {
   const {
      state: { productType }
   } = useLocation<LocationType>()
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
   const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false)

   return (
      <Card sx={{ marginBottom: '1.2rem', marginTop: '1.2rem' }}>
         <CommentCard>
            <LeftSide>
               <Typography variant='h5'>{comment.userName}</Typography>
               <Rating name='read-only' precision={0.5} value={comment.rating} size='large' readOnly />
               <Typography variant='subtitle2'>{formatDate(comment.ratedAt)}</Typography>
            </LeftSide>
            <RightSide>
               <Typography variant='body1'>{comment.comment}</Typography>
               <LikeDislike
                  setIsAnswerOpen={setIsAnswerOpen}
                  productType={productType}
                  commentId={comment._id}
                  responses={comment.responses}
               />
            </RightSide>
            <DeleteIcon setComments={setAllComments} commentId={comment._id} commentsUserName={comment.userName} />
         </CommentCard>
         <Collapse in={isAnswerOpen}>
            <CardContent>
               <CreateAnswer userName={comment.userName} />
            </CardContent>
         </Collapse>
      </Card>
   )
}

export default SingleComment
