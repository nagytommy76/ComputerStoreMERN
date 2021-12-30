import styled from 'styled-components'

import { styled as MUIStyled } from '@mui/material'
import Paper from '@mui/material/Paper'
import { mobileWindowSize } from '../../Theme/GlobalStyles'

const blankColor = `hsl(0, 0%, 50%)`

export const StyledFormPaper = MUIStyled(Paper)`
   padding: 0 2.5rem;
   display: flex;
   flex-direction: column;
   width: 450px;
   min-height: 420px;
`

// FORM

export const InputSection = styled.section`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
`

export const AuthFormStyle = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
`

// CONTAINER

export const AuthContainer = styled.section`
   min-height: 100vh;
   display: grid;
   grid-template-columns: repeat(2, 50%);
   justify-content: center;
   align-items: center;
   @media (max-width: ${mobileWindowSize}) {
      grid-template-columns: repeat(1, 100%);
   }
`

export const ImageStyle = styled.section`
   background-color: ${blankColor};
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 100%;

   @media (max-width: ${mobileWindowSize}) {
      display: none;
   }
`
