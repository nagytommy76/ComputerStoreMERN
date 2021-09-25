import React, { useState } from 'react'
import { InputContainer } from '../FilterStyle'
import NumberFormat from 'react-number-format'
import { Props } from './OrderByPrice'
import { Slider, FormLabel, FormControl } from '@mui/material'

const PriceRange: React.FC<Props> = ({ setFilterOptions, filterOptions }) => {
   const [localState, setLocalState] = useState<number[]>([filterOptions.minPrice, 5000000])
   const setLocalStateOnChange = (event: Event, newValue: number | number[]) => {
      setLocalState(newValue as number[])
   }
   return (
      <InputContainer>
         <FormControl fullWidth color='primary'>
            <FormLabel>
               Ár: (
               <NumberFormat value={localState[0]} thousandSeparator=' ' suffix=' Ft' displayType='text' />
               - <NumberFormat value={filterOptions.maxPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />)
            </FormLabel>
            <Slider
               getAriaLabel={() => 'Price range'}
               min={filterOptions.minPrice}
               max={filterOptions.maxPrice}
               value={localState as number[]}
               valueLabelDisplay='auto'
               onChangeCommitted={(event, newValue: number | number[]) =>
                  setFilterOptions({ ...filterOptions, selectedPrice: newValue as number[] })
               }
               onChange={setLocalStateOnChange}
            />
         </FormControl>
      </InputContainer>
   )
}

export default PriceRange
