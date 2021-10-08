import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import { styled as MUIStyled } from '@mui/system'

export const CustomCarousel = MUIStyled(Carousel)`
   width: 500px;
`

export const StyledImage = styled.img`
   object-fit: fill;
`

export const StyledSlideSection = styled.section`
   width: 100%;
   height: 100%;
   flex: 1;
`

export const StyledImageContainer = styled.div`
   height: 100%;
   background-color: #fff;
`
