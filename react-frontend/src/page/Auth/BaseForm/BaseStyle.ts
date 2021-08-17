import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'

type Props = {
   image: string
}

export const ImageStyle = styled.section<Props>`
   background-image: url(${(props) => props.image});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 100%;
   @media (max-width: ${mobileWindowSize}) {
      display: none;
   }
`

export const AuthContainer = styled.section`
   min-height: 100vh;
   display: grid;
   grid-template-columns: repeat(2, 50%);
   justify-content: center;
   align-items: center;
   @media (max-width: ${mobileWindowSize}) {
      grid-template-columns: repeat(1, 100%);
   }
`

export const AuthFormStyle = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
`
