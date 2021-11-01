import React, { useState, Suspense } from 'react'
import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import registerImage from './register.jpg'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'
import RegisterSuspense from '../../../SuspenseComponents/Auth/Register'

import TextField from '@mui/material/TextField'

const RegisterForm = React.lazy(() => import('../BaseForm/Form'))

const Register = () => {
   const history = useHistory()
   const defaultInputProperties = {
      value: '',
      hasError: false,
      errorMessage: ''
   }
   const [email, setEmail] = useState<InputTypes>(defaultInputProperties)
   const [userName, setUserName] = useState<InputTypes>(defaultInputProperties)
   const [firstPassword, setFirstPassword] = useState<InputTypes>(defaultInputProperties)
   const [secondPassword, setSecondPassword] = useState<InputTypes>(defaultInputProperties)

   const resetErrors = () => {
      setEmail({ ...email, hasError: false, errorMessage: '' })
      setUserName({ ...userName, hasError: false, errorMessage: '' })
      setFirstPassword({ ...firstPassword, hasError: false, errorMessage: '' })
      setSecondPassword({ ...secondPassword, hasError: false, errorMessage: '' })
   }

   const registerUser = (event: React.FormEvent) => {
      event.preventDefault()
      // Hibaüzenetek:
      if (userName.value === '') return setUserName({ ...userName, hasError: true, errorMessage: 'Kérem a Felhasználónevet!' })
      if (email.value === '') return setEmail({ ...email, hasError: true, errorMessage: 'Kérem az e-mail címet' })
      if (firstPassword.value === '')
         return setFirstPassword({ ...firstPassword, hasError: true, errorMessage: 'Kérem a jelszó' })
      if (secondPassword.value === '')
         return setSecondPassword({ ...secondPassword, hasError: true, errorMessage: 'Kérem a második jelszót' })
      if (!userName.hasError && !email.hasError && !firstPassword.hasError && !secondPassword.hasError) {
         axios
            .post('/auth/register', {
               email: email.value,
               userName: userName.value,
               firstPassword: firstPassword.value,
               secondPassword: secondPassword.value
            })
            .then((response: AxiosResponse) => {
               if (response.status === 201)
                  // history.push('/login', { isSuccess: true, message: 'A regisztráció sikeres volt - beléphetsz!' })
                  history.push({
                     pathname: '/login',
                     state: { isSuccess: true, message: 'A regisztráció sikeres volt - beléphetsz!' }
                  })
            })
            .catch((error: AxiosError) => {
               const responseErrors = error.response?.data.errors
               resetErrors()
               if (responseErrors.length > 0) {
                  responseErrors.forEach((err: any) => {
                     if (err.param === 'firstPassword') {
                        setSecondPassword({ ...secondPassword, hasError: true, errorMessage: err.msg })
                     }
                     if (err.param === 'email') {
                        setEmail({ ...email, hasError: true, errorMessage: err.msg })
                     }
                  })
               }
            })
      }
   }
   return (
      <Suspense fallback={<RegisterSuspense />}>
         <AuthContainer>
            <ImageStyle image={registerImage} />
            <AuthFormStyle>
               <RegisterForm onSubmitEvent={registerUser} title='Regisztráció' buttonText='Regisztráció'>
                  <TextField
                     error={userName.hasError}
                     helperText={userName.errorMessage}
                     variant='filled'
                     fullWidth
                     required
                     label='Felhasználónév'
                     margin='normal'
                     onChange={(e) => setUserName({ ...userName, value: e.target.value })}
                  />
                  <TextField
                     error={email.hasError}
                     helperText={email.errorMessage}
                     variant='filled'
                     type='email'
                     fullWidth
                     required
                     label='Email cím/Felhasználónév'
                     margin='normal'
                     onChange={(e) => setEmail({ ...email, value: e.target.value })}
                  />
                  <TextField
                     error={firstPassword.hasError}
                     helperText={firstPassword.errorMessage}
                     type='password'
                     variant='filled'
                     fullWidth
                     required
                     label='Jelszó'
                     margin='normal'
                     onChange={(e) => setFirstPassword({ ...firstPassword, value: e.target.value })}
                  />
                  <TextField
                     error={secondPassword.hasError}
                     helperText={secondPassword.errorMessage}
                     type='password'
                     variant='filled'
                     fullWidth
                     required
                     label='Jelszó még egyszer'
                     margin='normal'
                     onChange={(e) => setSecondPassword({ ...secondPassword, value: e.target.value })}
                  />
               </RegisterForm>
            </AuthFormStyle>
         </AuthContainer>
      </Suspense>
   )
}

export type InputTypes = { value: string; hasError?: boolean; errorMessage?: string }

export default Register
