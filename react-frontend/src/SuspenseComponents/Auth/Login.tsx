import { AuthContainer, AuthFormStyle, ImageStyle, StyledFormPaper } from './BaseStyle'
import Skeleton from '@mui/material/Skeleton'

const Login = () => {
   return (
      <AuthContainer>
         <AuthFormStyle>
            <StyledFormPaper data-testid='loadingSuspense'>
               <Skeleton height={70} width={140} variant='text' sx={{ alignSelf: 'center', marginTop: 3 }} />
               <Skeleton height={87} width='100%' />
               <Skeleton height={87} sx={{ margin: 0 }} width='100%' />
               <Skeleton height={80} width={140} sx={{ alignSelf: 'center', marginTop: 3 }} />
            </StyledFormPaper>
         </AuthFormStyle>
         <ImageStyle />
      </AuthContainer>
   )
}

export default Login
