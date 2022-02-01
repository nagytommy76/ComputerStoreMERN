import React from 'react'

import Snackbar from '@mui/material/Snackbar'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { handleSnackbarOpen } from '../../../../app/slices/CartSlice'

const CartSnackbar = () => {
   const isCartSnackbarOpen = useAppSelector((state) => state.cart.isSnackbarOpen)
   const dispatch = useAppDispatch()
   const handleClose = () => {
      dispatch(handleSnackbarOpen({ isOpen: false, text: '' }))
   }
   return <Snackbar open={isCartSnackbarOpen.isOpen} autoHideDuration={6000} onClose={handleClose} message={isCartSnackbarOpen.text} />
}

export default CartSnackbar
