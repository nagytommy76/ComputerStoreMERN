import React, { useState } from 'react'
import useError from '../Hooks/Error'
import useCounter from '../Hooks/Counter'

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { StripeCardElement } from '@stripe/stripe-js'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { handleMakeOrderWithCardOrCash } from '../../../../app/slices/Checkout/PaymentSlice'

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

   const [isLoading, setIsLoading] = useState<boolean>(false)
   const { hasError, setHasError } = useError()
   const { counter, setStartCounter } = useCounter()

   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const totalAmount = useAppSelector((state) => state.cart.totalPrice)
   const selectedDeliveryTypePrice = useAppSelector((state) => state.deliveryPrice.deliveryPrice)
   const cardPaymentWasSuccess = useAppSelector((state) => state.payment.isCardPaySuccess)

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
         dispatch(handleMakeOrderWithCardOrCash(setIsLoading, setHasError, setStartCounter, paymentMethod.id, 'card'))
      } else {
         setHasError({
            errorMsg: error?.message,
            isError: true,
            serverity: 'error'
         })
      }
   }

   return (
      <StyledCardForm>
         <StyledCardContainer>
            {cardPaymentWasSuccess ? (
               <Typography mt={2} variant='h6'>
                  A termékek sikeresen ki lettek fizetve:{' '}
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
               disabled={cardPaymentWasSuccess}
               sx={{ width: '40%', alignSelf: 'center' }}
               endIcon={<PaymentIcon />}
               loadingPosition='end'
               loading={isLoading}
               onClick={handleSubmit}
               variant='contained'>
               Fizetés és megrendelés
            </LoadingButton>
            <Fade in={hasError.isError}>
               <Alert severity={hasError.serverity}>
                  {hasError.errorMsg} {counter} mp-en belül!
               </Alert>
            </Fade>
         </ButtonAndAlertSection>
      </StyledCardForm>
   )
}

export default PaymentForm
