import styled from 'styled-components'
import { Card, styled as MUIStyled } from '@mui/material'

type Prop = {
   isCardExpanded: boolean
}

export const CardWidth = '250px'
const CardHeight = '350px'
const FooterHeight = '40px'

export const CustomCard = MUIStyled(Card)<Prop>`
   position: relative;
   height: ${({ isCardExpanded }) => (isCardExpanded ? `calc(${CardHeight} + ${FooterHeight});` : `${CardHeight};`)};
   width: ${CardWidth};
   transition: all 0.15s;
   &:hover {
      transform: scale(1.025) translateY(-5px);
   }
`

export const SubTitleStyle = styled.h5`
   font-size: 1rem;
   font-weight: 600;
   padding: 0 0.2rem 0 0.2rem;
   margin: 0.3rem 0 0.9rem 0;
   height: 60px;
`

// Footer
export const CardFooterStyle = styled.footer`
   height: ${FooterHeight};
`
