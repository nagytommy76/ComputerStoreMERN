import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { removeItemsFromCart } from '../../../../app/slices/CartSlice'

import Button from '@mui/material/Button'

const DeleteBtn: React.FC<{ itemId: string }> = ({ itemId }) => {
   const dispatch = useAppDispatch()
   const paymentWasSuccess = useAppSelector((state) => state.payment.isPaymentSuccess)

   const handleRemoveFromCart = () => dispatch(removeItemsFromCart(itemId))

   return (
      <Button disabled={paymentWasSuccess} onClick={handleRemoveFromCart} color='error' variant='outlined'>
         Törlés
      </Button>
   )
}

export default DeleteBtn
