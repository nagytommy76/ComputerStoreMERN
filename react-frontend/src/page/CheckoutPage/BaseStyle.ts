import styled from 'styled-components'
import { mobileWindowSize } from '../../Theme/GlobalStyles'

export const PageContainer = styled.section<{ isDarkTheme: boolean }>`
   margin: 0 auto;
   min-height: 100vh;
   color: ${({ isDarkTheme }) => (isDarkTheme ? '#FFF' : '#000')};
   transition: color 0.25s;

   display: flex;
   justify-content: center;

   @media (max-width: ${mobileWindowSize}) {
      flex-direction: column;
   }
`

export const LeftPageContainer = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex: 1;

   @media (max-width: ${mobileWindowSize}) {
      min-height: 90vh;
      margin: 5rem 0 2rem 0;
   }
`
