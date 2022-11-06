import React, { useEffect, useState, useContext, useRef } from 'react'
import { axiosInstance as axios, isAxiosError } from '../../../../../../../../../AxiosSetup/AxiosInstance'
import DetailsContext from '../../../../../../../Context/DetailsContext'
import useSetAlert from './useSetAlert'

import { CommentAnswerType, RateState } from '../../../Helpers'

const useEdit = (
   answerId: string | null,
   commentId: string,
   currentAnswerText: string,
   urlEndpoint: string,
   setLocalAnswerText: React.Dispatch<React.SetStateAction<CommentAnswerType | undefined>> | undefined,
   setLocalComment: React.Dispatch<React.SetStateAction<RateState | undefined>> | undefined,
   setIsEditAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
   const { productId, productType } = useContext(DetailsContext)
   const answerEditTextRef = useRef<HTMLInputElement>(null!)
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const { isAlert, setAlertAndTimeout, closeAlert } = useSetAlert(setIsEditAnswerOpen)

   useEffect(() => {
      answerEditTextRef.current.value = currentAnswerText
   }, [currentAnswerText])

   const handleAnswerEdit = async () => {
      if (!answerEditTextRef.current.value) return
      setIsLoading(true)
      try {
         const result = await axios.patch(`/${productType}/edit-${productType}-${urlEndpoint}`, {
            answerEditText: answerEditTextRef.current.value,
            productId,
            answerId,
            commentId,
         })
         if (setLocalAnswerText) setLocalAnswerText(result.data.foundCommentAnswer)
         if (setLocalComment) setLocalComment(result.data.foundCommentAnswer)
         setAlertAndTimeout(true, 'Sikeres volt a módosítás', 'info')
      } catch (error) {
         if (isAxiosError(error)) {
            console.log(error)
         }
      } finally {
         setIsLoading(false)
      }
   }

   return {
      answerEditTextRef,
      isLoading,
      isAlert,
      closeAlert,
      handleAnswerEdit,
   }
}

export default useEdit
