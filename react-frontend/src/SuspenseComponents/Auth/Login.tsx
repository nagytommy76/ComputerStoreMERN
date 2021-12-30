import { useAppSelector } from '../../app/hooks'

import { AuthContainer, AuthFormStyle, ImageStyle, InputSection, StyledFormPaper } from './BaseStyle'
import Skeleton from '@mui/material/Skeleton'

const Login = () => {
   const isMobileSize = useAppSelector((state) => state.mobile.isMobile)
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
         {isMobileSize && <ImageStyle />}
      </AuthContainer>
   )
}

export default Login
