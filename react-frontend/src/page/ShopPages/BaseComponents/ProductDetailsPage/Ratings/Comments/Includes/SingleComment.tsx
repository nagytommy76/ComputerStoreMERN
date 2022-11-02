import React, { useContext, useState } from 'react'
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
               <LikeAndReplyContainer>
                  <LikeDislike
                     commentUserId={comment.userId}
                     commentId={comment._id}
                     responses={comment.responses}
                  />
                  <OpenAnswerTextField
                     setIsEditAnswerOpen={() => false}
                     commentUserId={comment.userId}
                     setIsAnswerOpen={setIsAnswerOpen}
                  />
               </LikeAndReplyContainer>
            </RightSide>
            <DeleteSection
               setComments={setAllComments}
               commentId={comment._id}
               commentsUserName={comment.userName}
            />
         </CommentCard>
         <CardContent sx={{ padding: '1rem 1rem 0 1rem' }}>
            <CreateAnswer
               isCreateAnswerOpen={isAnswerOpen}
               setIsCreateAnswerOpen={setIsAnswerOpen}
               commentId={comment._id}
               userName={comment.userName}
            />
         </CardContent>
         <CardContent sx={{ padding: '0 1rem 0 1rem' }}>
            <AnswerList answers={rootAnswers} />
         </CardContent>
      </Card>
   )
}

export default SingleComment
