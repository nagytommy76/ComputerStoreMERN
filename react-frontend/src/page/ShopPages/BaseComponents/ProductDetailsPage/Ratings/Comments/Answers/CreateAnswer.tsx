import React, { useState } from 'react'

import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'

import { AnswerContainer, ButtonAlertContainer } from './AnswerStyle'
import axios from 'axios'
import { useLocation } from 'react-router'
import { LocationType } from '../../../../../BaseTypes'

const CreateAnswer: React.FC<{ userName: string; commentId: string }> = ({ userName, commentId }) => {
   const {
      state: { _id, productType }
   } = useLocation<LocationType>()
   const [answerText, setAnswerText] = useState<string>('')
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAnswerText(event.target.value)
   }

   const handleAnswerSend = async () => {
      if (answerText !== '' || answerText) {
         setIsLoading(true)
         try {
            const response = await axios.post(`/${productType}/save-${productType}-answer`, {
               answer: answerText,
               cpuId: _id,
               commentId
            })
            console.log(response.data)
            setIsLoading(false)
         } catch (error) {
            console.log(error)
         }
      }
   }

   return (
      <AnswerContainer>
         <TextField
            id='answerField'
            label={`Válasz üzenet ${userName} részére`}
            placeholder={`Válasz üzenet ${userName} részére`}
            fullWidth
            multiline
            maxRows={5}
            value={answerText}
            onChange={handleTextFieldChange}
         />
         <ButtonAlertContainer>
            <LoadingButton
               endIcon={<SendIcon />}
               loading={isLoading}
               loadingPosition='end'
               sx={{ width: '190px' }}
               onClick={handleAnswerSend}
               color='warning'
               variant='outlined'>
               Válasz küldése
            </LoadingButton>
            <h1>Alert Van!!!</h1>
         </ButtonAlertContainer>
      </AnswerContainer>
   )
}

export default CreateAnswer
