import React from 'react'
import { RateState } from '../../../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/Helpers'

import { StyledCommentCard } from '../../Styles'
import { RightSide } from '../../../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/CommentStyle'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const CardContentLeftSide = React.lazy(
   () => import('../../../../../../Components/RatingComponents/RatingCardLeftContent')
)
const CommentAnswers = React.lazy(() => import('../CommentAnswers'))
const RemoveSingleCommentBtn = React.lazy(() => import('./RemoveCommentBtn'))

const SingleCommentCard: React.FC<{ comments: RateState[]; leftTitle: string }> = ({
   comments,
   leftTitle,
}) => {
   return (
      <>
         {comments.map((comment: RateState) => (
            <Card sx={{ margin: '1rem 0' }} key={comment._id}>
               <StyledCommentCard>
                  <CardContentLeftSide
                     contentText={leftTitle}
                     ratedAt={comment.ratedAt}
                     rating={comment.rating}
                  />
                  <RightSide>
                     <Typography variant='body1'>{comment.comment}</Typography>
                     <RemoveSingleCommentBtn commentToDeletId={comment._id} />
                  </RightSide>
               </StyledCommentCard>
               <CommentAnswers commentAnswers={comment.commentAnswers} />
            </Card>
         ))}
      </>
   )
}

export default SingleCommentCard
