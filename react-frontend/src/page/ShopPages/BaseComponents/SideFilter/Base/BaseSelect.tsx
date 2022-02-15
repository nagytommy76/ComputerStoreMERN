import React from 'react'
import { setIsPriceRangeSet } from '../../../../../app/slices/Filter/BaseFilterDataSlice'
import { useAppDispatch } from '../../../../../app/hooks'

import { InputContainer } from '../../../BaseComponents/SideFilter/FilterStyle'
import TextField from '@mui/material/TextField'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

const BySelect: React.FC<Props> = ({
   labelText,
   helperText,
   allOption,
   selectedOption,
   setSelectedDispatchValue,
   postFix,
   children,
}) => {
   const dispatch = useAppDispatch()
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSelectedDispatchValue(event.target.value))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <InputContainer>
         <TextField
            fullWidth
            select
            aria-multiselectable
            label={labelText}
            helperText={helperText}
            variant='filled'
            color='primary'
            onChange={handleChange}
            value={selectedOption}
            SelectProps={{
               native: true,
            }}
         >
            {children}
            {allOption.map((option, index) => (
               <option key={index} value={option}>
                  {option.toString().toUpperCase()}
                  {postFix}
               </option>
            ))}
         </TextField>
      </InputContainer>
   )
}

export default BySelect

type Props = {
   labelText: string
   helperText: string
   allOption: string[] | number[]
   selectedOption: string | number
   setSelectedDispatchValue: ActionCreatorWithPayload<string, string>
   postFix?: string
}
