import React from 'react'
import useSnackbar from '../Hooks/useSnackbar'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Fade from '@mui/material/Fade'
import Snackbar from '@mui/material/Snackbar'

const ResendEmailButton = React.lazy(() => import('./ResendEmailButton'))

const ErrorAlert: React.FC<{ hasError: boolean; errorMsgTitle: string; message?: string; validationCode: string }> = ({
   hasError,
   errorMsgTitle,
   message,
   validationCode
}) => {
   const { setIsSnackOpen, handleClose, isSnackOpen } = useSnackbar()
   return (
      <>
         <Fade in={hasError}>
            <span style={{ width: '100%', marginTop: '1rem' }}>
               <Alert variant='standard' color='error'>
                  <AlertTitle>{errorMsgTitle}</AlertTitle>
                  {message}
                  <ResendEmailButton onSnackbarOpen={setIsSnackOpen} confirmCode={validationCode} />
               </Alert>
            </span>
         </Fade>
         <Snackbar open={isSnackOpen.open} onClose={handleClose} message={isSnackOpen.message} />
      </>
   )
}

export default ErrorAlert
