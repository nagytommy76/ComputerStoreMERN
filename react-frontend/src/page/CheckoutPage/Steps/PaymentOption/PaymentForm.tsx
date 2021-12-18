import React, { useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '../../../../app/hooks'

import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { StripeCardElement } from '@stripe/stripe-js'

import { StyledCardForm, StyledCardContainer, styleObject, ButtonAndAlertSection } from './Styles'

import LoadingButton from '@mui/lab/LoadingButton'
import PaymentIcon from '@mui/icons-material/Payment'
import Alert from '@mui/material/Alert'
import Fade from '@mui/material/Fade'

const PaymentForm = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [hasError, setHasError] = useState<{
      isError: boolean
      errorMsg: string | undefined
      serverity: 'error' | 'success' | 'info' | 'warning'
   }>({ isError: false, errorMsg: '', serverity: 'success' })
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const stripe = useStripe()
   const elements = useElements()

   const handleSubmit = async (event: React.FormEvent) => {
      if (!stripe || !elements) {
         return
      }
      setIsLoading(true)
      const { paymentMethod, error } = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardElement) as StripeCardElement
      })
      console.log(error)
      if (!error && paymentMethod) {
         const response = await axios.post('/payment', {
            amount: 25000,
            id: paymentMethod.id,
            product: { test: 'test123' }
         })
         setHasError({
            errorMsg: 'Sikeres fizetés!',
            isError: true,
            serverity: 'success'
         })
         console.log(response.data)
      } else {
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
            <CardElement options={styleObject(isDarkTheme)} />
            <h1>Fizetendő: 6656456 HUF</h1>
         </StyledCardContainer>
         <ButtonAndAlertSection>
            <LoadingButton
               sx={{ width: '40%', alignSelf: 'center' }}
               endIcon={<PaymentIcon />}
               loadingPosition='end'
               loading={isLoading}
               onClick={handleSubmit}
               variant='outlined'>
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
