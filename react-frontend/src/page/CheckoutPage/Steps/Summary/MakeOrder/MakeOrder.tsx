import React from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { setPaymentModalOpen } from '../../../../../app/slices/Checkout/PaymentSlice'
// import { removeCartItemsAfterLogout as resetCartItems } from '../../../../../app/slices/CartSlice'

import Button from '@mui/material/Button'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

const MakeOrder: React.FC<{ setAlertOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setAlertOpen }) => {
   const dispatch = useAppDispatch()
   // const navigate = useNavigate()
   const selectedPaymentMethod = useAppSelector((state) => state.payment.selectedPaymentMethod)
   // const totalAmount = useAppSelector((state) => state.cart.totalPrice)
   // const selectedDeliveryTypePrice = useAppSelector((state) => state.deliveryPrice.deliveryPrice)

   const handleMakeOrderWithPayment = async () => {
      if (selectedPaymentMethod === 'stripeCard') {
         dispatch(setPaymentModalOpen(true))
      }
   }

   return (
      <Button variant='contained' size='large' endIcon={<DoubleArrowIcon />} onClick={handleMakeOrderWithPayment}>
         Rendelés Leadása
      </Button>
   )
}

export default MakeOrder
