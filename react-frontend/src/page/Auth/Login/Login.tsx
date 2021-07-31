import axios, { AxiosResponse, AxiosError } from 'axios'
import React, { useState } from 'react'
import { ImageStyle, AuthContainer, AuthFormStyle } from '../BaseForm/BaseStyle'
import loginImage from './login.jpg'
import { InputTypes } from '../Register/Register'
import { setUserLoggedIn, setAccessToken, setUserName, setRefreshToken, setAdmin } from '../../../app/slices/AuthSlice'
import { useAppDispatch } from '../../../app/hooks'
import { useHistory } from 'react-router'

const InputField = React.lazy(() => import('../BaseForm/BaseInput/BaseInput'))
const LoginForm = React.lazy(() => import('../BaseForm/Form'))

const Login = () => {
   const history = useHistory()
   const dispatch = useAppDispatch()
   const [email, setEmail] = useState<InputTypes>({ value: '', hasError: false, errorMessage: '' })
   const [password, setPassword] = useState<InputTypes>({ value: '', hasError: false, errorMessage: '' })
   const loginUser = async (event: React.FormEvent) => {
      event.preventDefault()
      if (email.value === '') return setEmail({ value: '', hasError: true, errorMessage: 'Kérem az e-mail címet!' })
      if (password.value === '') return setPassword({ value: '', hasError: true, errorMessage: 'Kérem a jelszót!' })
      await axios
         .post('/auth/login', {
            email: email.value,
            password: password.value
         })
         .then((response: AxiosResponse) => {
            if (response.status === 200) {
               dispatch(setUserLoggedIn(true))
               dispatch(setAccessToken(response.data.accessToken))
               dispatch(setRefreshToken(response.data.refreshToken))
               dispatch(setUserName(response.data.userName))
               if (response.data.isAdmin) dispatch(setAdmin(true))
               history.push('/')
            }
         })
         .catch((err: AxiosError) => {
            console.log(err.response)
            setEmail({ value: email.value, hasError: err.response?.data.hasError, errorMessage: err.response?.data.errorMessage })
         })
   }
   return (
      <AuthContainer>
         <AuthFormStyle>
            <LoginForm onSubmitEvent={loginUser} title='Belépés' buttonText='Belépés'>
               <InputField
                  placeHolder='Email cím/Felhasználónév...'
                  value={email.value}
                  labelText='Email cím/Felhasználónév'
                  onChangeEvent={(e) => setEmail({ value: e.target.value })}>
                  {email.hasError && email.errorMessage}
               </InputField>
               <InputField
                  type='password'
                  placeHolder='Jelszó...'
                  value={password.value}
                  labelText='Jelszó'
                  onChangeEvent={(e) => setPassword({ value: e.target.value })}>
                  {password.hasError && password.errorMessage}
               </InputField>
            </LoginForm>
         </AuthFormStyle>
         <ImageStyle image={loginImage} />
      </AuthContainer>
   )
}

export default Login
