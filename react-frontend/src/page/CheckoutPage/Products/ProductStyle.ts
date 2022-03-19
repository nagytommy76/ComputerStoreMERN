import styled from 'styled-components'
import { mobileWindowSize } from '../../../Theme/GlobalStyles'
import { Card, CardContent, CardMedia, styled as MUIStyled, Typography } from '@mui/material'

export const ProductsContainer = styled.section<{ backgroundImage: string }>`
   position: relative;
   height: 100vh;
   flex: 1;
   color: black;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   &:after {
      content: '';
      position: absolute;
      z-index: -1; // Hogy tuti a content mögé kerüljön a kép
      width: 100%;
      height: 100%;
      background-image: url(${({ backgroundImage }) => backgroundImage});
      background-position: 40% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      filter: brightness(50%);
   }

   @media (max-width: ${mobileWindowSize}) {
      height: 100vh;
      width: 100%;
   }
`

export const ProductCards = styled.div`
   overflow-y: auto;
   z-index: 3;
   width: 85%;
   height: 70%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   @media (max-width: ${mobileWindowSize}) {
      width: 70%;
      height: 90vh;
      margin: 2rem 0;
      justify-content: unset;
      overflow: scroll;
   }
`

const CardWidthInMobile = '250px'
const cardHeightInMobile = '370px'

export const CustomCard = MUIStyled(Card)(({ theme }) => ({
   position: 'relative',
   width: '470px',
   minHeight: '175px',
   display: 'flex',
   flexDirection: 'row',
   margin: '1rem 0',
   [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: CardWidthInMobile,
      minHeight: cardHeightInMobile,
   },
}))

export const CustomCardMedia = MUIStyled(CardMedia)(({ theme }) => ({
   width: '250px',
   height: '185px',
   objectFit: 'cover',
   [theme.breakpoints.down('sm')]: {
      width: CardWidthInMobile,
      height: '50%',
   },
}))

export const CustomCardContent = MUIStyled(CardContent)(({ theme }) => ({
   width: '285px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
   '&.MuiCardContent-root': {
      padding: '0 1.2rem',
   },
   [theme.breakpoints.down('sm')]: {
      width: '85%',
      height: '50%',
   },
}))

export const FooterSection = styled.footer`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`

export const PriceSection = MUIStyled(Typography)(({ theme }) => ({
   width: '75%',
   textAlign: 'center',
   padding: '.45rem',
   borderRadius: '5px',
   backgroundColor: 'rgba(0,0,0, .65)',
   margin: '.5rem 0',
   letterSpacing: '2px',
   // fontSize: '2rem'
   [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
   },
}))
