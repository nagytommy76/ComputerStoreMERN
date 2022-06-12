import React, { useContext } from 'react'
import { axiosInstance } from '../../../../../../../AxiosSetup/AxiosInstance'

import { AnswerContext } from '../Context/AnswerContext'
import DetailsContext from '../../../../../Context/DetailsContext'

const Delete = React.lazy(() => import('../Includes/DeleteIcon'))

const AnswerDelete: React.FC<{ answerUserName: string; answerId: string; commentId: string }> = ({
   answerUserName,
   answerId,
   commentId,
}) => {
   const { productId, productType } = useContext(DetailsContext)

   const { setCommentAnswer } = useContext(AnswerContext)

   const handleAnswerDelete = async () => {
      try {
         const response = await axiosInstance.delete(`/${productType}/${productType}-answer-remove`, {
            data: { productId, answerId, commentId },
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
