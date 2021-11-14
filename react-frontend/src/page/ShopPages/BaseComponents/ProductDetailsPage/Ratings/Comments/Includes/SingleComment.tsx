import React, { useEffect, useState } from 'react'
import { AnswerContext } from '../Context/AnswerContext'

import Collapse from '@mui/material/Collapse'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

import { CommentCard, RightSide, LeftSide } from '../CommentStyle'

import { formatDate, RateState, CommentAnswerType } from '../Helpers'

const LikeDislike = React.lazy(() => import('../Likes'))
const DeleteIcon = React.lazy(() => import('../DeleteSection'))
const CreateAnswer = React.lazy(() => import('../Answers/CreateAnswer'))
const Answers = React.lazy(() => import('../Answers/Answers'))

const SingleComment: React.FC<{ comment: RateState; setAllComments: React.Dispatch<React.SetStateAction<RateState[]>> }> = ({
   comment,
   setAllComments
}) => {
   const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false)
   const [commentAnswers, setCommentAnswers] = useState<CommentAnswerType[]>([])

   useEffect(() => {
      setCommentAnswers(comment.commentAnswers)
   }, [comment.commentAnswers])

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
                  commentUserId={comment.userId}
                  setIsAnswerOpen={setIsAnswerOpen}
                  commentId={comment._id}
                  responses={comment.responses}
               />
            </RightSide>
            <DeleteIcon setComments={setAllComments} commentId={comment._id} commentsUserName={comment.userName} />
         </CommentCard>
         <AnswerContext.Provider
            value={{
               commentAnswers,
               setCommentAnswer: setCommentAnswers
            }}>
            {commentAnswers.length > 0 && (
               <CardContent>
                  <Answers commentId={comment._id} />
               </CardContent>
            )}
            <Collapse in={isAnswerOpen}>
               <CardContent>
                  <CreateAnswer commentId={comment._id} userName={comment.userName} />
               </CardContent>
            </Collapse>
         </AnswerContext.Provider>
      </Card>
   )
}

export default SingleComment
