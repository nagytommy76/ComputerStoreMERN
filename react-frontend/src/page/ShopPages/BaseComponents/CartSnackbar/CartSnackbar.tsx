import React from 'react'
import { createPortal } from 'react-dom'

import Snackbar from '@mui/material/Snackbar'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { handleSnackbarOpen } from '../../../../app/slices/CartSlice'

const CartSnackbar = () => {
   const isCartSnackbarOpen = useAppSelector((state) => state.cart.isSnackbarOpen)
   const dispatch = useAppDispatch()
   const handleClose = () => {
      dispatch(handleSnackbarOpen({ isOpen: false, text: '' }))
   }
   return createPortal(
      <Snackbar open={isCartSnackbarOpen.isOpen} autoHideDuration={6000} onClose={handleClose} message={isCartSnackbarOpen.text} />,
      document.getElementById('add-to-cart-snackbar') as HTMLElement
   )
}

export default CartSnackbar
