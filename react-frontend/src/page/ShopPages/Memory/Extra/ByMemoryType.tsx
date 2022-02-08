import React from 'react'

import { InputContainer } from '../../BaseComponents/SideFilter/FilterStyle'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'
import { setMemoryType } from '../../../../app/slices/Filter/MemoryFilterSlice'

import TextField from '@mui/material/TextField'

const ByMemoryType = () => {
   const memoryType = useAppSelector(state => state.memoryFilter.memoryType)
   const dispatch = useAppDispatch()

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setMemoryType(event.target.value))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <InputContainer>
         <TextField
            fullWidth
            select
            aria-multiselectable
            label='Rendezés'
            helperText='Memória típusa'
            variant='filled'
            color='primary'
            onChange={handleChange}
            value={memoryType}
            SelectProps={{
               native: true,
            }}
         >
            <option value='all'>Összes</option>
            <option value='ddr'>DDR</option>
            <option value='ddr2'>DDR2</option>
            <option value='ddr3'>DDR3</option>
            <option value='ddr4'>DDR4</option>
         </TextField>
      </InputContainer>
   )
}

export default ByMemoryType
