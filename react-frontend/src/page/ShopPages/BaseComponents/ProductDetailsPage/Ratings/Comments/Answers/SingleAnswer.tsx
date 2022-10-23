import React, { useContext, useState, useEffect } from 'react'
import { CommentAnswerType } from '../Helpers'
import { formatDate } from '../../../../../../Helpers/FormatDate'

import { SingleAnswerStyle, LeftAnswerStyle, RightAnswerStyle, StyledChildAnswers } from './AnswerStyle'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'

import AnswerList from './AnswerList'
import { AnswerContext } from '../Context/AnswerContext'
const LikeDislike = React.lazy(() => import('../Likes'))
const DeleteAnswer = React.lazy(() => import('./AnswerDelete'))
const CreateAnswer = React.lazy(() => import('./CreateAnswer'))

const SingleAnswer: React.FC<{ answer: CommentAnswerType }> = ({ answer }) => {
   const { getReplies, commentId } = useContext(AnswerContext)
   const [childReplies, setChildReplies] = useState<CommentAnswerType[]>([])
   const [isCreateAnswerOpen, setIsCreateAnswerOpen] = useState<boolean>(false)

   useEffect(() => {
      const replies = getReplies(answer._id)
      setChildReplies(replies)
   }, [answer.parentCommentId, getReplies, answer._id])

   return (
      <>
         <SingleAnswerStyle>
            <LeftAnswerStyle>
               <Typography variant='h5'>{answer.userName}</Typography>
               <Typography variant='subtitle1'>{formatDate(answer.answeredAt)}</Typography>
            </LeftAnswerStyle>
            <RightAnswerStyle>
               <Typography variant='body1'>{answer.answer}</Typography>
               <LikeDislike
                  commentUserId={answer.userId}
                  responses={answer.responses}
                  commentId={commentId}
                  setIsAnswerOpen={setIsCreateAnswerOpen}
                  answerId={answer._id}
               />
            </RightAnswerStyle>
            <DeleteAnswer commentId={commentId} answerId={answer._id} answerUserName={answer.userName} />
            {/* <Button onClick={handleOpenAnswer}>teszt</Button> */}
         </SingleAnswerStyle>
         <Collapse timeout={150} in={isCreateAnswerOpen}>
            <CreateAnswer
               userName={answer.userName}
               commentId={commentId}
               parentCommentId={answer._id}
               commentDepth={answer.commentDepth + 1}
            />
         </Collapse>
         <StyledChildAnswers>{childReplies && <AnswerList answers={childReplies} />}</StyledChildAnswers>
      </>
   )
}

export default SingleAnswer
