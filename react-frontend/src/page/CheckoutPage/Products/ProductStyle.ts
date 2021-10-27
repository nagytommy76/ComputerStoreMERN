import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'
import { Card, CardContent, styled as MUIStyled } from '@mui/material'

export const ProductsContainer = styled.section`
   flex: 1;
   color: black;
   display: flex;
   flex-direction: column;
   align-items: center;

   @media (max-width: ${mobileWindowSize}) {
   }
`

export const ProductCards = styled.div`
   z-index: 3;
   width: 85%;
   min-height: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: auto 0;
   justify-content: center;
`

export const CustomCard = MUIStyled(Card)(() => ({
   position: 'relative',
   width: '470px',
   height: '175px',
   display: 'flex',
   flexDirection: 'row',
   margin: '1rem 0'
}))

export const CustomCardContent = MUIStyled(CardContent)(() => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
   '&.MuiCardContent-root': {
      padding: '0 1.2rem'
   }
}))

export const BackgroundImageStyle = styled.div<{ backgroundImage: string }>`
   width: 50%;
   height: 100%;
   position: absolute;

   background-image: url(${({ backgroundImage }) => backgroundImage});
   background-position: 50% 65%;
   background-repeat: no-repeat;
   background-size: cover;
   filter: brightness(50%);

   @media (max-width: ${mobileWindowSize}) {
      width: 100%;
   }
`
