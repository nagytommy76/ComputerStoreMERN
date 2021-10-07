import React, { useContext } from 'react'
import { SideFilterContext } from '../Context'
import { InputContainer, StyledLabel, StyledSelect } from '../FilterStyle'

const OrderByPrice: React.FC = () => {
   const { filterOptions, setFilterOptions } = useContext(SideFilterContext)
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

export default OrderByPrice
