import React from 'react'
import { createPortal } from 'react-dom'
import { SnackbarStateTypes } from './Types'

import useDeleteButtonHook from '../../Hooks/DeleteButtonHook'

import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const ConfirmDialog = React.lazy(() => import('./ConfirmDialog'))

const DeleteButton: React.FC<{
   toDeleteID: string
   productTypeForURL: string
   setAllToDelete: React.Dispatch<React.SetStateAction<any[]>>
   allToDelete: any[]
   nameForSnackbar: string
   setIsSnackOpen: React.Dispatch<React.SetStateAction<SnackbarStateTypes>>
}> = ({ toDeleteID, productTypeForURL, setAllToDelete, allToDelete, setIsSnackOpen, nameForSnackbar }) => {
   const { handleCancelButtonClick, handleConfirmButtonClick, handleDialogClickOpen, isDialogOpen } =
      useDeleteButtonHook(
         productTypeForURL,
         toDeleteID,
         allToDelete,
         setAllToDelete,
         setIsSnackOpen,
         nameForSnackbar
      )

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
               productNameForSnackbar={nameForSnackbar}
            />,
            document.getElementById('delete-dialog') as HTMLElement
         )}
      </>
   )
}

export default DeleteButton
