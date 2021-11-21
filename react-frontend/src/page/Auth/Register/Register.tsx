import React, { useState, Suspense } from 'react'
import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import registerImage from './register.jpg'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'
import RegisterSuspense from '../../../SuspenseComponents/Auth/Register'

import { defaultInputProperties, InputTypes } from '../DefaultProperties'

const RegisterForm = React.lazy(() => import('../BaseForm/Form'))
const InputFields = React.lazy(() => import('./InputFields'))

const Register = () => {
   const navigate = useNavigate()
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
      resetErrors()
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
                  navigate('/login', { state: { isSuccess: true, message: 'A regisztráció sikeres volt - beléphetsz!' } })
            })
            .catch((error: AxiosError) => {
               const responseErrors = error.response?.data
               resetErrors()
               if (typeof responseErrors.errors === 'object') {
                  responseErrors.errors.forEach((error: any) => {
                     if (error.param === 'firstPassword')
                        setSecondPassword({ ...secondPassword, hasError: true, errorMessage: error.msg })
                  })
               } else {
                  setEmail({ ...email, hasError: true, errorMessage: error.response?.data.errorMessage })
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
                  <InputFields
                     email={email}
                     setEmail={setEmail}
                     userName={userName}
                     setUserName={setUserName}
                     firstPassword={firstPassword}
                     setFirstPassword={setFirstPassword}
                     secondPassword={secondPassword}
                     setSecondPassword={setSecondPassword}
                  />
               </RegisterForm>
            </AuthFormStyle>
         </AuthContainer>
      </Suspense>
   )
}

export default Register
