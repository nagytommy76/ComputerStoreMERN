import React, { useContext } from 'react'
import { MessageContext, MessageTypes } from '../../Context/MessageContext'

import Snackbar from '@mui/material/Snackbar'

const MessageSnackbar = () => {
   const { state, dispatch } = useContext(MessageContext)

   const handleClose = () => {}
   return <Snackbar open={state.isActive} onClose={handleClose} message={state.message} />
}

export default MessageSnackbar
