import { Button, Card, styled as MUIStyled } from '@mui/material'
import styled from 'styled-components'
import { mobileWindowSize } from '../../../../../../Theme/GlobalStyles'

export const RatingContainer = styled.div`
   border-radius: 5px;
   margin-bottom: 1.5rem;
   @media (max-width: ${mobileWindowSize}) {
      margin-top: 1.7rem;
   }
`

export const LeftContent = styled.section`
   width: 50%;
   padding: 0.9rem;
   @media (max-width: ${mobileWindowSize}) {
      padding-top: 1rem;
      width: 80%;
   }
`

export const RightContent = styled.section`
   width: 50%;
   padding: 0.9rem;
   @media (max-width: ${mobileWindowSize}) {
      padding: 0;
      margin-bottom: 1rem;
      width: 80%;
   }
`

export const StyledButton = MUIStyled(Button)`
   margin: 1rem 0 1rem 0;
`

export const CustomCardContent = MUIStyled(Card)`
   display: flex;
   flex-direction: row;
   @media(max-width: ${mobileWindowSize}){
      flex-direction: column;
      align-items: center;
   }
`
