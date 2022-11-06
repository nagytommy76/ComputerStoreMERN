import React, { useContext, useEffect, useState } from 'react'
import { AnswerContext } from '../Context/AnswerContext'
import { RateState } from '../Helpers'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import { CommentCard, RightSide, LikeAndReplyContainer } from '../CommentStyle'

import AnswerList from '../Answers/AnswerList'

import OpenAnswerTextField from '../Answers/SingleAnswer/OpenAnswerTextField'
const CardContentLeftSide = React.lazy(
   () => import('../../../../../../Components/RatingComponents/RatingCardLeftContent')
)
const LikeDislike = React.lazy(() => import('../Likes'))
const DeleteSection = React.lazy(() => import('../DeleteSection'))
const CreateAnswer = React.lazy(() => import('../Answers/CreateEditAnswer/CreateAnswer'))
const EditAnswer = React.lazy(() => import('../Answers/CreateEditAnswer/EditAnswer'))

const SingleComment: React.FC<{
   comment: RateState
   setAllComments: React.Dispatch<React.SetStateAction<RateState[]>>
}> = ({ comment, setAllComments }) => {
   const [isAnswerOpen, setIsAnswerOpen] = useState<boolean>(false)
   const [isEditOpen, setIsEditOpen] = useState<boolean>(false)
   const [localComment, setLocalComment] = useState<RateState>()

   useEffect(() => {
      setLocalComment(comment)
   }, [comment])

   const { rootAnswers } = useContext(AnswerContext)
   return localComment ? (
      <Card sx={{ marginBottom: '1.2rem', marginTop: '1.2rem' }}>
         <CommentCard>
            <CardContentLeftSide
               contentText={localComment.userName}
               ratedAt={localComment.ratedAt}
               rating={localComment.rating}
            />
            <RightSide>
               <Typography variant='body1'>{localComment.comment}</Typography>
               <LikeAndReplyContainer>
                  <LikeDislike
                     commentUserId={localComment.userId}
                     commentId={localComment._id}
                     responses={localComment.responses}
                  />
                  <OpenAnswerTextField
                     setIsEditAnswerOpen={setIsEditOpen}
                     commentUserId={localComment.userId}
                     setIsAnswerOpen={setIsAnswerOpen}
                  />
               </LikeAndReplyContainer>
            </RightSide>
            <DeleteSection
               setComments={setAllComments}
               commentId={localComment._id}
               commentsUserName={localComment.userName}
            />
         </CommentCard>
         <CardContent sx={{ padding: '1rem 1rem 0 1rem' }}>
            <CreateAnswer
               isCreateAnswerOpen={isAnswerOpen}
               setIsCreateAnswerOpen={setIsAnswerOpen}
               commentId={localComment._id}
               userName={localComment.userName}
            />
            <EditAnswer
               commentId={localComment._id}
               answerId={null}
               urlEndpoint='comment'
               currentAnswerText={localComment.comment}
               isEditAnswerOpen={isEditOpen}
               setIsEditAnswerOpen={setIsEditOpen}
               setLocalComment={setLocalComment}
            />
         </CardContent>
         <CardContent sx={{ padding: '0 1rem 0 1rem' }}>
            <AnswerList answers={rootAnswers} />
         </CardContent>
      </Card>
   ) : (
      <></>
   )
}

export default SingleComment
