import React from 'react'
import { CommentAnswerType } from '../Helpers'
import SingleAnswer from './SingleAnswer/SingleAnswer'

import Collapse from '@mui/material/Collapse'
import { TransitionGroup } from 'react-transition-group'

const AnswerList: React.FC<{ answers: CommentAnswerType[] }> = ({ answers }) => {
   return (
      <TransitionGroup component={null}>
         {answers &&
            answers.map(answer => (
               <Collapse key={answer._id} timeout={150}>
                  <SingleAnswer answer={answer} />
               </Collapse>
            ))}
      </TransitionGroup>
   )
}

export default AnswerList
