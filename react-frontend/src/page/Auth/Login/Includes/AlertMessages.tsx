import React, { useState } from 'react'
import { InputTypes } from '../../DefaultProperties'

import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'
import Collapse from '@mui/material/Collapse'
import Snackbar from '@mui/material/Snackbar'

const ResendEmailButton = React.lazy(() => import('../../Validation/ResendEmailButton'))

const AlertMessages: React.FC<{
   validationError: { isSuccess: boolean; message: string }
   isInvalidatedEmail: boolean
   emailOrUsername: InputTypes
}> = ({ validationError, isInvalidatedEmail, emailOrUsername }) => {
   const [isEmailSent, setIsEmailSent] = useState<{ open: boolean; message: string }>({ open: false, message: '' })

   const handleClose = (event: React.SyntheticEvent | Event) => {
      setIsEmailSent({ open: false, message: '' })
   }
   return (
      <>
         {/* {validationError.isSuccess ? ( */}
         <Collapse unmountOnExit mountOnEnter in={validationError.isSuccess}>
            <Alert variant='outlined' color='success'>
               {validationError.message}
            </Alert>
         </Collapse>
         {/* ) : ( */}
         <Collapse unmountOnExit mountOnEnter in={isInvalidatedEmail}>
            <Alert variant='outlined' color='warning'>
               Nem kaptál még ilyen email? Kattints a gombra.
               <ResendEmailButton confirmCode={null} userEmail={emailOrUsername.value} onSnackbarOpen={setIsEmailSent} />
            </Alert>
         </Collapse>
         {/* )} */}
         <Snackbar open={isEmailSent.open} onClose={handleClose} message={isEmailSent.message} />
      </>
   )
}

export default AlertMessages
