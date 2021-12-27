import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setSelectedPaymentMethod } from '../../../../app/slices/Checkout/PaymentSlice'

import { StyledPaper, StyledFormControl } from '../Style'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

// const PaymentContainer = React.lazy(() => import('./PaymentContainer'))

const Payment = () => {
   const dispatch = useAppDispatch()
   const { selectedPaymentMethod } = useAppSelector((state) => state.payment)
   // https://stripe.com/docs/stripe-js/react

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // if (!isPaymentSuccess) {
      dispatch(setSelectedPaymentMethod(event.target.value))
      // dispatch(handleNextButtonDisabled())
      // if (event.target.value !== 'stripeCard') dispatch(setPaymentModalOpen(false))
      // } else dispatch(setSelectedPaymentMethod('stripeCard'))
   }
   // const handleOpenModal = () => dispatch(setPaymentModalOpen(true))

   /*useEffect(() => {
      if (isPaymentSuccess) {
         dispatch(setSelectedPaymentMethod('stripeCard'))
      }
   }, [isPaymentSuccess, dispatch])*/

   return (
      <>
         <StyledFormControl>
            <FormControl component='fieldset' sx={{ width: '85%' }}>
               <FormLabel component='legend' sx={{ marginBottom: '.4rem' }}>
                  Fizetési mód megadása
               </FormLabel>
               <RadioGroup
                  aria-label='paymentOptions'
                  defaultValue='cashOnDelivery'
                  name='paymentRadioGroup'
                  value={selectedPaymentMethod}
                  onChange={handleChange}>
                  <StyledPaper>
                     <FormControlLabel value='cashOnDelivery' control={<Radio />} label='Fizetés utánvéttel (390 Ft)' />
                  </StyledPaper>
                  <StyledPaper>
                     <FormControlLabel value='stripeCard' control={<Radio />} label='Fizetés bankkártyával (ingyenes)' />
                  </StyledPaper>
               </RadioGroup>
            </FormControl>
         </StyledFormControl>
         {/* <PaymentContainer /> */}
      </>
   )
}

export default Payment
