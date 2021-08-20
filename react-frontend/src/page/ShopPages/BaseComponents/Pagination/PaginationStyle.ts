import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
   align-self: center;
   margin-top: 1rem;
   width: 170px;
   height: 35px;
   display: flex;
`

export const PageButton = styled.button`
   background-color: hsl(53, 100%, 48%);
   border: none;
   border-radius: 5px;
   cursor: pointer;
   width: 75px;
`

export const LeftPageFont = styled(FontAwesomeIcon)`
   width: 100%;
   height: 100%;
   transform: translateX(10px);
   transition: all 0.2s ease;
   &:hover {
      transform: translateX(-10px);
   }
`

export const CurrentPageNumber = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 55px;
   text-align: center;
   font-size: 1.1rem;
   font-weight: 600;

   border: none;
   margin: 0 0.1rem;
   background-color: #fff;
`
