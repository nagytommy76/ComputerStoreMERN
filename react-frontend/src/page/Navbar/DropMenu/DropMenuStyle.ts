import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

export const DropStyle = styled.div`
   position: fixed;
   top: 6.6rem;
   width: 250px;
   min-height: 300px;
   background-color: rgba(35, 35, 35, 0.8);
   transition: all 0.2s ease;
   &:hover {
      background-color: rgba(35, 35, 35, 0.95);
      box-shadow: 0px 0px 15px #111;
   }
   display: flex;
   flex-direction: column;
   justify-content: center;

   @media (max-width: ${mobileWindowSize}) {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 8;
      background-color: rgba(35, 35, 35, 0.95);
   }
`

export const CloseDropdownMenu = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 5px;
   background-color: red;
   position: absolute;
   top: 10px;
   right: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const DropLinkItem = styled(Link)`
   max-width: 100%;
   text-align: right;
   padding: 0.5rem 2.6rem 0.5rem 0;
   border-left: 5px solid transparent;
   transition: all 0.1s linear;
   &:hover {
      font-weight: 900;
      border-left: 5px solid yellow;
   }
`
