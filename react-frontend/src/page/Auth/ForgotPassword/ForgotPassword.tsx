import React, { useState } from 'react'

import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import ValidationImage from '../Validation/Validation.jpg'
import useForgotPassword from '../Hooks/useForgotPassword'

const ForgotPassForm = React.lazy(() => import('../BaseForm/Form'))
const InputFields = React.lazy(() => import('./Includes/InputFields'))
const ErrorMessages = React.lazy(() => import('./Includes/ErrorMessages'))

const ForgotPassword = () => {
   const [firstPassword, setFirstPassword] = useState<string>('')
   const [secondPassword, setSecondPassword] = useState<string>('')

   const { isLoading, handlePasswordReset, handleClose, isSnackOpen, setIsSnackOpen, userEmail, errors } =
      useForgotPassword(firstPassword, secondPassword)

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
