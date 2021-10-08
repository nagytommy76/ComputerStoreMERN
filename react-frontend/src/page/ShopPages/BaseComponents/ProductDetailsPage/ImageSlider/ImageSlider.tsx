import React from 'react'
import { useLocation } from 'react-router'
import { StyledSlideSection, StyledImageContainer, CustomCarousel, StyledImage } from './SliderStyle'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { LocationType } from '../../../BaseTypes'

// https://www.npmjs.com/package/react-material-ui-carousel

const ImageSlider = () => {
   let location = useLocation<LocationType>()
   const { pictureUrls } = location.state
   return (
      <StyledSlideSection>
         <CustomCarousel animation='slide' autoPlay interval={6000}>
            {pictureUrls.map((image, index) => (
               <StyledImageContainer key={index}>
                  <StyledImage src={image} alt={image + index} />
               </StyledImageContainer>
            ))}
         </CustomCarousel>
      </StyledSlideSection>
   )
}

export default ImageSlider
