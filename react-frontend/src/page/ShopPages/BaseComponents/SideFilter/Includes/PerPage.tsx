import React from 'react'
import { useAppDispatch } from '../../../../../app/hooks'
import { setPerPage } from '../../../../../app/slices/PaginateSlice'
import { InputContainer, StyledLabel, StyledSelect } from '../FilterStyle'

const PerPage: React.FC = () => {
   const dispatch = useAppDispatch()
   return (
      <InputContainer>
         <StyledLabel htmlFor='manufacturer'>Termékek száma oldalanként</StyledLabel>
         <StyledSelect
            name='manufacturer'
            id='manufacturer'
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => dispatch(setPerPage(parseInt(event.target.value)))}>
            <option value='12'>12</option>
            <option value='24'>24</option>
            <option value='36'>36</option>
         </StyledSelect>
      </InputContainer>
   )
}

export default PerPage
