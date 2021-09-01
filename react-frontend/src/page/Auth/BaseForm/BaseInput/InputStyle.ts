import styled from 'styled-components'
import { mobileWindowSize } from '../../../../Theme/GlobalStyles'

export const StyledFormControl = styled.section`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
   margin-bottom: 1rem;
`

export const StyledLabel = styled.label`
   width: 85%;
   padding: 0.4rem 0 0.8rem 0;
   font-size: 1.1rem;
   text-align: left;
   @media (max-width: ${mobileWindowSize}) {
      font-size: 1rem;
      width: 90%;
   }
`

export const StyledInput = styled.input`
   font-size: 1.1rem;
   padding: 0.8rem;
   border-radius: 5px;
   width: 85%;
   border: none;
   outline: none;
   box-sizing: border-box;
   transition: all 0.2s linear;

   &:focus {
      box-shadow: 0px 0px 15px #888;
   }
   @media (max-width: ${mobileWindowSize}) {
      padding: 0.8rem;
      font-size: 1rem;
      width: 90%;
   }
`

export const ErrorSpanStyle = styled.span`
   width: 85%;
   color: #f21200;
   font-size: 1.1rem;
   padding: 0.5rem 0 0.5rem 0;
`
