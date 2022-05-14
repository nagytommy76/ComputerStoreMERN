import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosInstance as axios, AxiosError, AxiosResponse } from '../../../AxiosSetup/AxiosInstance'

import { defaultInputProperties, InputTypes } from '../DefaultProperties'

const useRegister = () => {
   const navigate = useNavigate()
   const [isLoadingForResponse, setIsLoadingForResponse] = useState<boolean>(false)
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
      if (userName.value === '')
         return setUserName({ ...userName, hasError: true, errorMessage: 'Kérem a Felhasználónevet!' })
      if (email.value === '')
         return setEmail({ ...email, hasError: true, errorMessage: 'Kérem az e-mail címet' })
      if (firstPassword.value === '')
         return setFirstPassword({ ...firstPassword, hasError: true, errorMessage: 'Kérem a jelszó' })
      if (secondPassword.value === '')
         return setSecondPassword({
            ...secondPassword,
            hasError: true,
            errorMessage: 'Kérem a második jelszót',
         })
      if (!userName.hasError && !email.hasError && !firstPassword.hasError && !secondPassword.hasError) {
         setIsLoadingForResponse(true)
         axios
            .post('/auth/register', {
               email: email.value,
               userName: userName.value,
               firstPassword: firstPassword.value,
               secondPassword: secondPassword.value,
            })
            .then((response: AxiosResponse) => {
               if (response.status === 201) {
                  setIsLoadingForResponse(false)
                  navigate('/login', {
                     state: { isSuccess: true, message: response.data.message },
                  })
               }
            })
            .catch((error: AxiosError) => {
               setIsLoadingForResponse(false)
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
   return {
      registerUser,
      isLoadingForResponse,
      email,
      setEmail,
      userName,
      setUserName,
      firstPassword,
      setFirstPassword,
      secondPassword,
      setSecondPassword,
   }
}

export default useRegister
