import React from 'react'
import { useStripe, useElements, CardElement, PaymentElement } from '@stripe/react-stripe-js'
import { StyledCardForm } from './Styles'
import { StripeCardElement } from '@stripe/stripe-js'

const styleObject = {
   base: {
      iconColor: '#ccc12e',
      color: '#fff',
      fontWeight: '500',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
         color: '#fce883'
      },
      '::placeholder': {
         color: '#87BBFD'
      }
   },
   invalid: {
      iconColor: '#cf2619',
      color: '#cf2619'
   }
}

const PaymentForm = () => {
   const stripe = useStripe()
   const elements = useElements()
   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault()
      if (!stripe || !elements) {
         return
      }
      const result = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardElement) as StripeCardElement
      })
      console.log('helló')
   }
   return (
      <StyledCardForm onSubmit={handleSubmit}>
         <PaymentElement />
         <button>Submit</button>
      </StyledCardForm>
   )
}

export default PaymentForm
