import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { removeItemsFromCart } from '../../../../app/slices/CartSlice'

import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const DeleteIcon: React.FC<{ id: string }> = ({ id }) => {
   const dispatch = useAppDispatch()
   const { isCardPaySuccess, isCashPaySuccess } = useAppSelector(state => state.payment)
   const handleDeleteFromCart = () => dispatch(removeItemsFromCart(id))

   return (
      <IconButton
         disabled={isCardPaySuccess || isCashPaySuccess}
         onClick={handleDeleteFromCart}
         size='small'
         color='error'
         sx={{
            zIndex: 5,
            position: 'absolute',
            right: '2px',
            top: '2px',
         }}
      >
         <DeleteForeverIcon />
      </IconButton>
   )
}

export default DeleteIcon
