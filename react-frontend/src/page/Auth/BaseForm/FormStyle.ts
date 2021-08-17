import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

export const FormTitle = styled.h1`
   font-size: 2rem;
   text-align: center;
   @media (max-width: ${mobileWindowSize}) {
      font-size: 1.4rem;
   }
`

export const StyledForm = styled.form`
   background-color: #2b323a;
   color: white;
   width: 500px;
   min-height: 430px;
   border-radius: 5px;
   box-shadow: 7px 4px 25px #333;
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
