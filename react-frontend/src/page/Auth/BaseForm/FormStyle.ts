import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

export const FormTitle = styled.h1`
   font-size: 2rem;
   text-align: center;
   @media (max-width: ${mobileWindowSize}) {
      font-size: 1.4rem;
   }
`

export const StyledForm = styled.form<{ isDark: boolean }>`
   transition: all 0.25s;
   background-color: ${({ isDark }) => (isDark ? '#222' : '#DDD')};
   padding: 0 2.5rem;
   color: ${({ isDark }) => (isDark ? '#FFF' : '#000')};
   width: 450px;
   min-height: 400px;
   border-radius: 3px;
   box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
   @media (max-width: ${mobileWindowSize}) {
      width: 90%;
   }
`

export const FormConrolStyle = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
