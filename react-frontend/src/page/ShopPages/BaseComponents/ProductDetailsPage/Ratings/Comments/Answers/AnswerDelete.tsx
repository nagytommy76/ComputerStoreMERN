import React, { useContext } from 'react'
import axios from 'axios'

import { useLocation } from 'react-router-dom'
import { LocationType } from '../../../../../BaseTypes'
import { AnswerContext } from '../Context/AnswerContext'

const Delete = React.lazy(() => import('../Includes/DeleteIcon'))

const AnswerDelete: React.FC<{ answerUserName: string; answerId: string; commentId: string }> = ({
   answerUserName,
   answerId,
   commentId
}) => {
   const location = useLocation()
   const { _id, productType } = location.state as LocationType

   const { setCommentAnswer } = useContext(AnswerContext)

   const handleAnswerDelete = async () => {
      try {
         const response = await axios.delete(`/${productType}/${productType}-answer-remove`, {
            data: { productId: _id, answerId, commentId }
         })
         if (response.status === 200) {
            setCommentAnswer(response.data)
         }
      } catch (error) {
         console.log(error)
      }
   }

   return <Delete incomingUserName={answerUserName} handleDelete={handleAnswerDelete} />
}

export default AnswerDelete
