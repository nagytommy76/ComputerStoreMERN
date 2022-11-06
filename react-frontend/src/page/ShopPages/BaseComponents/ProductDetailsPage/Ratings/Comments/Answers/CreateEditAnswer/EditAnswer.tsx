import React from 'react'
import useEdit from './Hook/useEdit'
import { CommentAnswerType, RateState } from '../../Helpers'

import { AnswerContainer } from '../AnswerStyle'
import ButtonAndAlert from './includes/ButtonAndAlert'
import TextField from '@mui/material/TextField'
import Collapse from '@mui/material/Collapse'

const EditAnswer: React.FC<{
   answerId: string | null
   commentId: string
   currentAnswerText: string
   isEditAnswerOpen: boolean
   urlEndpoint?: string
   setIsEditAnswerOpen: React.Dispatch<React.SetStateAction<boolean>>
   setLocalAnswerText?: React.Dispatch<React.SetStateAction<CommentAnswerType | undefined>>
   setLocalComment?: React.Dispatch<React.SetStateAction<RateState | undefined>>
}> = ({
   answerId,
   commentId,
   currentAnswerText,
   urlEndpoint = 'answer',
   setIsEditAnswerOpen,
   setLocalAnswerText,
   setLocalComment,
   isEditAnswerOpen,
}) => {
   const { answerEditTextRef, closeAlert, handleAnswerEdit, isAlert, isLoading } = useEdit(
      answerId,
      commentId,
      currentAnswerText,
      urlEndpoint,
      setLocalAnswerText,
      setLocalComment,
      setIsEditAnswerOpen
   )

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
               inputRef={answerEditTextRef}
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
