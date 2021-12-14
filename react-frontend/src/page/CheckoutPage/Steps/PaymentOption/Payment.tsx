import React, { useState } from 'react'
import { useAppDispatch } from '../../../../app/hooks'
import { setPaymentModalOpen } from '../../../../app/slices/Checkout/PaymentSlice'

import { StyledPaper, StyledFormControl } from '../Style'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const PaymentContainer = React.lazy(() => import('./PaymentContainer'))

const Payment = () => {
   const dispatch = useAppDispatch()
   const [options, setOptions] = useState('cashOnDelivery')
   // https://stripe.com/docs/stripe-js/react

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setOptions(event.target.value)
      if (event.target.value !== 'stripe') dispatch(setPaymentModalOpen(false))
   }
   const handleOpenModal = () => dispatch(setPaymentModalOpen(true))

   return (
      <>
         <StyledFormControl>
            <FormControl component='fieldset' sx={{ width: '85%' }}>
               <FormLabel component='legend' sx={{ marginBottom: '.4rem' }}>
                  Fizetési mód megadása
               </FormLabel>
               <RadioGroup
                  aria-label='paymentOptions'
                  defaultValue='teszt'
                  name='radio-buttons-group'
                  value={options}
                  onChange={handleChange}>
                  <StyledPaper>
                     <FormControlLabel value='cashOnDelivery' control={<Radio />} label='Fizetés utánvéttel (390 Ft)' />
                  </StyledPaper>
                  <StyledPaper>
                     <FormControlLabel
                        value='stripe'
                        onClick={handleOpenModal}
                        control={<Radio />}
                        label='Fizetés Stripe-pal (ingyenes)'
                     />
                  </StyledPaper>
               </RadioGroup>
            </FormControl>
         </StyledFormControl>
         <PaymentContainer />
      </>
   )
}

export default Payment
