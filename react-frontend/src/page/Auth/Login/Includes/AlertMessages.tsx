import React from 'react'
import { InputTypes } from '../../DefaultProperties'

import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'

const ResendEmailButton = React.lazy(() => import('../../Validation/ResendEmailButton'))

const AlertMessages: React.FC<{
   validationError: { isSuccess: boolean; message: string }
   isInvalidatedEmail: boolean
   emailOrUsername: InputTypes
}> = ({ validationError, isInvalidatedEmail, emailOrUsername }) => {
   return (
      <>
         {validationError.isSuccess ? (
            <Fade in={validationError.isSuccess}>
               <Alert variant='outlined' color='success'>
                  {validationError.message}
               </Alert>
            </Fade>
         ) : (
            <Fade in={isInvalidatedEmail}>
               <Alert variant='outlined' color='warning'>
                  Nem kaptál még ilyen email? Kattints a gombra.
                  <ResendEmailButton confirmCode={null} userEmail={emailOrUsername.value} />
               </Alert>
            </Fade>
         )}
      </>
   )
}

export default AlertMessages
