import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import useErrorsState from '../Hooks/useErrorsState'
import useSnackbar from '../Hooks/useSnackbar'

import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import ValidationImage from '../Validation/Validation.jpg'

const ForgotPassForm = React.lazy(() => import('../BaseForm/Form'))
const InputFields = React.lazy(() => import('./Includes/InputFields'))
const ErrorMessages = React.lazy(() => import('./Includes/ErrorMessages'))

const ForgotPassword = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [firstPassword, setFirstPassword] = useState<string>('')
   const [secondPassword, setSecondPassword] = useState<string>('')
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
               <ErrorMessages
                  errors={errors}
                  handleClose={handleClose}
                  isSnackOpen={isSnackOpen}
                  setIsSnackOpen={setIsSnackOpen}
                  userEmail={userEmail}
               />
            </ForgotPassForm>
         </AuthFormStyle>
         <ImageStyle image={ValidationImage} />
      </AuthContainer>
   )
}

export default ForgotPassword
