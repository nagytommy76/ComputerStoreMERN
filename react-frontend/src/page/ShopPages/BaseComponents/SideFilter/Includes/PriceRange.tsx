import React from 'react'
import { InputContainer, StyledLabel, StyledInput } from '../FilterStyle'
import NumberFormat from 'react-number-format'
import { Props } from './OrderByPrice'

const PriceRange: React.FC<Props> = ({ setFilterOptions, filterOptions }) => {
   return (
      <InputContainer>
         <StyledLabel htmlFor='priceRange'>
            Ár: (<NumberFormat value={filterOptions.selectedPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />
            - <NumberFormat value={filterOptions.maxPrice} thousandSeparator=' ' suffix=' Ft' displayType='text' />)
         </StyledLabel>
         <StyledInput
            type='range'
            min={filterOptions.minPrice}
            max={filterOptions.maxPrice}
            step='100'
            onMouseUp={(event: any) => setFilterOptions({ ...filterOptions, selectedPrice: parseInt(event.target.value) })}
         />
      </InputContainer>
   )
}

export default PriceRange
