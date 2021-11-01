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

const Register = () => {
   return (
      <AuthContainer data-testid='register-suspense'>
         <ImageStyle />
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
      </AuthContainer>
   )
}

export default Register
