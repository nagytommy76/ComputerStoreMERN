import React from 'react'

import TextField from '@mui/material/TextField'
import { ErrorType } from '../../Hooks/useErrorsState'

const InputFields: React.FC<{
   error: ErrorType
   firstPassword: string
   setFirstPassword: React.Dispatch<React.SetStateAction<string>>
   secondPassword: string
   setSecondPassword: React.Dispatch<React.SetStateAction<string>>
}> = ({ firstPassword, secondPassword, setFirstPassword, setSecondPassword, error }) => {
   const changeFirstPass = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setFirstPassword(event.target.value)
   }
   const changeSecondPass = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setSecondPassword(event.target.value)
   }

   return (
      <>
         <TextField
            autoFocus
            id='firstPassword'
            type='password'
            error={error.hasError}
            helperText={error.messageTitle}
            variant='filled'
            fullWidth
            required
            label='Jelszó előszőr'
            margin='normal'
            value={firstPassword}
            onChange={changeFirstPass}
         />
         <TextField
            autoFocus
            id='secondPassword'
            type='password'
            error={error.hasError}
            helperText={error.messageTitle}
            variant='filled'
            fullWidth
            required
            label='Jelszó másodszor'
            margin='normal'
            value={secondPassword}
            onChange={changeSecondPass}
         />
      </>
   )
}

export default InputFields
