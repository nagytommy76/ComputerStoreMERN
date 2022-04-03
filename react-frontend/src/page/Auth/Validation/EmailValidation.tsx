import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import ValidImage from './Validation.jpg'

import TextField from '@mui/material/TextField'
import useEmailValidation from '../Hooks/useEmailValidation'

const ValidateForm = React.lazy(() => import('../BaseForm/Form'))
const ErrorAlert = React.lazy(() => import('./ErrorAlert'))

const EmailValidation = () => {
   let params = useParams() as { confirmCode: string }
   const [code, setCode] = useState<string>('')
   const { handleValidationForm, errors, isPending } = useEmailValidation(code)

   useEffect(() => {
      if (params) setCode(params.confirmCode)
   }, [params])

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setCode(event.target.value)

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
