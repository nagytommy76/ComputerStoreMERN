import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'
import { navbarHeight } from '../NavbarStyles'

export const SlideStyle = styled.section`
   width: 400px;
   height: calc(100% - ${navbarHeight});
   color: black;
   background-color: #eee;
   position: fixed;
   right: 0;
   bottom: 0;
   overflow: auto;

   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width: ${mobileWindowSize}) {
      width: 100%;
      height: calc(100%);
   }
`

export const CartTitle = styled.h1`
   margin: 1rem 0;
   font-size: 2rem;
`

export const FinalPriceStyle = styled.h1`
   width: 85%;
   text-align: left;
   font-size: 1.5rem;
`
// Footer section

export const FooterStyle = styled.footer`
   display: flex;
   flex-direction: column;
   width: 80%;
`

export const FooterButtonsStyle = styled.button<{ isDisabled?: boolean }>`
   width: 100%;
   cursor: pointer;
   border-radius: 7px;
   background-color: ${({ isDisabled }) => (isDisabled ? 'hsla(215, 24%, 18%, 0.7)' : 'hsl(215, 24%, 18%)')};
   border: none;
   color: #fff;
   font-size: 1.2rem;
   padding: 0.6rem 0;
   margin: 0.3rem 0;
   transition: all 0.3s;
   &:hover {
      background-color: hsla(215, 24%, 18%, 0.7);
   }
`
