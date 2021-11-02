import React from 'react'

import TextField from '@mui/material/TextField'
import { InputTypes } from '../DefaultProperties'

const InputFields: React.FC<Props> = ({
   email,
   setEmail,
   userName,
   setUserName,
   firstPassword,
   setFirstPassword,
   secondPassword,
   setSecondPassword
}) => {
   return (
      <>
         <TextField
            id='userName'
            error={userName.hasError}
            helperText={userName.errorMessage}
            variant='filled'
            fullWidth
            required
            label='Felhasználónév'
            margin='normal'
            value={userName.value}
            onChange={(e) => setUserName({ ...userName, value: e.target.value })}
         />
         <TextField
            id='email'
            error={email.hasError}
            helperText={email.errorMessage}
            variant='filled'
            type='email'
            fullWidth
            required
            label='Email cím/Felhasználónév'
            margin='normal'
            value={email.value}
            onChange={(e) => setEmail({ ...email, value: e.target.value })}
         />
         <TextField
            id='firstPassword'
            error={firstPassword.hasError}
            helperText={firstPassword.errorMessage}
            type='password'
            variant='filled'
            fullWidth
            required
            label='Jelszó'
            margin='normal'
            value={firstPassword.value}
            onChange={(e) => setFirstPassword({ ...firstPassword, value: e.target.value })}
         />
         <TextField
            id='secondPassword'
            error={secondPassword.hasError}
            helperText={secondPassword.errorMessage}
            type='password'
            variant='filled'
            fullWidth
            required
            label='Jelszó még egyszer'
            margin='normal'
            value={secondPassword.value}
            onChange={(e) => setSecondPassword({ ...secondPassword, value: e.target.value })}
         />
      </>
   )
}

type Props = {
   userName: InputTypes
   setUserName: React.Dispatch<React.SetStateAction<InputTypes>>
   email: InputTypes
   setEmail: React.Dispatch<React.SetStateAction<InputTypes>>
   firstPassword: InputTypes
   setFirstPassword: React.Dispatch<React.SetStateAction<InputTypes>>
   secondPassword: InputTypes
   setSecondPassword: React.Dispatch<React.SetStateAction<InputTypes>>
}

export default InputFields
