import React from 'react'
import { FilterTypes } from '../../../Vga/Vga'
import { InputContainer, StyledLabel, StyledSelect } from '../FilterStyle'

const OrderByPrice: React.FC<Props> = ({ setFilterOptions, filterOptions }) => {
   return (
      <InputContainer>
         <StyledLabel htmlFor='orderBy'>Rendezés</StyledLabel>
         <StyledSelect
            name='orderBy'
            id='orderBy'
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
               setFilterOptions({ ...filterOptions, orderBy: event.target.value })
            }>
            <option value='asc'>Legolcsóbb elöl</option>
            <option value='desc'>Legdrágább elöl</option>
         </StyledSelect>
      </InputContainer>
   )
}

export type Props = {
   filterOptions: FilterTypes
   setFilterOptions: React.Dispatch<React.SetStateAction<FilterTypes>>
}

export default OrderByPrice
