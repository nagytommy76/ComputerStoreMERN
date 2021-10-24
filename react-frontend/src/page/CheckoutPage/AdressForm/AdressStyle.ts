import styled from 'styled-components'
import { largeWindowSize, mobileWindowSize } from '../../../Theme/GlobalStyles'

export const AdressContainer = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   flex: 1;

   @media (max-width: ${mobileWindowSize}) {
   }
`

export const BackgroundImageStyle = styled.div<{ backgroundImage: string }>`
   width: 50%;
   height: 100%;
   position: absolute;

   background-image: url(${({ backgroundImage }) => backgroundImage});
   background-position: 50% 65%;
   background-repeat: no-repeat;
   background-size: cover;
   filter: brightness(40%);

   @media (max-width: ${mobileWindowSize}) {
      width: 100%;
   }
`

export const AdressFormStyle = styled.form<{ darkTheme: boolean }>`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   z-index: 2;
   color: #fff;

   @media (min-width: ${largeWindowSize}) {
      width: 70%;
      margin: auto;
   }
`

export const FormControlRow = styled.div`
   width: 90%;
   margin: 0.7rem 0;
   display: flex;
   flex-direction: row;
   justify-content: center;
   @media (max-width: ${mobileWindowSize}) {
   }
`

export const StyledHeading = styled.h1`
   font-size: 2.5rem;
   text-align: center;

   @media (max-width: ${mobileWindowSize}) {
      font-size: 2rem;
   }
`
