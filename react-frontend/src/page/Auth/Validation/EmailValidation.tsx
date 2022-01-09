import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { AuthContainer, AuthFormStyle } from '../BaseForm/BaseStyle'

import TextField from '@mui/material/TextField'

const ValidateForm = React.lazy(() => import('../BaseForm/Form'))

const EmailValidation = () => {
   let params = useParams() as { confirmCode: string }
   const [code, setCode] = useState<string>('')
   const [isPending, setIsPending] = useState<boolean>(false)

   useEffect(() => {
      if (params) setCode(params.confirmCode)
   }, [params])

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setCode(event.target.value)

   const handleValidationForm = (event: React.FormEvent) => {
      event.preventDefault()
      console.log('Küldés')
   }

   return (
      <AuthContainer>
         <AuthFormStyle>
            <ValidateForm
               buttonText='Megerősítés'
               isLoadingButton={isPending}
               onSubmitEvent={handleValidationForm}
               title='Email cím regisztráció'>
               <TextField
                  label='Megerősítő kód'
                  fullWidth
                  variant='outlined'
                  multiline
                  minRows={5}
                  value={code}
                  onChange={handleChange}
               />
            </ValidateForm>
         </AuthFormStyle>
         <p>Kép helye</p>
      </AuthContainer>
   )
}

export default EmailValidation
