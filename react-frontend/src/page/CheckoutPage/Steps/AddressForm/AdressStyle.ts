import styled from 'styled-components'
import { largeWindowSize, mobileWindowSize } from '../../../../Theme/GlobalStyles'

export const AdressFormStyle = styled.form<{ darkTheme: boolean }>`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   z-index: 2;

   @media (min-width: ${largeWindowSize}) {
      width: 70%;
      margin: auto;
   }
`

export const FormControlRow = styled.div`
   width: 85%;
   margin: 0.7rem 0;
   display: flex;
   /* flex-direction: row; */
   justify-content: space-evenly;
   @media (max-width: ${mobileWindowSize}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`

export const StyledHeading = styled.h1`
   font-size: 2.5rem;
   text-align: center;

   @media (max-width: ${mobileWindowSize}) {
      font-size: 2rem;
   }
`
