import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosInstance as axios, AxiosError, isAxiosError } from '../../../AxiosSetup/AxiosInstance'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { setUserLoggedIn, setUserId, setUserName, setAdmin } from '../../../app/slices/AuthSlice'
import { setAccessToken } from '../../../app/slices/TokenSlice'
import { fillDBWithCartItemsAfterLogin } from '../../../app/slices/CartSlice'

import useLocationState from './useLocationState'

import { InputTypes } from '../DefaultProperties'

const useLogin = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

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

   const handleSetPassword = (error: AxiosError) => {
      setPassword(previousState => {
         return {
            ...previousState,
            hasError: error.response?.data.hasError,
            errorMessage: error.response?.data.errorMessage,
         }
      })
   }
   const handleSetEmailOrUsername = (error: AxiosError) => {
      setEmailOrUsername(previousState => {
         return {
            ...previousState,
            hasError: error.response?.data.hasError,
            errorMessage: error.response?.data.errorMessage,
         }
      })
   }

   useLocationState(setValidationError)

   const resetErrors = () => {
      setEmailOrUsername({ ...emailOrUsername, errorMessage: '', hasError: false })
      setPassword({ ...password, errorMessage: '', hasError: false })
   }

   const loginUser = async (event: React.FormEvent) => {
      event.preventDefault()
      setIsLoadingForResponse(true)
      resetErrors()

      try {
         if (emailOrUsername.value === '') {
            return setEmailOrUsername({ value: '', hasError: true, errorMessage: 'Kérem az e-mail címet!' })
         }
         if (password.value === '')
            return setPassword({ value: '', hasError: true, errorMessage: 'Kérem a jelszót!' })
         const result = await axios.post('/auth/login', {
            email: emailOrUsername.value,
            password: password.value,
         })
         if (result.status === 200) {
            dispatch(setUserLoggedIn(true))
            dispatch(setUserId(result.data.userId))
            dispatch(setAccessToken(result.data.accessToken))
            dispatch(setUserName(result.data.userName))
            if (result.data.isAdmin) dispatch(setAdmin(true))
            if (cartItems.length > 0) dispatch(fillDBWithCartItemsAfterLogin())
            navigate('/')
         }
      } catch (error) {
         if (isAxiosError(error)) {
            if (error.response?.data.errorType === 'email') {
               if (error.response.status === 403) setIsinvalidatedEmail(true)
               handleSetEmailOrUsername(error)
            } else {
               setInvalidPassAttempt(prevAttempt => (prevAttempt += 1))
               handleSetPassword(error)
            }
         }
      } finally {
         setIsLoadingForResponse(false)
      }
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
