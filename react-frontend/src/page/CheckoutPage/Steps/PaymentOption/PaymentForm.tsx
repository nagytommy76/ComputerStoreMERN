import React from 'react'
import { useStripe, useElements, CardElement, PaymentElement } from '@stripe/react-stripe-js'
import { StripeCardElement } from '@stripe/stripe-js'

const PaymentForm = () => {
   const stripe = useStripe()
   const elements = useElements()
   const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault()
      if (!stripe || !elements) {
         return
      }
      // const result = await stripe.createPaymentMethod({
      //    type: 'card',
      //    card: elements.getElement(CardElement) as StripeCardElement
      // })
      console.log('helló')
   }
   return (
      <form onSubmit={handleSubmit}>
         <CardElement />
         <button>Submit</button>
      </form>
   )
}

export default PaymentForm
