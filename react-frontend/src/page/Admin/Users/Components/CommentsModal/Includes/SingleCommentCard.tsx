import React from 'react'
import { RateState } from '../../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/Helpers'

import { StyledCommentCard } from '../Styles'
import Card from '@mui/material/Card'

const SingleCommentCard: React.FC<{ comments: RateState[] }> = ({ comments }) => {
   return (
      <>
         {comments.map((comment: RateState) => (
            <Card key={comment._id}>
               <StyledCommentCard>
                  <h1>{comment.comment}</h1>
               </StyledCommentCard>
            </Card>
         ))}
      </>
   )
}

export default SingleCommentCard
