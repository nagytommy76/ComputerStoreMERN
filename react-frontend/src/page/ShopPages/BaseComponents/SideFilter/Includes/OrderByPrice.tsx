import React /*, { useContext } */ from 'react'
// import { SideFilterContext } from '../Context'
import { InputContainer } from '../FilterStyle'
import { TextField } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setOrderBy } from '../../../../../app/slices/FilterDataSlice'

const OrderByPrice: React.FC = () => {
   // const { filterOptions, setFilterOptions } = useContext(SideFilterContext)
   const dispatch = useAppDispatch()
   const filterOptions = useAppSelector((state) => state.filter.filterData)
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
            value={filterOptions.orderBy}
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
