import React, { useContext } from 'react'
import { SideFilterContext } from '../Context'
import { InputContainer, StyledLabel, StyledSelect } from '../FilterStyle'

const ByManufacturer: React.FC = () => {
   const { setFilterOptions, filterOptions } = useContext(SideFilterContext)
   return (
      <InputContainer>
         <StyledLabel htmlFor='manufacturer'>Gyárók</StyledLabel>
         <StyledSelect
            name='manufacturer'
            id='manufacturer'
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
               setFilterOptions({ ...filterOptions, selectedManufacturer: event.target.value })
            }>
            <option value=''>Összes</option>
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
