import React from 'react'
import { ValidationError } from '../../../AdminTypes'
import useError from '../Hooks/useError'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const MUISelectFeild: React.FC<Props> = ({
   required = true,
   id,
   labelText,
   onChangeEvent,
   value,
   selectableItems,
   validationErrorLocation = '',
   validationErrors = [],
}) => {
   const error = useError(validationErrors, validationErrorLocation)
   return (
      <FormControl variant='filled' margin='normal' fullWidth error={error.hasError}>
         <InputLabel id='demo-simple-select-label'>{labelText}</InputLabel>
         <Select
            required={required}
            labelId='demo-simple-select-label'
            id={id}
            value={value}
            label='Age'
            onChange={onChangeEvent}
         >
            {selectableItems.map((item, index) => (
               <MenuItem key={index} value={item}>
                  {item}
               </MenuItem>
            ))}
         </Select>
         <FormHelperText>{error.message}</FormHelperText>
      </FormControl>
   )
}

export default MUISelectFeild

interface Props {
   value: string | undefined
   validationErrors?: ValidationError[]
   validationErrorLocation?: string
   selectableItems: any[]
   required?: boolean
   id: string
   labelText: string
   onChangeEvent: (event: SelectChangeEvent) => void
}
