import React, { Suspense } from 'react'

import useLogin from '../Hooks/useLogin'
import loginImage from './login.jpg'

import { ImageStyle, AuthContainer, AuthFormStyle } from '../BaseForm/BaseStyle'
import LoginSuspense from '../../../SuspenseComponents/Auth/Login'

import Button from '@mui/material/Button'

const LoginForm = React.lazy(() => import('../BaseForm/Form'))
const InputFields = React.lazy(() => import('./Includes/InputFields'))
const AlertMessages = React.lazy(() => import('./Includes/AlertMessages'))

const Login: React.FC = () => {
   const {
      loginUser,
      isInvalidatedEmail,
      isLoadingForResponse,
      validationError,
      emailOrUsername,
      setEmailOrUsername,
      password,
      setPassword,
      invalidPassAttempt,
      setInvalidPassAttempt,
   } = useLogin()

   const handleForgotPasswordButton = () => {
      if (emailOrUsername.value.length >= 3) setInvalidPassAttempt(2)
      else console.log('Kérlek írj be egy felhasználónevet vagy emailt!')
   }

   return (
      <Suspense fallback={<LoginSuspense />}>
         <AuthContainer>
            <AuthFormStyle>
               <LoginForm
                  onSubmitEvent={loginUser}
                  title='Belépés'
                  buttonText='Belépés'
                  isLoadingButton={isLoadingForResponse}
               >
                  <InputFields
                     emailOrUsername={emailOrUsername}
                     setEmailOrUsername={setEmailOrUsername}
                     password={password}
                     setPassword={setPassword}
                  />
                  <div style={{ width: '100%' }}>
                     <Button onClick={handleForgotPasswordButton} size='small' variant='text'>
                        elfelejtett jelszó?
                     </Button>
                  </div>
                  <AlertMessages
                     invalidPassAttempt={invalidPassAttempt}
                     emailOrUsername={emailOrUsername}
                     isInvalidatedEmail={isInvalidatedEmail}
                     validationError={validationError}
                  />
               </LoginForm>
            </AuthFormStyle>
            <ImageStyle image={loginImage} />
         </AuthContainer>
      </Suspense>
   )
}

export default Login
