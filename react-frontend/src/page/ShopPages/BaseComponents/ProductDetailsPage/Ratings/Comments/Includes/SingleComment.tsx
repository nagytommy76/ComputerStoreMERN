import React, { useState } from 'react'
import { CommentAnswerProvider } from '../Context/AnswerContext'

import Collapse from '@mui/material/Collapse'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { CommentCard, RightSide } from '../CommentStyle'

import { RateState } from '../Helpers'

const CardContentLeftSide = React.lazy(
   () => import('../../../../../../Components/RatingComponents/RatingCardLeftContent')
)
const LikeDislike = React.lazy(() => import('../Likes'))
const DeleteSection = React.lazy(() => import('../DeleteSection'))
const CreateAnswer = React.lazy(() => import('../Answers/CreateAnswer'))
const Answers = React.lazy(() => import('../Answers/Answers'))

const SingleComment: React.FC<{
   comment: RateState
   setAllComments: React.Dispatch<React.SetStateAction<RateState[]>>
}> = ({ comment, setAllComments }) => {
   const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false)

   return (
      <Card sx={{ marginBottom: '1.2rem', marginTop: '1.2rem' }}>
         <CommentCard>
            <CardContentLeftSide
               contentText={comment.userName}
               ratedAt={comment.ratedAt}
               rating={comment.rating}
            />
            <RightSide>
               <Typography variant='body1'>{comment.comment}</Typography>
               <LikeDislike
                  commentUserId={comment.userId}
                  setIsAnswerOpen={setIsAnswerOpen}
                  commentId={comment._id}
                  responses={comment.responses}
               />
            </RightSide>
            <DeleteSection
               setComments={setAllComments}
               commentId={comment._id}
               commentsUserName={comment.userName}
            />
         </CommentCard>
         <CommentAnswerProvider commentAnswersProp={comment.commentAnswers}>
            <>
               <CardContent>
                  <Answers commentId={comment._id} />
               </CardContent>
               <Collapse in={isAnswerOpen} timeout={150}>
                  <CardContent>
                     <CreateAnswer
                        parentCommentId={comment._id}
                        commentId={comment._id}
                        userName={comment.userName}
                     />
                  </CardContent>
               </Collapse>
            </>
         </CommentAnswerProvider>
      </Card>
   )
}

export default SingleComment
