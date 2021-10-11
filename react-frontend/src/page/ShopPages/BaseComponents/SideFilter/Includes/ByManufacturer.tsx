import React /*, { useContext }*/ from 'react'
// import { SideFilterContext } from '../Context'
import { InputContainer } from '../FilterStyle'
import { TextField } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setSelectedManufacturer } from '../../../../../app/slices/FilterDataSlice'

const ByManufacturer: React.FC = () => {
   // const { setFilterOptions, filterOptions } = useContext(SideFilterContext)
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector((state) => state.filter.filterData)
   return (
      <InputContainer>
         <TextField
            fullWidth
            select
            label='Gyártó'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setSelectedManufacturer(event.target.value))}
            helperText='Szűrés gyártók szerint'
            variant='filled'
            color='primary'
            value={filterOptions.selectedManufacturer}
            SelectProps={{
               native: true
            }}>
            <option value='all'>Összes</option>
            {filterOptions.allManufacturer.map((man, index) => (
               <option key={index} value={man}>
                  {man}
               </option>
            ))}
         </TextField>
      </InputContainer>
   )
}

export default ByManufacturer
