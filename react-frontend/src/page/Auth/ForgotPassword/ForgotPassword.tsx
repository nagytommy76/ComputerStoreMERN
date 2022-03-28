import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import useErrorsState from '../Hooks/useErrorsState'

import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import ValidationImage from '../Validation/Validation.jpg'

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
            // console.log(error.response)
            // if (error.response?.status === 403) {
            //    error.response.data.errorMsg === /jwt expired/i &&
            //       setErrors({
            //          hasError: true,
            //          messageTitle: 'Eltelt 15 perc! Lejárt a kód!',
            //          message: 'Kérlek kérj egy új emailt a lenti gombbal.',
            //          errorType: 'jwt expired',
            //       })
            //    error.response.data.errorMsg === /invalid signature/i ||
            //       ('invalid token' &&
            //          setErrors({
            //             hasError: true,
            //             messageTitle: 'Helytelen megerősítő kód! Kérlek ellenőrizd, vagy kérj egy újat!',
            //             errorType: 'invalid signature',
            //          }))
            // } else {
            //    setErrors({
            //       hasError: true,
            //       messageTitle: 'Egyéb hiba!',
            //       message: error.response?.data.message || 'Egyéb hiba',
            //       errorType: 'invalid signature',
            //    })
            // }
            switch (error.response?.status) {
               case 403:
                  setErrors({
                     hasError: true,
                     messageTitle: error.response.data.errors[0].msg,
                     message: 'Kérlek kérj egy új emailt a lenti gombbal.',
                     errorType: 'jwt expired',
                  })
                  break
               case 422:
                  console.log('HAHHHÓÓÓÓ')
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
                  error={errors}
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
