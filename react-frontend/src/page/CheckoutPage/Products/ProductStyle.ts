import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

export const ProductsContainer = styled.section`
   flex: 1;
   color: black;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width: ${mobileWindowSize}) {
   }
`

export const ProductCards = styled.div`
   width: 450px;
   height: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const BackgroundImageStyle = styled.div<{ backgroundImage: string }>`
   width: 50%;
   height: 100%;
   position: absolute;

   background-image: url(${({ backgroundImage }) => backgroundImage});
   background-position: 50% 65%;
   background-repeat: no-repeat;
   background-size: cover;
   filter: brightness(50%);

   @media (max-width: ${mobileWindowSize}) {
      width: 100%;
   }
`
