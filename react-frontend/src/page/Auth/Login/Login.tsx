import React, { Suspense } from 'react'

import useLogin from '../Hooks/useLogin'
import loginImage from './login.jpg'

import { ImageStyle, AuthContainer, AuthFormStyle } from '../BaseForm/BaseStyle'
import LoginSuspense from '../../../SuspenseComponents/Auth/Login'

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
   } = useLogin()

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
