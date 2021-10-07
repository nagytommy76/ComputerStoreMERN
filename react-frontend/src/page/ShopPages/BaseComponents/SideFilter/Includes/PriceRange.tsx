import React, { useState, useContext } from 'react'
import { InputContainer } from '../FilterStyle'
import NumberFormat from 'react-number-format'
import { Slider, FormLabel, FormControl } from '@mui/material'
import { SideFilterContext } from '../Context'

const PriceRange: React.FC = () => {
   const { filterOptions, setFilterOptions } = useContext(SideFilterContext)
   const [localState, setLocalState] = useState<number[]>([filterOptions.minPrice, 5000000])
   const setLocalStateOnChange = (event: Event, newValue: number | number[]) => {
      setLocalState(newValue as number[])
   }

   return (
      <InputContainer>
         <FormControl fullWidth>
            <FormLabel color='primary'>
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
