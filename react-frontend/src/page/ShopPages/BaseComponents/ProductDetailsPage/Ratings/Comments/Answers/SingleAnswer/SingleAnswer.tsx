import React, { useContext, useState, useEffect } from 'react'
import { CommentAnswerType } from '../../Helpers'
import { formatDate } from '../../../../../../../Helpers/FormatDate'

import { SingleAnswerStyle, LeftAnswerStyle, RightAnswerStyle, StyledChildAnswers } from '../AnswerStyle'
import { LikeAndReplyContainer } from '../../CommentStyle'
import Typography from '@mui/material/Typography'

import AnswerList from '../AnswerList'
import { AnswerContext } from '../../Context/AnswerContext'
import OpenAnswerTextField from './OpenAnswerTextField'
const LikeDislike = React.lazy(() => import('../../Likes'))
const DeleteAnswer = React.lazy(() => import('../AnswerDelete'))
const CreateAnswer = React.lazy(() => import('../CreateEditAnswer/CreateAnswer'))
const EditAnswer = React.lazy(() => import('../CreateEditAnswer/EditAnswer'))

const SingleAnswer: React.FC<{ answer: CommentAnswerType }> = ({ answer }) => {
   const { getReplies, commentId } = useContext(AnswerContext)

   const [localAnswer, setLocalAnswer] = useState<CommentAnswerType>()
   const [childReplies, setChildReplies] = useState<CommentAnswerType[]>([])
   const [isCreateAnswerOpen, setIsCreateAnswerOpen] = useState<boolean>(false)
   const [isEditAnswerOpen, setIsEditAnswerOpen] = useState<boolean>(false)

   useEffect(() => {
      setLocalAnswer(answer)
   }, [answer])

   useEffect(() => {
      const replies = getReplies(answer._id)
      setChildReplies(replies)
   }, [answer.parentCommentId, getReplies, answer._id])

   return localAnswer ? (
      <>
         <SingleAnswerStyle>
            <LeftAnswerStyle>
               <Typography variant='h5'>{localAnswer.userName}</Typography>
               <Typography variant='subtitle1'>{formatDate(localAnswer.answeredAt)}</Typography>
            </LeftAnswerStyle>
            <RightAnswerStyle>
               <Typography variant='body1'>{localAnswer.answer}</Typography>
               <LikeAndReplyContainer>
                  <LikeDislike
                     commentUserId={localAnswer.userId}
                     responses={localAnswer.responses}
                     commentId={commentId}
                     answerId={localAnswer._id}
                  />
                  <OpenAnswerTextField
                     setIsEditAnswerOpen={setIsEditAnswerOpen}
                     commentUserId={localAnswer.userId}
                     setIsAnswerOpen={setIsCreateAnswerOpen}
                  />
               </LikeAndReplyContainer>
            </RightAnswerStyle>
            <DeleteAnswer
               commentId={commentId}
               answerId={localAnswer._id}
               answerUserName={localAnswer.userName}
            />
         </SingleAnswerStyle>
         <CreateAnswer
            isCreateAnswerOpen={isCreateAnswerOpen}
            setIsCreateAnswerOpen={setIsCreateAnswerOpen}
            userName={localAnswer.userName}
            commentId={commentId}
            parentCommentId={localAnswer._id}
            commentDepth={localAnswer.commentDepth + 1}
         />
         <EditAnswer
            commentId={commentId}
            answerId={localAnswer._id}
            currentAnswerText={localAnswer.answer}
            setLocalAnswerText={setLocalAnswer}
            isEditAnswerOpen={isEditAnswerOpen}
            setIsEditAnswerOpen={setIsEditAnswerOpen}
         />
         <StyledChildAnswers>{childReplies && <AnswerList answers={childReplies} />}</StyledChildAnswers>
      </>
   ) : (
      <></>
   )
}

export default SingleAnswer
