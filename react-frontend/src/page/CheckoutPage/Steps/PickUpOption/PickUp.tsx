import React, { useState } from 'react'
import { StyledFormControl, StyledPaper } from './PickStyle'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const PickUp = () => {
   const [options, setOptions] = useState<string>('inStore')

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setOptions((event.target as HTMLInputElement).value)
   }

   return (
      <StyledFormControl>
         <FormControl component='fieldset' sx={{ width: '85%' }}>
            <FormLabel component='legend' sx={{ marginBottom: '.4rem' }}>
               Szállítási lehetőségek
            </FormLabel>
            <RadioGroup
               aria-label='pickUpOptions'
               defaultValue='female'
               name='radio-buttons-group'
               value={options}
               onChange={handleChange}>
               <StyledPaper>
                  <FormControlLabel value='inStore' control={<Radio />} label='Átvétel személyesen, üzletünkben (ingyenes)' />
               </StyledPaper>
               <StyledPaper>
                  <FormControlLabel value='toHome' control={<Radio />} label='Házhozszállítás GLS futárral (990 Ft)' />
               </StyledPaper>
               <StyledPaper>
                  <FormControlLabel value='foxPost' control={<Radio />} label='FoxPost csomagautomata (880 Ft)' />
               </StyledPaper>
            </RadioGroup>
         </FormControl>
      </StyledFormControl>
   )
}

export default PickUp
