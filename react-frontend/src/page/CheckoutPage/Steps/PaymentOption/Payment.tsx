import React from 'react'

import { StyledPaper, StyledFormControl } from '../Style'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const Payment = () => {
   const [options, setOptions] = React.useState('teszt')
   // https://stripe.com/docs/stripe-js/react

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setOptions(event.target.value)
   }

   return (
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
                  <FormControlLabel value='teszt' control={<Radio />} label='Fizetés utánvéttel (390 Ft)' />
               </StyledPaper>
               <StyledPaper>
                  <FormControlLabel value='stripe' control={<Radio />} label='Fizetés Stripe-pal (ingyenes)' />
               </StyledPaper>
            </RadioGroup>
         </FormControl>
      </StyledFormControl>
   )
}

export default Payment
