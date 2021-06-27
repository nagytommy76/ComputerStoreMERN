import React, { useState } from 'react'
import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import registerImage from './register.jpg'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'

const RegisterForm = React.lazy(() => import('../BaseForm/Form'))
const InputElement = React.lazy(() => import('../BaseForm/BaseInput/BaseInput'))

const Register = () => {
   const history = useHistory()
   const [email, setEmail] = useState<InputTypes>({ value: '', hasError: false, errorMessage: '' })
   const [userName, setUserName] = useState<InputTypes>({ value: '', hasError: false, errorMessage: '' })
   const [firstPassword, setFirstPassword] = useState<InputTypes>({ value: '', hasError: false, errorMessage: '' })
   const [secondPassword, setSecondPassword] = useState<InputTypes>({ value: '', hasError: false, errorMessage: '' })

   const registerUser = async (event: React.FormEvent) => {
      event.preventDefault()
      // Hibaüzenetek:
      if (userName.value === '') return setUserName({ value: '', hasError: true, errorMessage: 'Kérem a Felhasználónevet!' })
      if (email.value === '') return setEmail({ value: '', hasError: true, errorMessage: 'Kérem az e-mail címet' })
      if (firstPassword.value === '') return setFirstPassword({ value: '', hasError: true, errorMessage: 'Kérem a jelszó' })
      if (secondPassword.value === '')
         return setSecondPassword({ value: '', hasError: true, errorMessage: 'Kérem a második jelszót' })
      if (secondPassword.value !== firstPassword.value)
         return setSecondPassword({ value: '', hasError: true, errorMessage: 'Nem egyezik a 2 jelszó' })
      if (!userName.hasError && !email.hasError && !firstPassword.hasError && !secondPassword.hasError) {
         await axios
            .post('/api/user/register', {
               email: email.value,
               userName: userName.value,
               password: firstPassword.value
            })
            .then((response: AxiosResponse) => {
               if (response.status == 201) history.push('/login')
            })
            .catch((error: AxiosError) => console.log(error.response))
      }
   }
   return (
      <AuthContainer>
         <ImageStyle image={registerImage} />
         <AuthFormStyle>
            <RegisterForm onSubmitEvent={registerUser} title='Regisztráció' buttonText='Regisztráció'>
               <InputElement
                  type='text'
                  placeHolder='Felhasználónév'
                  value={userName.value}
                  labelText='Felhasználónév'
                  onChangeEvent={(e) => setUserName({ value: e.target.value })}>
                  {userName.hasError && userName.errorMessage}
               </InputElement>
               <InputElement
                  type='email'
                  placeHolder='Email-cím...'
                  value={email.value}
                  labelText='Email cím'
                  onChangeEvent={(e) => setEmail({ value: e.target.value })}>
                  {email.hasError && email.errorMessage}
               </InputElement>
               <InputElement
                  type='password'
                  placeHolder='Jelszó...'
                  value={firstPassword.value}
                  labelText='Jelszó'
                  onChangeEvent={(e) => setFirstPassword({ value: e.target.value })}>
                  {firstPassword.hasError && firstPassword.errorMessage}
               </InputElement>
               <InputElement
                  type='password'
                  placeHolder='Jelszó még egyszer...'
                  value={secondPassword.value}
                  labelText='Jelszó még egyszer'
                  onChangeEvent={(e) => setSecondPassword({ value: e.target.value })}>
                  {secondPassword.hasError && secondPassword.errorMessage}
               </InputElement>
            </RegisterForm>
         </AuthFormStyle>
      </AuthContainer>
   )
}

export type InputTypes = { value: string; hasError?: boolean; errorMessage?: string }

export default Register
