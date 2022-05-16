import React, { useEffect, useState } from 'react'
import { InputContainer } from '../FilterStyle'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'
import { useAppDispatch } from '../../../../../app/hooks'
import { setIsPriceRangeSet } from '../../../../../app/slices/Filter/BaseFilterDataSlice'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

const BaseSlider: React.FC<Props> = ({
   range,
   selectedRange,
   setSelectedDispatchValue,
   text,
   unit = 'MHz',
}) => {
   const dispatch = useAppDispatch()
   const [value, setValue] = useState<number[]>([0, 8000])

   const handleChange = (_: any, newValue: number | number[]) => {
      setValue(newValue as number[])
   }

   const handleRangeOnComitted = (_: any, newValue: number | number[]) => {
      dispatch(setSelectedDispatchValue(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }

   useEffect(() => {
      setValue(selectedRange)
   }, [selectedRange])

   return (
      <InputContainer>
         <FormControl fullWidth>
            <FormLabel color='primary'>
               <div>{text}</div>
               <span>
                  {selectedRange[0]}
                  {unit} - {selectedRange[1]}
                  {unit}
               </span>
            </FormLabel>
            <Slider
               getAriaLabel={() => `${text}-Range`}
               min={range[0]}
               max={range[1]}
               value={value as number[]}
               valueLabelDisplay='auto'
               onChangeCommitted={handleRangeOnComitted}
               onChange={handleChange}
            />
         </FormControl>
      </InputContainer>
   )
}

export default BaseSlider

type Props = {
   range: number[]
   selectedRange: number[]
   text: string
   unit?: string
   setSelectedDispatchValue: ActionCreatorWithPayload<number[], string>
}
