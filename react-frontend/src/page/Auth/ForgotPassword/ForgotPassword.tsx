import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import ValidationImage from '../Validation/Validation.jpg'

const ForgotPassForm = React.lazy(() => import('../BaseForm/Form'))
const InputFields = React.lazy(() => import('./Includes/InputFields'))

const ForgotPassword = () => {
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const [firstPassword, setFirstPassword] = useState<string>('')
   const [secondPassword, setSecondPassword] = useState<string>('')

   let { forgotPassToken } = useParams() as { forgotPassToken: string }

   const handlePasswordReset = (event: React.FormEvent) => {
      event.preventDefault()
      try {
      } catch (error) {
         if (axios.isAxiosError(error)) {
            console.log(error)
         }
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
            </ForgotPassForm>
         </AuthFormStyle>
         <ImageStyle image={ValidationImage} />
      </AuthContainer>
   )
}

export default ForgotPassword
