import React from 'react'
import { useLocation } from 'react-router'
import { StyledSlideSection, StyledImageContainer } from './SliderStyle'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { LocationType } from '../../../BaseTypes'

const ImageSlider = () => {
   let location = useLocation<LocationType>()
   const { pictureUrls } = location.state
   return (
      <StyledSlideSection>
         <Carousel autoPlay infiniteLoop interval={6000}>
            {pictureUrls.map((image, index) => (
               <StyledImageContainer key={index}>
                  <img src={image} alt={image + index} />
               </StyledImageContainer>
            ))}
         </Carousel>
      </StyledSlideSection>
   )
}

export default ImageSlider
