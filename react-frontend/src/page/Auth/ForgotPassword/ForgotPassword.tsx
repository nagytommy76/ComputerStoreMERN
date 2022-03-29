import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import useErrorsState from '../Hooks/useErrorsState'

import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import ValidationImage from '../Validation/Validation.jpg'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Fade from '@mui/material/Fade'

const ForgotPassForm = React.lazy(() => import('../BaseForm/Form'))
const InputFields = React.lazy(() => import('./Includes/InputFields'))

const ForgotPassword = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [firstPassword, setFirstPassword] = useState<string>('')
   const [secondPassword, setSecondPassword] = useState<string>('')
   const { errors, setErrors } = useErrorsState()

   let { forgotPassToken, userId } = useParams() as { forgotPassToken: string; userId: string }

   const handlePasswordReset = async (event: React.FormEvent) => {
      event.preventDefault()
      setIsLoading(true)
      try {
         const resetResponse = await axios.post('/auth/reset-password', {
            passwordToken: forgotPassToken,
            userId,
            firstPassword,
            secondPassword,
         })
         console.table(resetResponse.data)
         setIsLoading(false)
      } catch (error) {
         if (axios.isAxiosError(error)) {
            switch (error.response?.status) {
               case 403:
                  if (error.response.data.errorMessage === 'password token expired') {
                     setErrors({
                        hasError: true,
                        messageTitle: 'A validációs link lejárt!',
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
   return (
      <AuthContainer>
         <AuthFormStyle>
            <ForgotPassForm
               title='Elfelejtett jelszó módosítása'
               buttonText='Jelszó módosítása'
               isLoadingButton={isLoading}
               onSubmitEvent={handlePasswordReset}
            >
               <InputFields
                  firstPassword={firstPassword}
                  secondPassword={secondPassword}
                  setFirstPassword={setFirstPassword}
                  setSecondPassword={setSecondPassword}
               />
               <Fade in={errors.hasError}>
                  <span style={{ width: '100%', marginTop: '1rem' }}>
                     <Alert variant='standard' color='error'>
                        <AlertTitle>{errors.messageTitle}</AlertTitle>
                        {errors.message}
                     </Alert>
                  </span>
               </Fade>
            </ForgotPassForm>
         </AuthFormStyle>
         <ImageStyle image={ValidationImage} />
      </AuthContainer>
   )
}

export default ForgotPassword
