import React from 'react'
import { CommentAnswerType } from '../Helpers'
import SingleAnswer from './SingleAnswer'

const AnswerList: React.FC<{ answers: CommentAnswerType[]; commentId?: string }> = ({
   answers,
   commentId = '',
}) => {
   return (
      <>
         {answers.map(answer => (
            <SingleAnswer key={answer._id} answer={answer} commentId={commentId} />
         ))}
      </>
   )
}

export default AnswerList
