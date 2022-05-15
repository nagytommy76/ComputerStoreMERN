import React, { useState } from 'react'
import { axiosInstance as axios, AxiosError } from '../../../AxiosSetup/AxiosInstance'

import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useErrorsState from './useErrorsState'
import useSnackbar from './useSnackbar'

const useForgotPassword = (firstPassword: string, secondPassword: string) => {
   const navigate = useNavigate()
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const { errors, setErrors } = useErrorsState()
   const { isSnackOpen, setIsSnackOpen, handleClose } = useSnackbar()

   let { forgotPassToken, userEmail } = useParams() as { forgotPassToken: string; userEmail: string }

   const handlePasswordReset = async (event: React.FormEvent) => {
      event.preventDefault()
      setIsLoading(true)
      try {
         await axios.post('/auth/reset-password', {
            passwordToken: forgotPassToken,
            userEmail,
            firstPassword,
            secondPassword,
         })
         setIsSnackOpen({
            message: 'Sikeresen módosítottad a jelszavad! Most már bejelentkezhetsz!',
            open: true,
         })
         setTimeout(() => {
            navigate('/login')
         }, 6000)
         setIsLoading(false)
      } catch (error) {
         const axiosError = error as AxiosError
         switch (axiosError.response?.status) {
            case 403:
               if (axiosError.response.data.errorMessage === 'password token expired') {
                  setErrors({
                     hasError: true,
                     messageTitle: 'A validációs link lejárt, vagy hibás!',
                     message: 'Kérlek kérj egy új emailt a lenti gombbal.',
                     errorType: 'jwt expired',
                  })
               }
               break
            case 422:
               setErrors({
                  hasError: true,
                  messageTitle: axiosError.response.data.errors[0].msg,
               })
               break
         }
         setIsLoading(false)
      }
   }
   return {
      handlePasswordReset,
      isLoading,
      isSnackOpen,
      setIsSnackOpen,
      handleClose,
      userEmail,
      errors,
   }
}

export default useForgotPassword
