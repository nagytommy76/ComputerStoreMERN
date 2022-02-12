import React from 'react'

import { InputContainer } from '../../../BaseComponents/SideFilter/FilterStyle'
import TextField from '@mui/material/TextField'

const BySelect: React.FC<Props> = ({
   labelText,
   helperText,
   allOption,
   selectedOption,
   handleChange,
   postFix,
   children,
}) => {
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
   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
   postFix?: string
}
