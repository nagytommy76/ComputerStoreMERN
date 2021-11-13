import React, { useState } from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { AnswerContainer, ButtonAlertContainer } from './AnswerStyle'

const CreateAnswer: React.FC<{ userName: string }> = ({ userName }) => {
   const [answerText, setAnswerText] = useState<string>('')

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAnswerText(event.target.value)
   }

   const handleAnswerSend = () => {
      if (answerText !== '' || answerText) {
         console.log(answerText)
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
            maxRows={6}
            value={answerText}
            onChange={handleChange}
         />
         <ButtonAlertContainer>
            <Button sx={{ width: '165px' }} onClick={handleAnswerSend} color='warning' variant='outlined'>
               Válasz küldése
            </Button>
            <h1>Alert Van!!!</h1>
         </ButtonAlertContainer>
      </AnswerContainer>
   )
}

export default CreateAnswer
