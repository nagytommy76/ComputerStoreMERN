import React from 'react'
import { InputContainer, StyledLabel, StyledSelect } from '../FilterStyle'
import { Props } from './OrderByPrice'

const ByManufacturer: React.FC<Props> = ({ setFilterOptions, filterOptions }) => {
   return (
      <InputContainer>
         <StyledLabel htmlFor='manufacturer'>Gyárók</StyledLabel>
         <StyledSelect
            name='manufacturer'
            id='manufacturer'
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
               setFilterOptions({ ...filterOptions, selectedManufacturer: event.target.value })
            }>
            <option value=''>Nincs kiválasztva</option>
            {filterOptions.allManufacturer.map((man, index) => (
               <option key={index} value={man}>
                  {man}
               </option>
            ))}
         </StyledSelect>
      </InputContainer>
   )
}

export default ByManufacturer
