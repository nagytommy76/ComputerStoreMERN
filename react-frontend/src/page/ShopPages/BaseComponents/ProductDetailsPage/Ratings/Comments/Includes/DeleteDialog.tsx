import React from 'react'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

const DeleteDialog: React.FC<{
   setDialogAnswer: React.Dispatch<React.SetStateAction<boolean>>
   setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
   openDialog: boolean
   toDeleteText?: string
}> = ({ setOpenDialog, setDialogAnswer, openDialog, toDeleteText = 'kommentet' }) => {
   const handleClose = () => {
      setOpenDialog(false)
   }

   const handleDialogAnswerFalse = () => {
      setDialogAnswer(false)
      setOpenDialog(false)
   }

   const handleDialogAnswerTrue = () => {
      setDialogAnswer(true)
      setOpenDialog(false)
   }
   return (
      <Dialog open={openDialog} onClose={handleClose}>
         <DialogTitle>Komment törlése</DialogTitle>
         <DialogContent>
            <DialogContentText>Biztos vagy benne, hogy törölni szeretnéd a {toDeleteText}?</DialogContentText>
         </DialogContent>
         <DialogActions>
            <Button variant='outlined' color='error' onClick={handleDialogAnswerFalse}>
               Nem
            </Button>
            <Button variant='outlined' color='success' onClick={handleDialogAnswerTrue}>
               Igen
            </Button>
         </DialogActions>
      </Dialog>
   )
}

export default DeleteDialog
