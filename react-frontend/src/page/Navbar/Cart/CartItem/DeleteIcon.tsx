import React from 'react'
import { useAppDispatch } from '../../../../app/hooks'
import { removeItemsFromCart } from '../../../../app/slices/CartSlice'

import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const DeleteIcon: React.FC<{ id: string }> = ({ id }) => {
   const dispatch = useAppDispatch()

   const handleDeleteFromCart = () => dispatch(removeItemsFromCart(id))

   return (
      <IconButton
         onClick={handleDeleteFromCart}
         size='small'
         color='error'
         sx={{
            zIndex: 5,
            position: 'absolute',
            right: '2px',
            top: '2px'
         }}>
         <DeleteForeverIcon />
      </IconButton>
   )
}

export default DeleteIcon
