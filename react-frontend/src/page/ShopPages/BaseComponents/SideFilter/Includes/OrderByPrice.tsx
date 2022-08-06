import React from 'react'
import { InputContainer } from '../FilterStyle'
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setIsPriceRangeSet, setOrderBy } from '../../../../../app/slices/Filter/BaseFilterDataSlice'

import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const OrderByPrice: React.FC = () => {
   const dispatch = useAppDispatch()
   const orderBy = useAppSelector(state => state.filter.filterData.orderBy)

   const handleChange = (event: SelectChangeEvent) => {
      dispatch(setOrderBy(event.target.value as string))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <InputContainer>
         <FormControl variant='filled' fullWidth>
            <InputLabel id='select-label'>Rendezés</InputLabel>
            <Select
               labelId='select-label'
               id='select'
               value={orderBy as string}
               label='Age'
               onChange={handleChange}
            >
               <MenuItem value='asc'>Legolcsóbb elől</MenuItem>
               <MenuItem value='desc'>Legdrágább elől</MenuItem>
            </Select>
            <FormHelperText>Ár szerinti rendezés</FormHelperText>
         </FormControl>
      </InputContainer>
   )
}

export default OrderByPrice
