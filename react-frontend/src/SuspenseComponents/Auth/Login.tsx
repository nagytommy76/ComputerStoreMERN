import { AuthContainer, AuthFormStyle, ImageStyle, InputSection, StyledFormPaper } from './BaseStyle'
import Skeleton from '@mui/material/Skeleton'

const Login = () => {
   return (
      <AuthContainer>
         <AuthFormStyle>
            <StyledFormPaper>
               <Skeleton height={75} width={220} sx={{ alignSelf: 'center', marginTop: 3 }} />
               <InputSection>
                  <Skeleton height={100} width='93%' />
               </InputSection>
               <InputSection>
                  <Skeleton height={100} width='93%' />
               </InputSection>
               <Skeleton height={80} width={160} sx={{ alignSelf: 'center' }} />
            </StyledFormPaper>
         </AuthFormStyle>
         <ImageStyle />
      </AuthContainer>
   )
}

export default Login
