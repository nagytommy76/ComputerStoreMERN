import React, { useState } from 'react'
import { InputContainer } from '../../BaseComponents/SideFilter/FilterStyle'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setSelectedFrequencyRange } from '../../../../app/slices/Filter/MemoryFilterSlice'
import { setIsPriceRangeSet } from '../../../../app/slices/Filter/BaseFilterDataSlice'

const FrequencyRange = () => {
   const dispatch = useAppDispatch()
   const [value, setValue] = useState<number[]>([400, 12000])
   const { frequencyRange, selectedFrequencyRange } = useAppSelector(state => state.memoryFilter)

   const handleChange = (_: any, newValue: number | number[]) => {
      setValue(newValue as number[])
   }

   const changeFrequencyRange = (_: any, newValue: number | number[]) => {
      console.log(newValue)
      dispatch(setSelectedFrequencyRange(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }

   return (
      <InputContainer>
         <FormControl fullWidth>
            <FormLabel color='primary'>
               Frekvencia: ( {selectedFrequencyRange[0]}MHz - {selectedFrequencyRange[1]}MHz)
            </FormLabel>
            <Slider
               getAriaLabel={() => 'Price range'}
               min={frequencyRange[0]}
               max={frequencyRange[1]}
               value={value as number[]}
               valueLabelDisplay='auto'
               onChangeCommitted={changeFrequencyRange}
               onChange={handleChange}
            />
         </FormControl>
      </InputContainer>
   )
}

export default FrequencyRange
