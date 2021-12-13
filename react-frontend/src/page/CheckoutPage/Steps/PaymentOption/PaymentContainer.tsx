import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import Paper from '@mui/material/Paper'

const PaymentForm = React.lazy(() => import('./PaymentForm'))

const stripePromise = loadStripe(
   'pk_test_51K3KwACsev4cEUJDwghDs3rZDrfIUnPHHkxVfbRHpBbL5tnCG4t0COTVdeMDikOcuzSW0hqftdlvf5c21Rhxa8sA00YZrP1tEu'
)

const PaymentContainer = () => {
   return (
      <Paper
         sx={{
            height: 500,
            width: 500,
            transform: 'translate(-50%, -50%)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            padding: 2
         }}>
         <Elements stripe={stripePromise}>
            <PaymentForm />
         </Elements>
      </Paper>
   )
}

export default PaymentContainer
