import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { removeItemsFromCart } from '../../../../app/slices/CartSlice'

import Button from '@mui/material/Button'

const DeleteBtn: React.FC<{ itemId: string }> = ({ itemId }) => {
   const dispatch = useAppDispatch()
   const { isCardPaySuccess, isCashPaySuccess } = useAppSelector(state => state.payment)
   const handleRemoveFromCart = () => dispatch(removeItemsFromCart(itemId))

   return (
      <Button
         disabled={isCardPaySuccess || isCashPaySuccess}
         onClick={handleRemoveFromCart}
         color='error'
         variant='outlined'
      >
         Törlés
      </Button>
   )
}

export default DeleteBtn
