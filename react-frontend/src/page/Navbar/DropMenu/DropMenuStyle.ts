import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

import MenuItem from '@mui/material/MenuItem'

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
      z-index: 15;
      background-color: rgba(35, 35, 35, 0.95);
   }
`

export const CloseDropdownMenu = styled.div`
   display: none;
   align-items: center;
   justify-content: center;
   width: 40px;
   height: 40px;
   border-radius: 5px;
   background-color: red;
   position: absolute;
   top: 10px;
   right: 10px;

   @media (max-width: ${mobileWindowSize}) {
      display: flex;
   }
`

export const DropLinkItem = styled(Link)`
   display: flex;
   align-items: center;
   width: 100%;
   height: 100%;
   text-align: left;
   font-size: 17px;
   padding: 0.5rem;
   border-left: 5px solid transparent;
   transition: all 0.1s linear;
   &:hover {
      font-weight: 900;
      border-left: 8px solid yellow;
   }
   @media (max-width: ${mobileWindowSize}) {
      letter-spacing: 3px;
      font-weight: 800;
      font-size: 17px;
      padding: 1rem 1rem 1rem 0;
   }
`

export const StyledMenuItem = styled(MenuItem)({
   transition: 'all 0.15s linear',
   width: 220,
   [`@media (max-width: ${mobileWindowSize})`]: {
      width: 280,
   },
})
