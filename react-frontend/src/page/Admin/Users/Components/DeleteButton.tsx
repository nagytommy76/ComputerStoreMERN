import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const ConfirmDialog = React.lazy(() => import('../../Components/DeleteComponents/ConfirmDialog'))

const DeleteButton = () => {
   const [isDialogOpen, setIsDialogOpen] = useState(false)

   const handleDialogClickOpen = () => setIsDialogOpen(true)

   const handleCancelButtonClick = () => setIsDialogOpen(false)

   const handleConfirmButtonClick = async () => {}

   return (
      <>
         <IconButton color='error' onClick={handleDialogClickOpen}>
            <DeleteForeverIcon />
         </IconButton>
         {createPortal(
            <ConfirmDialog
               isDialogOpen={isDialogOpen}
               handleCancelButtonClick={handleCancelButtonClick}
               handleConfirmButtonClick={handleConfirmButtonClick}
               productNameForSnackbar='nagytommy76'
            />,
            document.getElementById('delete-dialog') as HTMLElement
         )}
      </>
   )
}

export default DeleteButton
