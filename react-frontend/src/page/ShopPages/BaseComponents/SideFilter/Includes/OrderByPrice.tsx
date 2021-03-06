import React from 'react'
import { InputContainer } from '../FilterStyle'
import { TextField } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setIsPriceRangeSet, setOrderBy } from '../../../../../app/slices/Filter/BaseFilterDataSlice'

const OrderByPrice: React.FC = () => {
   const dispatch = useAppDispatch()
   const orderBy = useAppSelector(state => state.filter.filterData.orderBy)

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setOrderBy(event.target.value))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <InputContainer>
         <TextField
            fullWidth
            select
            aria-multiselectable
            label='Rendezés'
            helperText='Ár szerinti rendezés'
            variant='filled'
            color='primary'
            onChange={handleChange}
            value={orderBy}
            SelectProps={{
               native: true,
            }}
         >
            <option value='asc'>Legolcsóbb elől</option>
            <option value='desc'>Legdrágább elől</option>
         </TextField>
      </InputContainer>
   )
}

export default OrderByPrice
