import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { setPerPage } from '../../../../../app/slices/PaginateSlice'
import { setIsPriceRangeSet } from '../../../../../app/slices/FilterDataSlice'
import { InputContainer } from '../FilterStyle'
import { TextField } from '@mui/material'

const PerPage: React.FC = () => {
   const dispatch = useAppDispatch()
   const perPage = useAppSelector((state) => state.paginate.perPage)

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setPerPage(parseInt(event.target.value)))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <InputContainer>
         <TextField
            fullWidth
            select
            label='Termékek száma'
            helperText='Oldalankénti termékek'
            variant='filled'
            color='primary'
            onChange={handleChange}
            value={perPage}
            SelectProps={{
               native: true
            }}>
            <option value='12'>12</option>
            <option value='24'>24</option>
            <option value='36'>36</option>
         </TextField>
      </InputContainer>
   )
}

export default PerPage
