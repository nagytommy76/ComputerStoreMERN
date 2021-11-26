import React, { ChangeEvent } from 'react'
import { findOrFailErrorMsg, errorMsg } from '../../../Helpers/SetErrorMsg'
import { ValidationError } from '../../AdminTypes'

import TextField from '@mui/material/TextField'

const TextOrNumberInput: React.FC<Props> = ({
   id,
   labelText,
   onChangeEvent,
   value,
   validationErrors = [],
   validationErrorLocation = '',
   required = true
}) => {
   return (
      <TextField
         id={id}
         required={required}
         error={findOrFailErrorMsg(validationErrors, validationErrorLocation)}
         helperText={errorMsg(validationErrors, validationErrorLocation)}
         variant='filled'
         margin='normal'
         label={labelText}
         value={value || 0 || ''}
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
