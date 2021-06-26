import React, { useState } from 'react'
import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import registerImage from './register.jpg'

const RegisterForm = React.lazy(() => import('../BaseForm/Form'))
const InputElement = React.lazy(() => import('../BaseForm/BaseInput/BaseInput'))

const Register = () => {
   const [email, setEmail] = useState('')
   const [userName, setUserName] = useState('')
   const [firstPassword, setFirstPassword] = useState('')
   const [secondPassword, setSecondPassword] = useState('')

   const registerUser = (event: React.FormEvent) => {
      event.preventDefault()
      if (email && firstPassword && secondPassword) {
         console.log('http://localhost:5050/api/register')
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
                  value={userName}
                  labelText='Felhasználónév'
                  onChangeEvent={(e) => setUserName(e.target.value)}
               />
               <InputElement
                  type='email'
                  placeHolder='Email-cím...'
                  value={email}
                  labelText='Email cím'
                  onChangeEvent={(e) => setEmail(e.target.value)}
               />
               <InputElement
                  type='password'
                  placeHolder='Jelszó...'
                  value={firstPassword}
                  labelText='Jelszó'
                  onChangeEvent={(e) => setFirstPassword(e.target.value)}
               />
               <InputElement
                  type='password'
                  placeHolder='Jelszó még egyszer...'
                  value={secondPassword}
                  labelText='Jelszó még egyszer'
                  onChangeEvent={(e) => setSecondPassword(e.target.value)}
               />
            </RegisterForm>
         </AuthFormStyle>
      </AuthContainer>
   )
}

export default Register
