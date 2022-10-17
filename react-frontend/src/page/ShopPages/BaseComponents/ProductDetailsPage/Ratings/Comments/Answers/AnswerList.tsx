import React from 'react'
import { CommentAnswerType } from '../Helpers'
import SingleAnswer from './SingleAnswer'

import Collapse from '@mui/material/Collapse'
import { TransitionGroup } from 'react-transition-group'

const AnswerList: React.FC<{ answers: CommentAnswerType[]; commentId?: string }> = ({
   answers,
   commentId = '',
}) => {
   return (
      <>
         <TransitionGroup component={null}>
            {answers.map(answer => (
               <Collapse key={answer._id} timeout={150}>
                  <SingleAnswer key={answer._id} answer={answer} commentId={commentId} />
               </Collapse>
            ))}
         </TransitionGroup>
      </>
   )
}

export default AnswerList
