import React, { useState } from 'react'
import axios from 'axios'
import useError from '../../Hooks/Error'
import useCounter from '../../Hooks/Counter'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { setDefaultPaymentOptions, setPaymentModalOpen } from '../../../../../app/slices/Checkout/PaymentSlice'
import { removeCartItemsAfterLogout as resetCartItems } from '../../../../../app/slices/CartSlice'

import LoadingButton from '@mui/lab/LoadingButton'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'

const MakeOrder: React.FC = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const { hasError, setHasError } = useError()
   const { counter, setStartCounter } = useCounter()
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const { type, deliveryPrice } = useAppSelector((state) => state.deliveryPrice)
   const selectedPaymentMethod = useAppSelector((state) => state.payment.selectedPaymentMethod)
   const totalAmount = useAppSelector((state) => state.cart.totalPrice)

   const handleMakeOrderWithPayment = async () => {
      if (selectedPaymentMethod === 'stripeCard') {
         dispatch(setPaymentModalOpen(true))
      } else {
         setIsLoading(true)
         try {
            const response = await axios.post('/order/handle-order-cash', {
               amount: totalAmount,
               paymentMethod: selectedPaymentMethod,
               deliveryType: type,
               deliveryPrice
            })
            // a payment form-mal egyszerűsíteni!!!
            if (response.status === 200) {
               setStartCounter(true)
               setHasError({
                  errorMsg: 'A Termékek sikeresen megrendelésre kerültek! Hamarosan átirányítunk a főoldalra!',
                  isError: true,
                  serverity: 'success'
               })
               setTimeout(() => {
                  dispatch(setDefaultPaymentOptions())
                  dispatch(resetCartItems())
                  setHasError({
                     serverity: 'success',
                     errorMsg: '',
                     isError: false
                  })
                  setIsLoading(false)
                  navigate('/')
               }, 7000)
            }
            setIsLoading(false)
         } catch (error) {
            if (axios.isAxiosError(error)) {
               setHasError({
                  errorMsg: error.message,
                  isError: true,
                  serverity: 'error'
               })
            }
         }
      }
   }

   return (
      <>
         <LoadingButton
            loadingPosition='end'
            loading={isLoading}
            variant='contained'
            size='large'
            endIcon={<DoubleArrowIcon />}
            onClick={handleMakeOrderWithPayment}>
            Rendelés Leadása
         </LoadingButton>
         <Fade in={hasError.isError}>
            <Alert severity={hasError.serverity}>
               {hasError.errorMsg} {counter} mp-en belül!
            </Alert>
         </Fade>
      </>
   )
}

export default MakeOrder
