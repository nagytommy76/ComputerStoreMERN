import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import Paper from '@mui/material/Paper'
import Modal from '@mui/material/Modal'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setPaymentModalOpen } from '../../../../app/slices/Checkout/PaymentSlice'

const PaymentForm = React.lazy(() => import('./PaymentForm'))

const stripePromise = loadStripe(
   'pk_test_51K3KwACsev4cEUJDwghDs3rZDrfIUnPHHkxVfbRHpBbL5tnCG4t0COTVdeMDikOcuzSW0hqftdlvf5c21Rhxa8sA00YZrP1tEu'
)

const PaymentContainer = () => {
   const dispatch = useAppDispatch()
   const isModalOpen = useAppSelector((state) => state.payment.isPaymentModalOpen)
   const isCardPaySuccess = useAppSelector((state) => state.payment.isCardPaySuccess)

   const handleCloseModal = () => {
      if (!isCardPaySuccess) dispatch(setPaymentModalOpen(false))
   }

   return (
      <Modal open={isModalOpen} onClose={handleCloseModal}>
         <Paper
            sx={{
               height: 350,
               width: 650,
               transform: 'translate(-50%, -50%)',
               position: 'absolute',
               top: '50%',
               left: '50%',
               padding: 2
            }}>
            <Elements stripe={stripePromise} options={{ locale: 'hu' }}>
               <PaymentForm />
            </Elements>
         </Paper>
      </Modal>
   )
}

export default PaymentContainer
