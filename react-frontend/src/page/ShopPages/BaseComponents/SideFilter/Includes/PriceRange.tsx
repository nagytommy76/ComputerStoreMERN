import React, { useState } from 'react'
import { InputContainer } from '../FilterStyle'
import NumberFormat from 'react-number-format'
import { Slider, FormLabel, FormControl } from '@mui/material'

import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setPriceRange, setIsPriceRangeSet } from '../../../../../app/slices/FilterDataSlice'

const PriceRange: React.FC = () => {
   const dispatch = useAppDispatch()
   const { minPrice, maxPrice, priceRange } = useAppSelector((state) => state.filter.filterData)
   const [localState, setLocalState] = useState<number[]>([minPrice, 5000000])

   const setLocalStateOnChange = (event: Event, newValue: number | number[]) => {
      setLocalState((newValue as number[]) || [0, 5000000])
   }

   const testFunction = (event: any, newValue: number | number[]) => {
      dispatch(setPriceRange(newValue as number[]))
      dispatch(setIsPriceRangeSet(true))
   }

   return (
      <InputContainer>
         <FormControl fullWidth>
            <FormLabel color='primary'>
               Ár: (
               <NumberFormat value={priceRange[0] || 0} thousandSeparator=' ' suffix=' Ft' displayType='text' />
               - <NumberFormat value={priceRange[1] || 5000000} thousandSeparator=' ' suffix=' Ft' displayType='text' />)
            </FormLabel>
            <Slider
               getAriaLabel={() => 'Price range'}
               min={minPrice}
               max={maxPrice}
               value={localState as number[]}
               valueLabelDisplay='auto'
               onChangeCommitted={testFunction}
               onChange={setLocalStateOnChange}
            />
         </FormControl>
      </InputContainer>
   )
}

export default PriceRange
