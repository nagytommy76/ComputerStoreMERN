import React from 'react'
import { AlertInterface } from '../Hook/useSetAlert'

import { ButtonAlertContainer } from '../../AnswerStyle'
import SendIcon from '@mui/icons-material/Send'
import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'

const ButtonAndAlert: React.FC<{
   isLoading: boolean
   isAlert: AlertInterface
   closeAlert: () => void
   handleAnswerSend: () => Promise<void>
   buttonText?: string
}> = ({ isLoading, isAlert, closeAlert, handleAnswerSend, buttonText = 'Válasz küldése' }) => {
   return (
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
            {buttonText}
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
   )
}

export default ButtonAndAlert
