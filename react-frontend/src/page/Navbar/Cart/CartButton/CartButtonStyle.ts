import styled from 'styled-components'
import { mobileWindowSize } from '../../../../Theme/GlobalStyles'

export const NavbarCartButtonStyle = styled.button`
   position: absolute;
   right: 0;
   background-color: hsla(107, 0%, 20%, 0.8);
   width: 100px;
   height: 100%;
   border-radius: 2px;
   border: none;
   cursor: pointer;
   color: #29c400;
   transition: background-color 0.2s;
   &:hover {
      background-color: hsla(107, 0%, 38%, 0.8);
   }
   @media (max-width: ${mobileWindowSize}) {
      z-index: 6;
      background-color: transparent;
      top: 0;
      width: 60px;
      height: 60px;
      &:hover {
         background-color: transparent;
      }
   }
`

export const ItemsInCartStyle = styled.div`
   position: absolute;
   right: 3px;
   top: 3px;
   display: flex;
   align-items: center;
   justify-content: center;

   font-size: 1.3rem;
   width: 30px;
   height: 30px;
   border-radius: 5px;
   background-color: hsl(5, 100%, 40%);
   color: white;
   font-weight: 600;

   @media (max-width: ${mobileWindowSize}) {
      left: -25px;
      width: 25px;
      height: 25px;
      font-size: 1rem;
   }
`
