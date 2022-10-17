import React, { useContext, useState } from 'react'
import { AnswerContext } from '../Context/AnswerContext'

import Collapse from '@mui/material/Collapse'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { CommentCard, RightSide } from '../CommentStyle'

import { RateState } from '../Helpers'

import AnswerList from '../Answers/AnswerList'
const CardContentLeftSide = React.lazy(
   () => import('../../../../../../Components/RatingComponents/RatingCardLeftContent')
)
const LikeDislike = React.lazy(() => import('../Likes'))
const DeleteSection = React.lazy(() => import('../DeleteSection'))
const CreateAnswer = React.lazy(() => import('../Answers/CreateAnswer'))

const SingleComment: React.FC<{
   comment: RateState
   setAllComments: React.Dispatch<React.SetStateAction<RateState[]>>
}> = ({ comment, setAllComments }) => {
   const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false)
   const { rootAnswers } = useContext(AnswerContext)
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
         <CardContent>
            <AnswerList answers={rootAnswers} commentId={comment._id} />
         </CardContent>
         <Collapse in={isAnswerOpen} timeout={150}>
            <CardContent>
               <CreateAnswer commentId={comment._id} userName={comment.userName} />
            </CardContent>
         </Collapse>
      </Card>
   )
}

export default SingleComment
