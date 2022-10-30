import React from 'react'
import { CommentAnswerType } from '../Helpers'
import SingleAnswer from './SingleAnswer'

import Collapse from '@mui/material/Collapse'
import { TransitionGroup } from 'react-transition-group'

const AnswerList: React.FC<{ answers: CommentAnswerType[] }> = ({ answers }) => {
   return (
      <TransitionGroup component={null}>
         {answers &&
            answers.map(answer => (
               <Collapse key={answer._id} timeout={150}>
                  <SingleAnswer key={answer._id} answer={answer} />
               </Collapse>
            ))}
      </TransitionGroup>
   )
}

export default AnswerList
