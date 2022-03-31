import React, { useState } from 'react'
import axios from 'axios'

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
         const resetResponse = await axios.post('/auth/reset-password', {
            passwordToken: forgotPassToken,
            userEmail,
            firstPassword,
            secondPassword,
         })
         console.table(resetResponse.data)
         setIsSnackOpen({
            message: 'Sikeresen módosítottad a jelszavad! Most már bejelentkezhetsz!',
            open: true,
         })
         setTimeout(() => {
            navigate('/login')
         }, 6000)
         setIsLoading(false)
      } catch (error) {
         if (axios.isAxiosError(error)) {
            switch (error.response?.status) {
               case 403:
                  if (error.response.data.errorMessage === 'password token expired') {
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
                     messageTitle: error.response.data.errors[0].msg,
                  })
                  break
            }
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
