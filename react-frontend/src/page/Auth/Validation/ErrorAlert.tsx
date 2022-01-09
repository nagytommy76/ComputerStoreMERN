import React, { useState } from 'react'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Fade from '@mui/material/Fade'

import LoadingButton from '@mui/lab/LoadingButton'
import EmailIcon from '@mui/icons-material/Email'

const ErrorAlert: React.FC<{ hasError: boolean; errorMsgTitle: string; message?: string }> = ({
   hasError,
   errorMsgTitle,
   message
}) => {
   const [isPending, setIsPending] = useState<boolean>(false)
   const handleResendEmail = () => {
      console.log('email újraküldése')
   }

   return (
      <Fade in={hasError}>
         <span style={{ width: '100%', marginTop: '1rem' }}>
            <Alert variant='standard' color='error'>
               <AlertTitle>{errorMsgTitle}</AlertTitle>
               {message}
               <LoadingButton
                  loading={isPending}
                  onClick={handleResendEmail}
                  sx={{ marginTop: '.6rem' }}
                  endIcon={<EmailIcon />}
                  variant='outlined'
                  color='info'>
                  Email újraküldése
               </LoadingButton>
            </Alert>
         </span>
      </Fade>
   )
}

export default ErrorAlert
