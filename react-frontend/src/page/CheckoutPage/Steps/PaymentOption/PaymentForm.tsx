import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { StripeCardElement } from '@stripe/stripe-js'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setDefaultPaymentOptions } from '../../../../app/slices/Checkout/PaymentSlice'
import { removeCartItemsAfterLogout as resetCartItems } from '../../../../app/slices/CartSlice'
import { setIsNextBtnDisabled } from '../../../../app/slices/Checkout/StepsSlice'

import NumberFormat from 'react-number-format'
import { StyledCardForm, StyledCardContainer, styleObject, ButtonAndAlertSection } from './Styles'

import LoadingButton from '@mui/lab/LoadingButton'
import PaymentIcon from '@mui/icons-material/Payment'
import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'

const PaymentForm = () => {
   const dispatch = useAppDispatch()
   const stripe = useStripe()
   const elements = useElements()
   const navigate = useNavigate()

   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [paymentWasSuccess, setPaymentWasSuccess] = useState<boolean>(false)
   const [hasError, setHasError] = useState<{
      isError: boolean
      errorMsg: string | undefined
      serverity: 'error' | 'success' | 'info' | 'warning'
   }>({ isError: false, errorMsg: '', serverity: 'success' })

   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const totalAmount = useAppSelector((state) => state.cart.totalPrice)
   const selectedDeliveryTypePrice = useAppSelector((state) => state.deliveryPrice.deliveryPrice)
   const selectedPaymentMethod = useAppSelector((state) => state.payment.selectedPaymentMethod)

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
         const response = await axios.post('/order/handle-order', {
            // A Stripe csak 999.999.99 Ft-ig engedi a fizetést, ezért nem szorzom 100-zal.....
            amount: totalAmount + selectedDeliveryTypePrice,
            id: paymentMethod.id,
            paymentMethod: selectedPaymentMethod
         })
         if (response.status === 200) {
            setPaymentWasSuccess(true)
            dispatch(setIsNextBtnDisabled(false))
            setHasError({
               errorMsg: 'Sikeres fizetés!',
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
               setPaymentWasSuccess(false)
               setIsLoading(false)
               navigate('/')
            }, 7000)
         }
      } else {
         setHasError({
            errorMsg: error?.message,
            isError: true,
            serverity: 'error'
         })
         setPaymentWasSuccess(false)
      }
   }

   return (
      <StyledCardForm>
         <StyledCardContainer>
            {paymentWasSuccess ? (
               <Typography mt={2} variant='h6'>
                  A termékek már ki lettek fizetve:{' '}
                  <NumberFormat
                     displayType='text'
                     thousandSeparator=' '
                     value={totalAmount + selectedDeliveryTypePrice}
                     suffix=' HUF '
                  />
                  összegben!
               </Typography>
            ) : (
               <>
                  <CardElement options={styleObject(isDarkTheme)} />
                  <Typography mt={2} variant='h6'>
                     Fizetendő végösszeg (szállítással):{' '}
                     <NumberFormat
                        displayType='text'
                        thousandSeparator=' '
                        value={totalAmount + selectedDeliveryTypePrice}
                        suffix=' HUF'
                     />
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
               Fizetés és megrendelés
            </LoadingButton>
            <Fade in={hasError.isError}>
               <Alert severity={hasError.serverity}>{hasError.errorMsg}</Alert>
            </Fade>
         </ButtonAndAlertSection>
      </StyledCardForm>
   )
}

export default PaymentForm
