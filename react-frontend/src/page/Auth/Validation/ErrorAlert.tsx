import React from 'react'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Fade from '@mui/material/Fade'

const ResendEmailButton = React.lazy(() => import('./ResendEmailButton'))

const ErrorAlert: React.FC<{ hasError: boolean; errorMsgTitle: string; message?: string; validationCode: string }> = ({
   hasError,
   errorMsgTitle,
   message,
   validationCode
}) => {
   return (
      <Fade in={hasError}>
         <span style={{ width: '100%', marginTop: '1rem' }}>
            <Alert variant='standard' color='error'>
               <AlertTitle>{errorMsgTitle}</AlertTitle>
               {message}
               <ResendEmailButton confirmCode={validationCode} />
            </Alert>
         </span>
      </Fade>
   )
}

export default ErrorAlert
