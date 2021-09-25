import React, { useState, Suspense } from 'react'
import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import registerImage from './register.jpg'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'
import RegisterSuspense from '../../../SuspenseComponents/Auth/Register'

const RegisterForm = React.lazy(() => import('../BaseForm/Form'))
const InputElement = React.lazy(() => import('../BaseForm/BaseInput/BaseInput'))

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

   const registerUser = async (event: React.FormEvent) => {
      event.preventDefault()
      // Hibaüzenetek:
      if (userName.value === '') return setUserName({ value: '', hasError: true, errorMessage: 'Kérem a Felhasználónevet!' })
      if (email.value === '') return setEmail({ value: '', hasError: true, errorMessage: 'Kérem az e-mail címet' })
      if (firstPassword.value === '') return setFirstPassword({ value: '', hasError: true, errorMessage: 'Kérem a jelszó' })
      if (secondPassword.value === '')
         return setSecondPassword({ value: '', hasError: true, errorMessage: 'Kérem a második jelszót' })
      if (!userName.hasError && !email.hasError && !firstPassword.hasError && !secondPassword.hasError) {
         await axios
            .post('/auth/register', {
               email: email.value,
               userName: userName.value,
               firstPassword: firstPassword.value,
               secondPassword: secondPassword.value
            })
            .then((response: AxiosResponse) => {
               if (response.status === 201)
                  history.push('/login', { isSuccess: true, message: 'A regisztráció sikeres volt - beléphetsz!' })
            })
            .catch((error: AxiosError) => {
               const responseErrors = error.response?.data.errors
               if (responseErrors.length > 0) {
                  responseErrors.forEach((err: any) => {
                     if (err.param === 'firstPassword') {
                        setSecondPassword({ value: '', hasError: true, errorMessage: err.msg })
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
                  <InputElement
                     type='text'
                     placeHolder='Felhasználónév'
                     value={userName.value}
                     labelText='Felhasználónév'
                     onChangeEvent={(e) => setUserName({ ...userName, value: e.target.value })}>
                     {userName.hasError && userName.errorMessage}
                  </InputElement>
                  <InputElement
                     type='email'
                     placeHolder='Email-cím...'
                     value={email.value}
                     labelText='Email cím'
                     onChangeEvent={(e) => setEmail({ ...email, value: e.target.value })}>
                     {email.hasError && email.errorMessage}
                  </InputElement>
                  <InputElement
                     type='password'
                     placeHolder='Jelszó...'
                     value={firstPassword.value}
                     labelText='Jelszó'
                     onChangeEvent={(e) => setFirstPassword({ ...firstPassword, value: e.target.value })}>
                     {firstPassword.hasError && firstPassword.errorMessage}
                  </InputElement>
                  <InputElement
                     type='password'
                     placeHolder='Jelszó még egyszer...'
                     value={secondPassword.value}
                     labelText='Jelszó még egyszer'
                     onChangeEvent={(e) => setSecondPassword({ ...secondPassword, value: e.target.value })}>
                     {secondPassword.hasError && secondPassword.errorMessage}
                  </InputElement>
               </RegisterForm>
            </AuthFormStyle>
         </AuthContainer>
      </Suspense>
   )
}

export type InputTypes = { value: string; hasError?: boolean; errorMessage?: string }

export default Register
