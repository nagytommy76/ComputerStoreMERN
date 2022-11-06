import React, { useState, useContext, useRef } from 'react'
import { axiosInstance as axios } from '../../../../../../../../../AxiosSetup/AxiosInstance'
import useSetAlert from './useSetAlert'
import DetailsContext from '../../../../../../../Context/DetailsContext'
import { AnswerContext } from '../../../Context/AnswerContext'

const useCreateAnswer = (
   commentId: string,
   commentDepth: number,
   parentCommentId: string | null,
   setIsCreateAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
   const { productId, productType } = useContext(DetailsContext)
   const { createLocalAnswer } = useContext(AnswerContext)

   const answerTextRef = useRef<HTMLTextAreaElement>(null!)
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const { isAlert, setAlertAndTimeout, closeAlert } = useSetAlert(setIsCreateAnswerOpen)

   const handleAnswerSend = async () => {
      try {
         setIsLoading(true)
         if (answerTextRef.current.value === '') {
            setAlertAndTimeout(true, 'Kérlek írj kommentet!', 'error')
         } else {
            const response = await axios.post(`/${productType}/save-${productType}-answer`, {
               answer: answerTextRef.current.value,
               productId,
               commentId,
               commentDepth,
               parentCommentId,
            })
            if (response.status === 201) {
               setAlertAndTimeout(true, 'A Válaszodat fogadtuk!', 'success')
               createLocalAnswer(response.data)
               answerTextRef.current.value = ''
            }
         }
      } catch (error) {
         console.log(error)
      } finally {
         setIsLoading(false)
      }
   }

   return {
      answerTextRef,
      handleAnswerSend,
      isAlert,
      closeAlert,
      isLoading,
   }
}

export default useCreateAnswer
