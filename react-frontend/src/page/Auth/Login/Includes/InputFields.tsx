import React from 'react'
import { InputTypes } from '../../DefaultProperties'

import TextField from '@mui/material/TextField'

const InputFields: React.FC<{
   emailOrUsername: InputTypes
   setEmailOrUsername: React.Dispatch<React.SetStateAction<InputTypes>>
   password: InputTypes
   setPassword: React.Dispatch<React.SetStateAction<InputTypes>>
}> = ({ emailOrUsername, setEmailOrUsername, password, setPassword }) => {
   return (
      <>
         <TextField
            autoFocus
            id='Email'
            error={emailOrUsername.hasError}
            helperText={emailOrUsername.errorMessage}
            variant='filled'
            fullWidth
            required
            label='Email cím/Felhasználónév'
            margin='normal'
            value={emailOrUsername.value}
            onChange={(e) => setEmailOrUsername({ ...emailOrUsername, value: e.target.value })}
         />
         <TextField
            id='Password'
            error={password.hasError}
            helperText={password.errorMessage}
            type='password'
            variant='filled'
            fullWidth
            required
            label='Jelszó'
            margin='normal'
            value={password.value}
            onChange={(e) => setPassword({ ...password, value: e.target.value })}
         />
      </>
   )
}

export default InputFields
