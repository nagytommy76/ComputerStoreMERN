import React, { useContext } from 'react'
import { formatDate } from '../../../../../../Helpers/FormatDate'

import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import { TransitionGroup } from 'react-transition-group'
import { SingleAnswerStyle, LeftAnswerStyle, RightAnswerStyle } from './AnswerStyle'
import { AnswerContext } from '../Context/AnswerContext'

const DeleteAnswer = React.lazy(() => import('./AnswerDelete'))

const Answers: React.FC<{ commentId: string }> = ({ commentId }) => {
   const { commentAnswers } = useContext(AnswerContext)
   return (
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
                  </RightAnswerStyle>
                  <DeleteAnswer
                     commentId={commentId}
                     answerId={answers._id}
                     answerUserName={answers.userName}
                  />
               </SingleAnswerStyle>
            </Collapse>
         ))}
      </TransitionGroup>
   )
}

export default Answers
