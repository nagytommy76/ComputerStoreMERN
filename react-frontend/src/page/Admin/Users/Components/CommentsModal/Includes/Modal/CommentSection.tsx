import React, { useContext } from 'react'
import useGetComments from '../../Hooks/useGetComments'

import { CommentContext } from '../../../../Context/CommentContext'
import { IncomingCommentType } from '../../Reducer/ModalReducer'

import { StyledCommentSection } from '../../Styles'
import Typography from '@mui/material/Typography'

const SingleCommentCard = React.lazy(() => import('../SingleComment/SingleCommentCard'))

const CommentSection: React.FC = () => {
   const { selectedUserIdAndName, navLabelsValue } = useContext(CommentContext)
   const { commentsState } = useGetComments(selectedUserIdAndName?.userID)

   return (
      <StyledCommentSection>
         {commentsState[navLabelsValue].length > 0 ? (
            commentsState[navLabelsValue].map((comment: IncomingCommentType) => (
               <SingleCommentCard
                  key={comment._id}
                  leftTitle={`${comment.manufacturer} ${comment.type}`}
                  comments={comment.ratingValues}
               />
            ))
         ) : (
            <Typography align='center' variant='h4' component='h2'>
               Nincsenek kommentek
            </Typography>
         )}
      </StyledCommentSection>
   )
}

export default CommentSection
