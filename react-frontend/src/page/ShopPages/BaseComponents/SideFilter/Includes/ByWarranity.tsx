import React from 'react'
import { InputContainer } from '../FilterStyle'
import { TextField } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setSelectedWarranty, setIsPriceRangeSet } from '../../../../../app/slices/Filter/BaseFilterDataSlice'

const ByWarranity = () => {
   const dispatch = useAppDispatch()
   const { allWarranties, selectedWarranty } = useAppSelector(state => state.filter.filterData)

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSelectedWarranty(event.target.value))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <InputContainer>
         <TextField
            id='warranity'
            fullWidth
            select
            label='Garancia'
            onChange={handleChange}
            helperText='Szűrés garancia idő szerint'
            variant='filled'
            color='primary'
            value={selectedWarranty}
            SelectProps={{
               native: true,
            }}
         >
            <option value='all'>Összes</option>
            {allWarranties.map((warranty, index) => (
               <option key={index} value={warranty}>
                  {warranty}
               </option>
            ))}
         </TextField>
      </InputContainer>
   )
}

export default ByWarranity
