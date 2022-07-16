import React from 'react'
import { CommentAnswerType } from '../../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/Helpers'
import { formatDate } from '../../../../../Helpers/FormatDate'

import {
   LeftAnswerStyle,
   RightAnswerStyle,
   SingleAnswerStyle,
} from '../../../../../ShopPages/BaseComponents/ProductDetailsPage/Ratings/Comments/Answers/AnswerStyle'
import { TransitionGroup } from 'react-transition-group'

import Collapse from '@mui/material/Collapse'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const CommentAnswers: React.FC<{ commentAnswers: CommentAnswerType[] }> = ({ commentAnswers }) => {
   return (
      <CardContent>
         <TransitionGroup component={null}>
            {commentAnswers.map(answers => (
               <Collapse key={answers._id} timeout={150}>
                  <SingleAnswerStyle>
                     <LeftAnswerStyle>
                        <Typography variant='h5'>{answers.userName}</Typography>
                        <Typography variant='subtitle1'>{formatDate(answers.answeredAt)}</Typography>
                     </LeftAnswerStyle>
                     <RightAnswerStyle>
                        <Typography variant='body1'>{answers.answer}</Typography>
                        <p>Törlés gomb</p>
                     </RightAnswerStyle>
                  </SingleAnswerStyle>
               </Collapse>
            ))}
         </TransitionGroup>
      </CardContent>
   )
}

export default CommentAnswers
