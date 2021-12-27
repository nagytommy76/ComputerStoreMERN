import React, { useEffect } from 'react'
import { StyledPaper, StyledFormControl } from '../Style'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setDeliveryType, setDeliveryPrice } from '../../../../app/slices/Checkout/DeliveryPriceSlice'

const PickUp = () => {
   const dispatch = useAppDispatch()
   const type = useAppSelector((state) => state.deliveryPrice.type)

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setDeliveryType(event.target.value as 'inStore' | 'toHomeGLS' | 'foxPost'))
   }

   useEffect(() => {
      switch (type) {
         case 'inStore':
            dispatch(setDeliveryPrice(0))
            break
         case 'toHomeGLS':
            dispatch(setDeliveryPrice(990))
            break
         case 'foxPost':
            dispatch(setDeliveryPrice(880))
            break
      }
   }, [type, dispatch])
   // https://cdn.foxpost.hu/apt-finder/v1/documentation/
   return (
      <StyledFormControl>
         <FormControl component='fieldset' sx={{ width: '85%' }}>
            <FormLabel component='legend' sx={{ marginBottom: '.4rem' }}>
               Szállítási lehetőségek
            </FormLabel>
            <RadioGroup
               aria-label='pickUpOptions'
               defaultValue='inStore'
               name='radio-buttons-group'
               value={type}
               onChange={handleChange}>
               <StyledPaper>
                  <FormControlLabel value='inStore' control={<Radio />} label='Átvétel személyesen, üzletünkben (ingyenes)' />
               </StyledPaper>
               <StyledPaper>
                  <FormControlLabel value='toHomeGLS' control={<Radio />} label='Házhozszállítás GLS futárral (990 Ft)' />
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
