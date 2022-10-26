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
import Collapse from '@mui/material/Collapse'
import { AnswerContainer, ButtonAlertContainer } from './AnswerStyle'

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
   const [isAlert, setIsAlert] = useState<{
      severity: Severity
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

   const setAlertAndTimeout = (
      isAlertActive: boolean,
      message: string,
      severity: Severity,
      timeout: number | undefined = 6000
   ) => {
      setIsAlert({ isAlertActive, message, severity })
      setTimeout(() => {
         closeAlert()
         setIsCreateAnswerOpen(false)
      }, timeout)
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
            <ButtonAlertContainer>
               <LoadingButton
                  size='small'
                  endIcon={<SendIcon />}
                  loading={isLoading}
                  loadingPosition='end'
                  onClick={handleAnswerSend}
                  color='warning'
                  variant='text'
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
      </Collapse>
   )
}

export default CreateAnswer
type Severity = 'success' | 'info' | 'warning' | 'error' | undefined
