import React from 'react'
import axios from 'axios'
import { useAppSelector } from '../../../../app/hooks'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { StripeCardElement } from '@stripe/stripe-js'

import { StyledCardForm, StyledCardContainer, styleObject } from './Styles'

import Button from '@mui/material/Button'

const PaymentForm = () => {
   const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme)
   const stripe = useStripe()
   const elements = useElements()

   const handleSubmit = async (event: React.FormEvent) => {
      if (!stripe || !elements) {
         return
      }
      const { paymentMethod, error } = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardElement) as StripeCardElement
      })
      console.log(error)
      if (!error && paymentMethod) {
         const response = await axios.post('/payment', {
            amount: 1000,
            id: paymentMethod.id
         })
         console.log(response.data)
      }
   }

   return (
      <StyledCardForm>
         <StyledCardContainer>
            <CardElement options={styleObject(isDarkTheme)} />
         </StyledCardContainer>
         <Button onClick={handleSubmit} variant='outlined'>
            Fizetés
         </Button>
      </StyledCardForm>
   )
}

export default PaymentForm
