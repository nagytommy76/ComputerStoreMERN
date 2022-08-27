import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { setPerPage } from '../../../../../app/slices/PaginateSlice'
import { setIsPriceRangeSet } from '../../../../../app/slices/Filter/BaseFilterDataSlice'
import { InputContainer } from '../FilterStyle'

import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const PerPage: React.FC = () => {
   const dispatch = useAppDispatch()
   const perPage = useAppSelector(state => state.paginate.perPage)

   const handleChange = (event: SelectChangeEvent<number>) => {
      dispatch(setPerPage(parseInt(event.target.value as string)))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <InputContainer>
         <FormControl variant='filled' fullWidth>
            <InputLabel id='select-label'>Termékek száma</InputLabel>
            <Select labelId='select-label' id='select' value={perPage} label='Age' onChange={handleChange}>
               <MenuItem value='15'>15</MenuItem>
               <MenuItem value='24'>24</MenuItem>
               <MenuItem value='36'>36</MenuItem>
            </Select>
            <FormHelperText>Oldalankénti termékek</FormHelperText>
         </FormControl>
      </InputContainer>
   )
}

export default PerPage
