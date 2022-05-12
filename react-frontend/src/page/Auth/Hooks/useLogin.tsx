import React, { useState } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
   setUserLoggedIn,
   setAccessToken,
   setUserId,
   setUserName,
   setRefreshToken,
   setAdmin,
} from '../../../app/slices/AuthSlice'
import { fillDBWithCartItemsAfterLogin } from '../../../app/slices/CartSlice'

import useLocationState from './useLocationState'

import { InputTypes } from '../DefaultProperties'

const useLogin = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   const accesToken = useAppSelector(state => state.auth.accessToken)
   const cartItems = useAppSelector(state => state.cart.cartItems)
   const [isLoadingForResponse, setIsLoadingForResponse] = useState<boolean>(false)

   const [isInvalidatedEmail, setIsinvalidatedEmail] = useState<boolean>(false)
   const [emailOrUsername, setEmailOrUsername] = useState<InputTypes>({
      value: '',
      hasError: false,
      errorMessage: '',
   })
   const [password, setPassword] = useState<InputTypes>({ value: '', hasError: false, errorMessage: '' })
   const [validationError, setValidationError] = useState({ isSuccess: false, message: '' })
   const [invalidPassAttempt, setInvalidPassAttempt] = useState<number>(0)

   useLocationState(setValidationError)

   const resetErrors = () => {
      setEmailOrUsername({ ...emailOrUsername, errorMessage: '', hasError: false })
      setPassword({ ...password, errorMessage: '', hasError: false })
   }

   const loginUser = (event: React.FormEvent) => {
      event.preventDefault()
      setIsLoadingForResponse(true)
      resetErrors()
      if (emailOrUsername.value === '')
         return setEmailOrUsername({ value: '', hasError: true, errorMessage: 'Kérem az e-mail címet!' })
      if (password.value === '')
         return setPassword({ value: '', hasError: true, errorMessage: 'Kérem a jelszót!' })
      axios
         .post('/auth/login', {
            email: emailOrUsername.value,
            password: password.value,
         })
         .then((response: AxiosResponse) => {
            if (response.status === 200) {
               dispatch(setUserLoggedIn(true))
               dispatch(setUserId(response.data.userId))
               dispatch(setAccessToken(response.data.accessToken))
               dispatch(setRefreshToken(response.data.refreshToken))
               dispatch(setUserName(response.data.userName))
               if (response.data.isAdmin) dispatch(setAdmin(true))
               // setTimeout(() => {
               //    if (cartItems.length > 0) dispatch(fillDBWithCartItemsAfterLogin())
               //    console.log('SETTIMEOUT LEFUTOTTAM')
               // }, 500)
               console.log(accesToken)
               if (cartItems.length > 0 && accesToken) dispatch(fillDBWithCartItemsAfterLogin())
               navigate('/', { state: { testing: true } })
            }
         })
         .catch((err: AxiosError) => {
            setIsLoadingForResponse(false)
            if (err.response?.data.errorType === 'email') {
               if (err.response.status === 403) setIsinvalidatedEmail(true)
               setEmailOrUsername(previousState => {
                  return {
                     ...previousState,
                     hasError: err.response?.data.hasError,
                     errorMessage: err.response?.data.errorMessage,
                  }
               })
            } else {
               setInvalidPassAttempt(prevAttempt => (prevAttempt += 1))
               setPassword(previousState => {
                  return {
                     ...previousState,
                     hasError: err.response?.data.hasError,
                     errorMessage: err.response?.data.errorMessage,
                  }
               })
            }
         })
   }
   return {
      loginUser,
      isLoadingForResponse,
      validationError,
      isInvalidatedEmail,
      emailOrUsername,
      setEmailOrUsername,
      password,
      setPassword,
      invalidPassAttempt,
      setInvalidPassAttempt,
   } as const
}

export default useLogin
