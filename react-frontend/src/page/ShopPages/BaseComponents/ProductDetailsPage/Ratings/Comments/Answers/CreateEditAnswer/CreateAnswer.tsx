import React, { useState, useContext } from 'react'
import { axiosInstance } from '../../../../../../../../AxiosSetup/AxiosInstance'

import { AnswerContext } from '../../Context/AnswerContext'
import DetailsContext from '../../../../../../Context/DetailsContext'
import useSetAlert from './Hook/useSetAlert'

import ButtonAndAlert from './includes/ButtonAndAlert'

import TextField from '@mui/material/TextField'
import Collapse from '@mui/material/Collapse'
import { AnswerContainer } from '../AnswerStyle'

const CreateAnswer: React.FC<{
   userName: string
   commentId: string
   isCreateAnswerOpen: boolean
   setIsCreateAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
   commentDepth?: number
   parentCommentId?: string
}> = ({
   userName,
   commentId,
   isCreateAnswerOpen,
   setIsCreateAnswerOpen,
   commentDepth = 1,
   parentCommentId = null,
}) => {
   const { productId, productType } = useContext(DetailsContext)

   const { createLocalAnswer } = useContext(AnswerContext)

   const [answerText, setAnswerText] = useState<string>('')
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const { isAlert, setAlertAndTimeout, closeAlert } = useSetAlert(setIsCreateAnswerOpen)

   const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAnswerText(event.target.value)
   }

   const handleAnswerSend = async () => {
      try {
         setIsLoading(true)
         if (answerText === '') {
            setAlertAndTimeout(true, 'Kérlek írj kommentet!', 'error')
            setIsLoading(false)
         } else {
            const response = await axiosInstance.post(`/${productType}/save-${productType}-answer`, {
               answer: answerText,
               productId,
               commentId,
               commentDepth,
               parentCommentId,
            })
            if (response.status === 201) {
               setIsLoading(false)
               setAlertAndTimeout(true, 'A Válaszodat fogadtuk!', 'success')
               createLocalAnswer(response.data)
               setAnswerText('')
            }
         }
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <Collapse timeout={150} in={isCreateAnswerOpen}>
         <AnswerContainer>
            <TextField
               autoFocus
               size='small'
               id='answerField'
               label={`Válasz üzenet ${userName} részére`}
               placeholder={`Válasz üzenet ${userName} részére`}
               fullWidth
               multiline
               maxRows={5}
               value={answerText}
               onChange={handleTextFieldChange}
            />
            <ButtonAndAlert
               closeAlert={closeAlert}
               handleAnswerSend={handleAnswerSend}
               isAlert={isAlert}
               isLoading={isLoading}
            />
         </AnswerContainer>
      </Collapse>
   )
}

export default CreateAnswer
