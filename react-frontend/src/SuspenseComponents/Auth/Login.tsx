import React from 'react'
import {
   AuthContainer,
   AuthFormStyle,
   Button,
   FormTitle,
   ImageStyle,
   InputSection,
   StyledForm,
   StyledInput,
   StyledLabel
} from './BaseStyle'
const Login = () => {
   return (
      <AuthContainer>
         <AuthFormStyle>
            <StyledForm>
               <FormTitle />
               <InputSection>
                  <StyledLabel />
                  <StyledInput />
               </InputSection>
               <InputSection>
                  <StyledLabel />
                  <StyledInput />
               </InputSection>
               <Button />
            </StyledForm>
         </AuthFormStyle>
         <ImageStyle />
      </AuthContainer>
   )
}

export default Login
