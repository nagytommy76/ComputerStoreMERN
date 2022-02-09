import React from 'react'

import { InputContainer } from '../../BaseComponents/SideFilter/FilterStyle'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setSelectedCapacity } from '../../../../app/slices/Filter/MemoryFilterSlice'

import TextField from '@mui/material/TextField'

const BySelectedCapacity = () => {
   const capacity = useAppSelector(state => state.memoryFilter.selectedCapacity)
   const dispatch = useAppDispatch()

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSelectedCapacity(parseInt(event.target.value)))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <InputContainer>
         <TextField
            fullWidth
            select
            aria-multiselectable
            label='Szűrés'
            helperText='Kapacitás'
            variant='filled'
            color='primary'
            onChange={handleChange}
            value={capacity}
            SelectProps={{
               native: true,
            }}
         >
            <option value='0'>Összes</option>
            <option value='2'>2GB</option>
            <option value='4'>4GB</option>
            <option value='8'>8GB</option>
            <option value='16'>16GB</option>
            <option value='32'>32GB</option>
         </TextField>
      </InputContainer>
   )
}

export default BySelectedCapacity
