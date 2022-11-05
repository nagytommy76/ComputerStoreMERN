import React from 'react'
import useCreateAnswer from './Hook/useCreateAnswer'

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
   const { answerTextRef, closeAlert, handleAnswerSend, isAlert, isLoading } = useCreateAnswer(
      commentId,
      commentDepth,
      parentCommentId,
      setIsCreateAnswerOpen
   )

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
               inputRef={answerTextRef}
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
