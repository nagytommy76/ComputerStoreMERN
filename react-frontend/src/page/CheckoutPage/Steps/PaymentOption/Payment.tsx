import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setSelectedPaymentMethod } from '../../../../app/slices/Checkout/PaymentSlice'

import { StyledPaper, StyledFormControl } from '../Style'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Tooltip from '@mui/material/Tooltip'

const Payment = () => {
   const dispatch = useAppDispatch()
   const selectedPaymentMethod = useAppSelector(state => state.payment.selectedPaymentMethod)
   // https://stripe.com/docs/stripe-js/react

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSelectedPaymentMethod(event.target.value))
   }

   return (
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
               onChange={handleChange}
            >
               <StyledPaper>
                  <FormControlLabel
                     value='cashOnDelivery'
                     control={<Radio />}
                     label='Fizetés utánvéttel (390 Ft)'
                  />
               </StyledPaper>
               <Tooltip title='Átmenetileg nem elérhető a kártyás vásárlás!'>
                  <StyledPaper>
                     <FormControlLabel
                        value='stripeCard'
                        control={<Radio />}
                        label='Fizetés bankkártyával (ingyenes)'
                     />
                  </StyledPaper>
               </Tooltip>
            </RadioGroup>
         </FormControl>
      </StyledFormControl>
   )
}

export default Payment
