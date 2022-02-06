import React, { ChangeEvent, useEffect, useState } from 'react'
import { findOrFailAndReturnErrorMsg } from '../../../Helpers/SetErrorMsg'
import { ValidationError } from '../../AdminTypes'

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
   const [error, setError] = useState({ hasError: false, message: '' })
   useEffect(() => {
      if (validationErrors.length > 0) {
         const foundError = findOrFailAndReturnErrorMsg(validationErrors, validationErrorLocation)
         foundError && setError(foundError)
      }
   }, [validationErrors, validationErrorLocation])

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
