import React, { useEffect, useState, useContext, useRef } from 'react'
import { axiosInstance as axios, isAxiosError } from '../../../../../../../../../AxiosSetup/AxiosInstance'
import DetailsContext from '../../../../../../../Context/DetailsContext'
import useSetAlert from './useSetAlert'

import { CommentAnswerType } from '../../../Helpers'

const useEdit = (
   answerId: string,
   commentId: string,
   currentAnswerText: string,
   setLocalAnswerText: React.Dispatch<React.SetStateAction<CommentAnswerType | undefined>>,
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
         const result = await axios.patch(`/${productType}/edit-${productType}-answer`, {
            answerEditText: answerEditTextRef.current.value,
            productId,
            answerId,
            commentId,
         })
         setLocalAnswerText(result.data.foundCommentAnswer)
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
