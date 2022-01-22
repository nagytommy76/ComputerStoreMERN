import React from 'react'
import { InputTypes } from '../../DefaultProperties'

import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import Snackbar from '@mui/material/Snackbar'
import useSnackbar from '../../Hooks/useSnackbar'

const ResendEmailButton = React.lazy(() => import('../../Validation/ResendEmailButton'))

const AlertMessages: React.FC<{
   validationError: { isSuccess: boolean; message: string }
   isInvalidatedEmail: boolean
   emailOrUsername: InputTypes
}> = ({ validationError, isInvalidatedEmail, emailOrUsername }) => {
   const { handleClose, isSnackOpen, setIsSnackOpen } = useSnackbar()

   return (
      <>
         <Collapse unmountOnExit mountOnEnter in={validationError.isSuccess}>
            <Alert variant='outlined' color='success'>
               {validationError.message}
            </Alert>
         </Collapse>
         <Collapse unmountOnExit mountOnEnter in={isInvalidatedEmail}>
            <Alert variant='outlined' color='warning'>
               Nem kaptál még ilyen email? Kattints a gombra.
               <ResendEmailButton confirmCode={null} userEmail={emailOrUsername.value} onSnackbarOpen={setIsSnackOpen} />
            </Alert>
         </Collapse>
         <Snackbar open={isSnackOpen.open} onClose={handleClose} message={isSnackOpen.message} />
      </>
   )
}

export default AlertMessages
