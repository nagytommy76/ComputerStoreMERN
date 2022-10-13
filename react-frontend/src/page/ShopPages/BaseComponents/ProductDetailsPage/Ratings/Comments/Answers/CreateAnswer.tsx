import React, { useState, useContext } from 'react'
import { axiosInstance } from '../../../../../../../AxiosSetup/AxiosInstance'

import { AnswerContext } from '../Context/AnswerContext'
import DetailsContext from '../../../../../Context/DetailsContext'

import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'
import { AnswerContainer, ButtonAlertContainer } from './AnswerStyle'

const CreateAnswer: React.FC<{
   userName: string
   commentId: string
   commentDepth?: number
   parentCommentId: string
}> = ({ userName, commentId, commentDepth = 1, parentCommentId }) => {
   const { productId, productType } = useContext(DetailsContext)

   const { setCommentAnswer } = useContext(AnswerContext)

   const [answerText, setAnswerText] = useState<string>('')
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [isAlert, setIsAlert] = useState<{
      severity: 'success' | 'info' | 'warning' | 'error' | undefined
      isAlertActive: boolean
      message: string
   }>({ isAlertActive: false, message: '', severity: 'success' })

   const closeAlert = () => {
      setIsAlert({
         isAlertActive: false,
         message: '',
         severity: 'success',
      })
   }

   const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAnswerText(event.target.value)
   }

   const handleAnswerSend = async () => {
      try {
         setIsLoading(true)
         if (answerText === '') {
            setIsAlert({ isAlertActive: true, message: 'Kérlek írj kommentet!', severity: 'error' })
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
               setIsAlert({ isAlertActive: true, message: 'A Válaszodat fogadtuk!', severity: 'success' })
               setCommentAnswer(response.data)
               setAnswerText('')
            }
         }
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <AnswerContainer>
         <TextField
            autoFocus
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
               variant='outlined'
            >
               Válasz küldése
            </LoadingButton>
            <Slide direction='left' in={isAlert.isAlertActive}>
               <Alert
                  action={
                     <Button color='inherit' onClick={closeAlert}>
                        Ok
                     </Button>
                  }
                  severity={isAlert.severity}
                  variant='standard'
               >
                  {isAlert.message}
               </Alert>
            </Slide>
         </ButtonAlertContainer>
      </AnswerContainer>
   )
}

export default CreateAnswer
