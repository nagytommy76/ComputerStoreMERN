import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

export const StyledButton = styled.button`
   width: 160px;
   height: 50px;
   margin: 1.5rem;
   cursor: pointer;
   border: none;
   border-radius: 5px;
   background: #f39c12;
   transition: all 0.1s linear;
   font-size: 1.1rem;
   padding: 0.7rem;
   &:hover {
      transform: scale(1.06);
   }

   @media (max-width: ${mobileWindowSize}) {
      padding: 0.3rem;
      width: 140px;
      height: 45px;
   }
`
