import { AuthContainer, AuthFormStyle, ImageStyle, InputSection, StyledFormPaper } from './BaseStyle'
import Skeleton from '@mui/material/Skeleton'

const Register = () => {
   return (
      <AuthContainer data-testid='register-suspense'>
         <ImageStyle />
         <AuthFormStyle>
            <StyledFormPaper>
               <Skeleton height={75} width={220} sx={{ alignSelf: 'center', marginTop: 2 }} />
               <Skeleton height={86} width='100%' />
               <Skeleton height={86} width='100%' />
               <Skeleton height={86} width='100%' />
               <Skeleton height={86} width='100%' />
               <Skeleton height={70} width={180} sx={{ alignSelf: 'center' }} />
            </StyledFormPaper>
         </AuthFormStyle>
      </AuthContainer>
   )
}

export default Register
