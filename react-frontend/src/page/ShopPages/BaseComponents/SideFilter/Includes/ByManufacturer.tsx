import React from 'react'
import { InputContainer } from '../FilterStyle'
import { TextField } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setIsPriceRangeSet, setSelectedManufacturer } from '../../../../../app/slices/FilterDataSlice'

const ByManufacturer: React.FC = () => {
   const dispatch = useAppDispatch()
   const { allManufacturer, selectedManufacturer } = useAppSelector((state) => state.filter.filterData)

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSelectedManufacturer(event.target.value))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <InputContainer>
         <TextField
            fullWidth
            select
            label='Gyártó'
            onChange={handleChange}
            helperText='Szűrés gyártók szerint'
            variant='filled'
            color='primary'
            value={selectedManufacturer}
            SelectProps={{
               native: true
            }}>
            <option value='all'>Összes</option>
            {allManufacturer.map((man, index) => (
               <option key={index} value={man}>
                  {man}
               </option>
            ))}
         </TextField>
      </InputContainer>
   )
}

export default ByManufacturer
