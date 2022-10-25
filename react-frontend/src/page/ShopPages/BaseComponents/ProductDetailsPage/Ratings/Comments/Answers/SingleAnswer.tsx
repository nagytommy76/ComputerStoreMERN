import React, { useContext, useState, useEffect } from 'react'
import { CommentAnswerType } from '../Helpers'
import { formatDate } from '../../../../../../Helpers/FormatDate'

import { SingleAnswerStyle, LeftAnswerStyle, RightAnswerStyle, StyledChildAnswers } from './AnswerStyle'
import Typography from '@mui/material/Typography'

import AnswerList from './AnswerList'
import { AnswerContext } from '../Context/AnswerContext'
import OpenAnswerTextField from '../Includes/OpenAnswerTextField'
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
               <div style={{ display: 'flex' }}>
                  <LikeDislike
                     commentUserId={answer.userId}
                     responses={answer.responses}
                     commentId={commentId}
                     answerId={answer._id}
                  />
                  <OpenAnswerTextField
                     commentUserId={answer.userId}
                     setIsAnswerOpen={setIsCreateAnswerOpen}
                  />
               </div>
            </RightAnswerStyle>
            <DeleteAnswer commentId={commentId} answerId={answer._id} answerUserName={answer.userName} />
         </SingleAnswerStyle>
         <CreateAnswer
            isCreateAnswerOpen={isCreateAnswerOpen}
            userName={answer.userName}
            commentId={commentId}
            parentCommentId={answer._id}
            commentDepth={answer.commentDepth + 1}
         />
         <StyledChildAnswers>{childReplies && <AnswerList answers={childReplies} />}</StyledChildAnswers>
      </>
   )
}

export default SingleAnswer
