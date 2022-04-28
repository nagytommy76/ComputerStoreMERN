import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useErrorsState from './useErrorsState'

const useEmailValidation = (confirmCode: string) => {
   const navigate = useNavigate()
   const [isPending, setIsPending] = useState<boolean>(false)
   const { errors, setErrors } = useErrorsState()

   const handleValidationForm = async (event: React.FormEvent) => {
      event.preventDefault()
      setIsPending(true)
      try {
         const verificationResponse = await axios.post('/auth/confirm-email', { confirmCode })
         if (verificationResponse.status === 200) {
            setIsPending(false)
            navigate('/login', {
               state: { isSuccess: true, message: 'Sikeres email cím megerősítés, most már beléphetsz!' },
            })
         }
      } catch (error: any) {
         switch (error.response?.status) {
            case 403:
               switch (error.response.data.errorMsg) {
                  case 'jwt expired':
                     setErrors({
                        hasError: true,
                        messageTitle: 'Lejárt a validációs kód!',
                        message: 'Kérlek kérj egy új emailt a lenti gombbal.',
                        errorType: 'jwt expired',
                     })
                     break
                  case 'invalid signature':
                     setErrors({
                        hasError: true,
                        messageTitle: 'Hibás kódot adtál meg! Ellenőrizd vagy:',
                        message: 'Kérj egy új emailt a lenti gombbal.',
                        errorType: 'invalid signature',
                     })
                     break
                  case 'jwt malformed':
                     setErrors({
                        hasError: true,
                        messageTitle: 'Nem megfelelő kód formátumot adtál meg',
                        message: 'Kérj egy új emailt a lenti gombbal.',
                        errorType: 'invalid signature',
                     })
                     break
               }
               break
            default:
               setErrors({
                  hasError: true,
                  messageTitle: 'Egyéb hiba!',
                  message: error.response?.data.errorMsg || 'Egyéb hiba',
                  errorType: 'invalid signature',
               })
               break
         }
         setIsPending(false)
      }
   }
   return { isPending, errors, handleValidationForm }
}

export default useEmailValidation
