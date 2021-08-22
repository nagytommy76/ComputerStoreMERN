import styled from 'styled-components'
import { backgroundColor, mobileWindowSize } from '../../../../Theme/GlobalStyles'

export const StyledFilter = styled.aside<{ isDarkTheme: boolean }>`
   width: 270px;
   margin-top: -1.5rem;
   min-height: 100%;
   background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#FFF' : backgroundColor)};
   color: ${({ isDarkTheme }) => (isDarkTheme ? '#000' : '#FFF')};
   transition: all 0.25s;

   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width: ${mobileWindowSize}) {
      width: 100%;
      height: 100%;
   }
`

export const MainTitle = styled.h1`
   font-size: 2rem;
   margin: 0.8rem 0;
`

// Inputs

export const InputContainer = styled.div`
   width: 90%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin: 0.7rem 0;
`

export const StyledLabel = styled.label`
   font-size: 1rem;
   margin-bottom: 0.2rem;
`

export const StyledInput = styled.input`
   width: 100%;
   padding: 0.5rem 0;
`

// SELECT
export const StyledSelect = styled.select`
   width: 100%;
   padding: 0.5rem 0;
   font-size: 1.025rem;
   outline: none;
   border-radius: 5px;
   cursor: pointer;
   border: none;
   box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.35);
`
