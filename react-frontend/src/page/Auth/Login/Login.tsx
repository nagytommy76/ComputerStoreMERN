import React, { useState } from 'react'
import { ImageStyle, AuthContainer, AuthFormStyle } from '../BaseForm/BaseStyle'
import loginImage from './login.jpg'

const InputField = React.lazy(() => import('../BaseForm/BaseInput/BaseInput'))
const LoginForm = React.lazy(() => import('../BaseForm/Form'))

const Login = () => {
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const submit = (event: React.FormEvent) => {
      event.preventDefault()
      if (email && password) {
         console.log('http://localhost:5050/api/login')
      }
   }
   return (
      <AuthContainer>
         <AuthFormStyle>
            <LoginForm onSubmitEvent={submit} title='Blépés' buttonText='Belépés'>
               <InputField
                  type='email'
                  placeHolder='Email-cím...'
                  value={email}
                  labelText='Email cím'
                  onChangeEvent={(e) => setEmail(e.target.value)}
               />
               <InputField
                  type='password'
                  placeHolder='Jelszó...'
                  value={password}
                  labelText='Jelszó'
                  onChangeEvent={(e) => setPassword(e.target.value)}
               />
            </LoginForm>
         </AuthFormStyle>
         <ImageStyle image={loginImage} />
      </AuthContainer>
   )
}

export default Login
