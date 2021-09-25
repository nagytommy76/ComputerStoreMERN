import React from 'react'
import { InputContainer, StyledLabel, StyledSelect } from '../FilterStyle'
import { Props } from './OrderByPrice'

// import { FormControl, Input, InputLabel, Select, SelectChangeEvent, MenuItem } from '@mui/material'

const ByManufacturer: React.FC<Props> = ({ setFilterOptions, filterOptions }) => {
   return (
      <InputContainer>
         {/* <FormControl fullWidth>
            <InputLabel>Gyárók</InputLabel>
            <Select
               MenuProps={{
                  // disableScrollLock: true,
                  marginThreshold: 0
               }}
               variant='outlined'
               color='warning'
               label='Gyárók'
               onChange={(event: SelectChangeEvent) =>
                  setFilterOptions({ ...filterOptions, selectedManufacturer: event.target.value })
               }>
               <MenuItem value=''>Összes</MenuItem>
               {filterOptions.allManufacturer.map((man, index) => (
                  <MenuItem key={index} value={man}>
                     {man}
                  </MenuItem>
               ))}
            </Select>
         </FormControl> */}
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
