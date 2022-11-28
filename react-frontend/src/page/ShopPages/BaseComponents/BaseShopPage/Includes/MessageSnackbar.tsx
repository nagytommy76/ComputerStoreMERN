import React, { useContext } from 'react'
import { createPortal } from 'react-dom'
import { MessageContext, MessageTypes } from '../../Context/MessageContext'

import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const MessageSnackbar = () => {
   const { state, dispatch } = useContext(MessageContext)
   const handleClose = () => {
      dispatch({ type: MessageTypes.INIT, payload: { isActive: false, message: '', severity: 'success' } })
   }

   return createPortal(
      <Snackbar
         anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
         open={state.isActive}
         onClose={handleClose}
      >
         <Alert variant='filled' onClose={handleClose} severity={state.severity} sx={{ width: '100%' }}>
            {state.message}
         </Alert>
      </Snackbar>,
      document.getElementById('snackbar') as HTMLElement
   )
}

export default MessageSnackbar
