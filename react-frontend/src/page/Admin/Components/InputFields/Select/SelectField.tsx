import React, { ReactNode } from 'react'
import useError from '../Hooks/useError'
import { ValidationError } from '../../../AdminTypes'

import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'

const SelectField: React.FC<{
   onChangeEvent: (value: React.SetStateAction<any>) => void
   value: any
   text: string
   id?: string
   validationErrors: ValidationError[]
   validationErrorLocation: string
   children: ReactNode
}> = ({ onChangeEvent, value, text, id, validationErrorLocation, validationErrors, children }) => {
   const error = useError(validationErrors, validationErrorLocation)
   return (
      <FormControl sx={{ marginTop: 2 }} error={error.hasError}>
         <InputLabel variant='filled'>{text}</InputLabel>
         <Select id={id} value={value} onChange={onChangeEvent} native variant='filled'>
            {children}
         </Select>
         {error.hasError && <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>
   )
}

export default SelectField
