import React from 'react'
import { RateState } from '../../../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/Helpers'

import { StyledCommentCard } from '../../Styles'
import { RightSide } from '../../../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/CommentStyle'
import { TransitionGroup } from 'react-transition-group'

import Card from '@mui/material/Card'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'

const CardContentLeftSide = React.lazy(
   () => import('../../../../../../Components/RatingComponents/RatingCardLeftContent')
)
const CommentAnswers = React.lazy(() => import('../CommentAnswer/CommentAnswers'))
const RemoveSingleCommentBtn = React.lazy(() => import('./RemoveCommentBtn'))

const SingleCommentCard: React.FC<{ comments: RateState[]; productID: string; leftTitle: string }> = ({
   comments,
   leftTitle,
   productID,
}) => {
   return (
      <TransitionGroup component={null}>
         {comments.map((comment: RateState) => (
            <Collapse key={comment._id} timeout={150}>
               <Card sx={{ margin: '1rem 0' }} key={comment._id}>
                  <StyledCommentCard>
                     <CardContentLeftSide
                        contentText={leftTitle}
                        ratedAt={comment.ratedAt}
                        rating={comment.rating}
                     />
                     <RightSide>
                        <Typography variant='body1'>{comment.comment}</Typography>
                        <RemoveSingleCommentBtn productID={productID} commentToDeletId={comment._id} />
                     </RightSide>
                  </StyledCommentCard>
                  <CommentAnswers commentAnswers={comment.commentAnswers} />
               </Card>
            </Collapse>
         ))}
      </TransitionGroup>
   )
}

export default SingleCommentCard
