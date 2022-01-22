import React, { Suspense } from 'react'
import { AuthContainer, AuthFormStyle, ImageStyle } from '../BaseForm/BaseStyle'
import useRegister from '../Hooks/useRegister'

import registerImage from './register.jpg'
import RegisterSuspense from '../../../SuspenseComponents/Auth/Register'

const RegisterForm = React.lazy(() => import('../BaseForm/Form'))
const InputFields = React.lazy(() => import('./InputFields'))

const Register = () => {
   const {
      registerUser,
      isLoadingForResponse,
      email,
      setEmail,
      userName,
      setUserName,
      firstPassword,
      setFirstPassword,
      secondPassword,
      setSecondPassword
   } = useRegister()

   return (
      <Suspense fallback={<RegisterSuspense />}>
         <AuthContainer>
            <ImageStyle image={registerImage} />
            <AuthFormStyle>
               <RegisterForm
                  isLoadingButton={isLoadingForResponse}
                  onSubmitEvent={registerUser}
                  title='Regisztráció'
                  buttonText='Regisztráció'>
                  <InputFields
                     email={email}
                     setEmail={setEmail}
                     userName={userName}
                     setUserName={setUserName}
                     firstPassword={firstPassword}
                     setFirstPassword={setFirstPassword}
                     secondPassword={secondPassword}
                     setSecondPassword={setSecondPassword}
                  />
               </RegisterForm>
            </AuthFormStyle>
         </AuthContainer>
      </Suspense>
   )
}

export default Register
