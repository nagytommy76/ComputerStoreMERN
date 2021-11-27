import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

export const AccordionContainer = styled.section`
   width: 300px;
`
export const ButtonContainer = styled.div`
   position: absolute;
   left: 5px;
   top: 50px;
   @media (max-width: ${mobileWindowSize}) {
      top: 70px;
   }
`
