import React from 'react'
import { InputContainer } from '../FilterStyle'
import { TextField } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setOrderBy } from '../../../../../app/slices/FilterDataSlice'

const OrderByPrice: React.FC = () => {
   const dispatch = useAppDispatch()
   const orderBy = useAppSelector((state) => state.filter.filterData.orderBy)
   return (
      <InputContainer>
         <TextField
            fullWidth
            select
            label='Rendezés'
            helperText='Ár szerinti rendezés'
            variant='filled'
            color='primary'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setOrderBy(event.target.value))}
            value={orderBy}
            SelectProps={{
               native: true
            }}>
            <option value='asc'>Legolcsóbb elől</option>
            <option value='desc'>Legdrágább elől</option>
         </TextField>
      </InputContainer>
   )
}

export default OrderByPrice
