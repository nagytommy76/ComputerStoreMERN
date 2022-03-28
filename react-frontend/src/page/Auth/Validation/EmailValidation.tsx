import React, { useEffect, useState } from 'react'
import useErrorsState from '../Hooks/useErrorsState'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import ValidImage from './Validation.jpg'

import TextField from '@mui/material/TextField'

const ValidateForm = React.lazy(() => import('../BaseForm/Form'))
const ErrorAlert = React.lazy(() => import('./ErrorAlert'))

const EmailValidation = () => {
   let params = useParams() as { confirmCode: string }
   const navigate = useNavigate()

   const [code, setCode] = useState<string>('')
   const [isPending, setIsPending] = useState<boolean>(false)
   const { errors, setErrors } = useErrorsState()

   useEffect(() => {
      if (params) setCode(params.confirmCode)
   }, [params])

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setCode(event.target.value)

   const handleValidationForm = async (event: React.FormEvent) => {
      event.preventDefault()
      setIsPending(true)
      try {
         const verificationResponse = await axios.post('/auth/confirm-email', { confirmCode: code })
         if (verificationResponse.status === 200) {
            setIsPending(false)
            navigate('/login', {
               state: { isSuccess: true, message: 'Sikeres email cím megerősítés, most már beléphetsz!' },
            })
         }
      } catch (error) {
         if (axios.isAxiosError(error)) {
            if (error.response?.status === 403) {
               error.response.data.param === /jwt expired/i &&
                  setErrors({
                     hasError: true,
                     messageTitle: error.response.data.msg,
                     message: 'Kérlek kérj egy új emailt a lenti gombbal.',
                     errorType: 'jwt expired',
                  })
               error.response.data.param === /firstPassword/i &&
                  setErrors({
                     hasError: true,
                     messageTitle: error.response.data.msg,
                  })
            } else {
               setErrors({
                  hasError: true,
                  messageTitle: 'Egyéb hiba!',
                  message: error.response?.data.message || 'Egyéb hiba',
                  errorType: 'invalid signature',
               })
            }

            setIsPending(false)
         } else console.log(error)
      }
   }

   return (
      <AuthContainer>
         <AuthFormStyle>
            <ValidateForm
               buttonText='Megerősítés'
               isLoadingButton={isPending}
               onSubmitEvent={handleValidationForm}
               title='Email cím regisztráció'
            >
               <TextField
                  label='Megerősítő kód'
                  fullWidth
                  variant='outlined'
                  multiline
                  minRows={5}
                  value={code}
                  onChange={handleChange}
               />
               <ErrorAlert
                  validationCode={code}
                  hasError={errors.hasError}
                  errorMsgTitle={errors.messageTitle}
                  message={errors.message}
               />
            </ValidateForm>
         </AuthFormStyle>
         <ImageStyle image={ValidImage} />
      </AuthContainer>
   )
}

export default EmailValidation
