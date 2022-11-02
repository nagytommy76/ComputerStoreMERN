import React, { useState, useEffect, useContext } from 'react'
import useSetAlert from './Hook/useSetAlert'
import DetailsContext from '../../../../../../Context/DetailsContext'
import { axiosInstance as axios, isAxiosError } from '../../../../../../../../AxiosSetup/AxiosInstance'

import ButtonAndAlert from './includes/ButtonAndAlert'
import { AnswerContainer } from '../AnswerStyle'
import TextField from '@mui/material/TextField'
import Collapse from '@mui/material/Collapse'

const EditAnswer: React.FC<{
   answerId: string
   commentId: string
   currentAnswerText: string
   isEditAnswerOpen: boolean
   setIsEditAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ answerId, commentId, currentAnswerText, setIsEditAnswerOpen, isEditAnswerOpen }) => {
   const { productId, productType } = useContext(DetailsContext)
   const [answerEditText, setAnswerEditText] = useState<string>('')
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const { isAlert, setAlertAndTimeout, closeAlert } = useSetAlert(setIsEditAnswerOpen)

   const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAnswerEditText(event.target.value)
   }

   const handleAnswerEdit = async () => {
      if (answerEditText === '') return
      setIsLoading(true)
      try {
         const result = await axios.patch(`/${productType}/edit-${productType}-answer`, {
            answerEditText,
            productId,
            answerId,
            commentId,
         })
         console.log(result.data.foundCommentAnswer.answer)
         setAnswerEditText(result.data.foundCommentAnswer.answer)
         setAlertAndTimeout(true, 'Sikeres volt a módosítás', 'info')
         setIsLoading(false)
      } catch (error) {
         if (isAxiosError(error)) {
            console.log(error)
         }
      }
   }

   useEffect(() => {
      setAnswerEditText(currentAnswerText)
   }, [currentAnswerText])

   return (
      <Collapse timeout={150} in={isEditAnswerOpen}>
         <AnswerContainer>
            <TextField
               autoFocus
               size='small'
               id='answerEditField'
               label='Válasz módisítása'
               placeholder='Válasz módisítása'
               fullWidth
               multiline
               maxRows={5}
               value={answerEditText}
               onChange={handleTextFieldChange}
            />
            <ButtonAndAlert
               buttonText='Válasz módosítása'
               closeAlert={closeAlert}
               handleAnswerSend={handleAnswerEdit}
               isAlert={isAlert}
               isLoading={isLoading}
            />
         </AnswerContainer>
      </Collapse>
   )
}

export default EditAnswer
