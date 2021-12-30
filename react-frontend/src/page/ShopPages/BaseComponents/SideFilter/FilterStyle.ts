import styled from 'styled-components'
import { mobileWindowSize } from '../../../../Theme/GlobalStyles'

export const StyledFilter = styled.aside<{ isDarkTheme: boolean }>`
   width: 270px;
   margin-top: -1.5rem;
   min-height: 100%;
   background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#222' : '#F9F9F9')};
   color: ${({ isDarkTheme }) => (isDarkTheme ? '#FFF' : '#000')};
   transition: all 0.25s;

   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width: ${mobileWindowSize}) {
      width: 95%;
      height: 100%;
      margin-bottom: 2.5rem;
   }
`

export const MainTitle = styled.h1`
   font-size: 2rem;
   margin: 0.8rem 0;
`

// Inputs

export const InputContainer = styled.div`
   width: 85%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin: 0.7rem 0;
`
