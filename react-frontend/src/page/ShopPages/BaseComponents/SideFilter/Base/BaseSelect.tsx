import React, { ReactNode } from 'react'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { setIsPriceRangeSet } from '../../../../../app/slices/Filter/BaseFilterDataSlice'
import { useAppDispatch } from '../../../../../app/hooks'

import { InputContainer } from '../../../BaseComponents/SideFilter/FilterStyle'

import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'

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
   const handleChange = (event: SelectChangeEvent) => {
      dispatch(setSelectedDispatchValue(event.target.value as string))
      dispatch(setIsPriceRangeSet(true))
   }
   return (
      <InputContainer>
         <FormControl variant='filled' fullWidth>
            <InputLabel id='select-label'>{labelText}</InputLabel>
            <Select
               labelId='select-label'
               id='select'
               value={selectedOption as string}
               label='Age'
               onChange={handleChange}
            >
               {children ? children : <MenuItem value='all'>Összes</MenuItem>}

               {allOption.map((option, index) => (
                  <MenuItem key={index} value={option}>
                     {option.toString().toUpperCase()}
                     {postFix}
                  </MenuItem>
               ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
         </FormControl>
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
   children?: ReactNode
}
