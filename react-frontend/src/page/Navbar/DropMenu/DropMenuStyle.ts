import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DropStyle = styled.div`
   position: fixed;
   top: 6.6rem;
   width: 250px;
   min-height: 300px;
   background-color: rgba(11, 11, 11, 0.8);
   transition: all 0.2s ease;
   &:hover {
      background-color: rgba(11, 11, 11, 0.95);
      box-shadow: 0px 0px 15px #111;
   }

   display: flex;
   flex-direction: column;
`

export const DropLinkItem = styled(Link)`
   width: 100%;
   text-align: center;
   margin: 0.5rem 0 0.5rem 0;
   border-left: 5px solid transparent;
   transition: all 0.2s linear;
   &:hover {
      border-left: 5px solid yellow;
   }
`
