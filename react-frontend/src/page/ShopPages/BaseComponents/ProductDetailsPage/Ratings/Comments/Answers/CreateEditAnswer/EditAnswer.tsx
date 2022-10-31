import React, { useState } from 'react'
import useSetAlert from './Hook/useSetAlert'

import ButtonAndAlert from './includes/ButtonAndAlert'
import { AnswerContainer } from '../AnswerStyle'
import TextField from '@mui/material/TextField'
import Collapse from '@mui/material/Collapse'

const EditAnswer: React.FC<{
   isEditAnswerOpen: boolean
   setIsEditAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setIsEditAnswerOpen, isEditAnswerOpen }) => {
   const [answerText, setAnswerText] = useState<string>('')
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const { isAlert, setAlertAndTimeout, closeAlert } = useSetAlert(setIsEditAnswerOpen)
   const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAnswerText(event.target.value)
   }

   const handleAnswerEdit = async () => {
      console.log('Módosítás sikeres!')
   }

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
               value={answerText}
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
