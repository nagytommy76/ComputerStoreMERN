import React, { useState } from 'react'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

const DeleteButton: React.FC<{ productID: string }> = ({ productID }) => {
   const [isDeleting, setIsDeleteing] = useState<boolean>(false)
   const handleDeleteProduct = () => {
      setIsDeleteing(true)
      console.log('törlés: ' + productID)
      setTimeout(() => {
         setIsDeleteing(false)
      }, 1000)
   }
   return (
      <IconButton disabled={isDeleting} color='error' onClick={handleDeleteProduct}>
         <DeleteIcon />
      </IconButton>
   )
}

export default DeleteButton
