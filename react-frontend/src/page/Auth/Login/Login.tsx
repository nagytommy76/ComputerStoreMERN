import axios, { AxiosResponse, AxiosError } from 'axios'
import React, { useState, Suspense } from 'react'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setUserLoggedIn, setAccessToken, setUserId, setUserName, setRefreshToken, setAdmin } from '../../../app/slices/AuthSlice'
import { fillDBWithCartItemsAfterLogin } from '../../../app/slices/CartSlice'

import loginImage from './login.jpg'

import { InputTypes } from '../DefaultProperties'
import { ImageStyle, AuthContainer, AuthFormStyle } from '../BaseForm/BaseStyle'
import LoginSuspense from '../../../SuspenseComponents/Auth/Login'

import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'

const LoginForm = React.lazy(() => import('../BaseForm/Form'))

const Login: React.FC = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const cartItems = useAppSelector((state) => state.cart.cartItems)
   const [email, setEmail] = useState<InputTypes>({ value: '', hasError: false, errorMessage: '' })
   const [password, setPassword] = useState<InputTypes>({ value: '', hasError: false, errorMessage: '' })

   const resetErrors = () => {
      setEmail({ ...email, errorMessage: '', hasError: false })
      setPassword({ ...password, errorMessage: '', hasError: false })
   }

   const loginUser = (event: React.FormEvent) => {
      event.preventDefault()
      resetErrors()
      if (email.value === '') return setEmail({ value: '', hasError: true, errorMessage: 'Kérem az e-mail címet!' })
      if (password.value === '') return setPassword({ value: '', hasError: true, errorMessage: 'Kérem a jelszót!' })
      axios
         .post('/auth/login', {
            email: email.value,
            password: password.value
         })
         .then((response: AxiosResponse) => {
            if (response.status === 200) {
               dispatch(setUserLoggedIn(true))
               dispatch(setUserId(response.data.userId))
               dispatch(setAccessToken(response.data.accessToken))
               dispatch(setRefreshToken(response.data.refreshToken))
               dispatch(setUserName(response.data.userName))
               if (response.data.isAdmin) dispatch(setAdmin(true))
               if (cartItems.length > 0) dispatch(fillDBWithCartItemsAfterLogin())
               navigate('/')
            }
         })
         .catch((err: AxiosError) => {
            if (err.response?.data.errorType === 'password')
               setPassword((previousState) => {
                  return {
                     ...previousState,
                     hasError: err.response?.data.hasError,
                     errorMessage: err.response?.data.errorMessage
                  }
               })
            else
               setEmail((previousState) => {
                  return {
                     ...previousState,
                     hasError: err.response?.data.hasError,
                     errorMessage: err.response?.data.errorMessage
                  }
               })
         })
   }
   return (
      <Suspense fallback={<LoginSuspense />}>
         <AuthContainer>
            <AuthFormStyle>
               <LoginForm onSubmitEvent={loginUser} title='Belépés' buttonText='Belépés'>
                  <TextField
                     autoFocus
                     id='Email'
                     error={email.hasError}
                     helperText={email.errorMessage}
                     variant='filled'
                     fullWidth
                     required
                     label='Email cím/Felhasználónév'
                     margin='normal'
                     value={email.value}
                     onChange={(e) => setEmail({ ...email, value: e.target.value })}
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
               </LoginForm>
            </AuthFormStyle>
            <ImageStyle image={loginImage} />
         </AuthContainer>
      </Suspense>
   )
}

export default Login
