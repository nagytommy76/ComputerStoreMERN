import React from 'react'
import { SnackbarStateTypes } from './Types'

import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const SnackBar: React.FC<{
   isSnackOpen: SnackbarStateTypes
   setIsSnackOpen: React.Dispatch<React.SetStateAction<SnackbarStateTypes>>
}> = ({ isSnackOpen, setIsSnackOpen }) => {
   const handleSnackClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
         return
      }
      setIsSnackOpen((prevValues) => {
         return { ...prevValues, isOpen: false }
      })
   }
   return (
      <Snackbar
         open={isSnackOpen.isOpen}
         onClose={handleSnackClose}
         message={`Sikeresen törölted a(z) ${isSnackOpen.deletedProductName} terméket`}
         action={
            <IconButton size='small' aria-label='close' color='inherit' onClick={handleSnackClose}>
               <CloseIcon fontSize='small' />
            </IconButton>
         }
      />
   )
}

export default SnackBar
