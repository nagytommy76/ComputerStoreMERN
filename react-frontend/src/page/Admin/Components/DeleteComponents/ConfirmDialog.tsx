import React from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const ConfirmDialog: React.FC<{
   productNameForSnackbar: string
   isDialogOpen: boolean
   handleCancelButtonClick: () => void
   handleConfirmButtonClick: () => Promise<void>
}> = ({ productNameForSnackbar, isDialogOpen, handleCancelButtonClick, handleConfirmButtonClick }) => {
   return (
      <Dialog open={isDialogOpen} onClose={handleCancelButtonClick}>
         <DialogTitle id='alert-dialog-title'>Biztosan törlöd?</DialogTitle>
         <DialogContent>
            <DialogContentText id='alert-dialog-description'>
               Biztosan törölni szeretnéd a(z) {productNameForSnackbar} elemet véglegesen az adatbázisból?
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button color='success' onClick={handleCancelButtonClick}>
               Mégsem
            </Button>
            <Button color='error' onClick={handleConfirmButtonClick}>
               Igen törlöm végleg
            </Button>
         </DialogActions>
      </Dialog>
   )
}

export default ConfirmDialog
