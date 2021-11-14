import React from 'react'
import { CommentAnswerType, formatDate } from '../Helpers'

import { AnswersContainerStyle, SingleAnswerStyle, LeftAnswerStyle, RightAnswerStyle } from './AnswerStyle'
import Typography from '@mui/material/Typography'

const Answers: React.FC<{ commentAnswers: CommentAnswerType[] }> = ({ commentAnswers }) => {
   return (
      <AnswersContainerStyle>
         {commentAnswers &&
            commentAnswers.map((answers) => (
               <SingleAnswerStyle key={answers._id}>
                  <LeftAnswerStyle>
                     <Typography variant='h6'>{answers.userName}</Typography>
                     <Typography variant='caption'>{formatDate(answers.answeredAt)}</Typography>
                  </LeftAnswerStyle>
                  <RightAnswerStyle>
                     <Typography variant='body2'>{answers.answer}</Typography>
                  </RightAnswerStyle>
               </SingleAnswerStyle>
            ))}
      </AnswersContainerStyle>
   )
}

export default Answers
