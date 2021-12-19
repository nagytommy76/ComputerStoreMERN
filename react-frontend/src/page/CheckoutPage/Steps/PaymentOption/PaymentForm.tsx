import React, { useState } from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { StripeCardElement } from '@stripe/stripe-js'

import { StyledCardForm, StyledCardContainer, styleObject, ButtonAndAlertSection } from './Styles'

import LoadingButton from '@mui/lab/LoadingButton'
import PaymentIcon from '@mui/icons-material/Payment'
import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { setIsPaymentSuccess } from '../../../../app/slices/Checkout/PaymentSlice'

const PaymentForm = () => {
   const dispatch = useAppDispatch()
   const stripe = useStripe()
   const elements = useElements()

   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [hasError, setHasError] = useState<{
      isError: boolean
      errorMsg: string | undefined
      serverity: 'error' | 'success' | 'info' | 'warning'
   }>({ isError: false, errorMsg: '', serverity: 'success' })

   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const totalAmount = useAppSelector((state) => state.cart.totalPrice)
   const selectedDeliveryTypePrice = useAppSelector((state) => state.deliveryPrice.deliveryPrice)
   const paymentWasSuccess = useAppSelector((state) => state.payment.isPaymentSuccess)

   const handleSubmit = async () => {
      if (!stripe || !elements) {
         return
      }
      setIsLoading(true)
      const { paymentMethod, error } = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardElement) as StripeCardElement
      })
      if (!error && paymentMethod) {
         const response = await axios.post('/payment', {
            amount: (totalAmount + selectedDeliveryTypePrice) * 100,
            id: paymentMethod.id,
            product: { test: 'test123' }
         })
         if (response.status === 200) {
            dispatch(setIsPaymentSuccess(true))
            setHasError({
               errorMsg: 'Sikeres fizetés!',
               isError: true,
               serverity: 'success'
            })
            console.log(response.data)
         }
      } else {
         dispatch(setIsPaymentSuccess(false))
         setHasError({
            errorMsg: error?.message,
            isError: true,
            serverity: 'error'
         })
      }
      setIsLoading(false)
   }

   return (
      <StyledCardForm>
         <StyledCardContainer>
            {paymentWasSuccess ? (
               <Typography mt={2} variant='body1'>
                  A termékek már ki lettek fizetve: {totalAmount + selectedDeliveryTypePrice} HUF összegben!
               </Typography>
            ) : (
               <>
                  <CardElement options={styleObject(isDarkTheme)} />
                  <Typography mt={2} variant='body1'>
                     Fizetendő végösszeg (szállítással): {totalAmount + selectedDeliveryTypePrice} HUF
                  </Typography>
               </>
            )}
         </StyledCardContainer>
         <ButtonAndAlertSection>
            <LoadingButton
               disabled={paymentWasSuccess}
               sx={{ width: '40%', alignSelf: 'center' }}
               endIcon={<PaymentIcon />}
               loadingPosition='end'
               loading={isLoading}
               onClick={handleSubmit}
               variant='contained'>
               Fizetés
            </LoadingButton>
            <Fade in={hasError.isError}>
               <Alert severity={hasError.serverity}>{hasError.errorMsg}</Alert>
            </Fade>
         </ButtonAndAlertSection>
      </StyledCardForm>
   )
}

export default PaymentForm
