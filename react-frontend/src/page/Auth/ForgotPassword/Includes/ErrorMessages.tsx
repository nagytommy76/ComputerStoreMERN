import React from 'react'
import { ErrorType } from '../../Hooks/useErrorsState'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Fade from '@mui/material/Fade'
import Snackbar from '@mui/material/Snackbar'

const ResendEmailButton = React.lazy(() => import('../../Validation/ResendEmailButton'))

const ErrorMessages: React.FC<{
   userEmail: string
   errors: ErrorType
   isSnackOpen: {
      open: boolean
      message: string
   }
   handleClose: () => void
   setIsSnackOpen: React.Dispatch<
      React.SetStateAction<{
         open: boolean
         message: string
      }>
   >
}> = ({ errors, userEmail, setIsSnackOpen, isSnackOpen, handleClose }) => {
   return (
      <>
         <Fade unmountOnExit mountOnEnter in={errors.hasError}>
            <span style={{ width: '100%', marginTop: '1rem' }}>
               <Alert variant='standard' color='error'>
                  <AlertTitle>{errors.messageTitle}</AlertTitle>
                  {errors.errorType === 'jwt expired' && (
                     <>
                        <p>Küldjünk egy új emailt?</p>
                        <ResendEmailButton
                           path='forgot-password'
                           confirmCode={null}
                           userEmail={userEmail}
                           onSnackbarOpen={setIsSnackOpen}
                        />
                     </>
                  )}
               </Alert>
            </span>
         </Fade>
         <Snackbar open={isSnackOpen.open} onClose={handleClose} message={isSnackOpen.message} />
      </>
   )
}

export default ErrorMessages
