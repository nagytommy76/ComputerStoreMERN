import React, { useContext } from 'react'
import { SideFilterContext } from '../Context'
import { InputContainer } from '../FilterStyle'
import { TextField } from '@mui/material'

const OrderByPrice: React.FC = () => {
   const { filterOptions, setFilterOptions } = useContext(SideFilterContext)
   return (
      <InputContainer>
         <TextField
            fullWidth
            select
            label='Rendezés'
            helperText='Ár szerinti rendezés'
            variant='filled'
            color='primary'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
               setFilterOptions({ ...filterOptions, orderBy: event.target.value })
            }
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
