import React, { ChangeEvent } from 'react'
import { ValidationError } from '../../AdminTypes'
import useError from './Hooks/useError'

import TextField from '@mui/material/TextField'

const TextOrNumberInput: React.FC<Props> = ({
   id,
   labelText,
   onChangeEvent,
   value,
   validationErrors = [],
   validationErrorLocation = '',
   required = true,
}) => {
   const error = useError(validationErrors, validationErrorLocation)

   return (
      <TextField
         sx={{ width: '100%' }}
         id={id}
         required={required}
         error={error.hasError}
         helperText={error.message}
         variant='filled'
         margin='normal'
         label={labelText}
         value={value}
         onChange={onChangeEvent}
      />
   )
}

type Props = {
   id: string
   labelText: string
   onChangeEvent: (event: ChangeEvent<HTMLInputElement>) => void
   value: string | number | undefined
   required?: boolean
   validationErrors?: ValidationError[]
   validationErrorLocation?: string
}

export default TextOrNumberInput
