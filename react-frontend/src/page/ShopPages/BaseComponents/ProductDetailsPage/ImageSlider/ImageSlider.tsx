import React from 'react'
import { useLocation } from 'react-router'
import { StyledSlideSection, StyledImageContainer, StyledImage } from './SliderStyle'
import Carousel from 'react-material-ui-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { LocationType } from '../../../BaseTypes'
import { useAppSelector } from '../../../../../app/hooks'

// https://www.npmjs.com/package/react-material-ui-carousel

const ImageSlider = () => {
   let location = useLocation<LocationType>()
   const { pictureUrls } = location.state
   const mobileSize = useAppSelector((state) => state.mobile.isMobile)
   return (
      <StyledSlideSection>
         <Carousel
            fullHeightHover={mobileSize}
            navButtonsAlwaysVisible={mobileSize}
            /*indicatorContainerProps={{ style: { minHeight: '100px' } }}*/
            animation='slide'
            autoPlay={false}
            timeout={{
               appear: 400,
               enter: 400,
               exit: 400
            }}>
            {pictureUrls.map((image, index) => (
               <StyledImageContainer key={index}>
                  <a href={image} target='_blank' rel='noreferrer'>
                     <StyledImage src={image} alt={image + index} />
                  </a>
               </StyledImageContainer>
            ))}
         </Carousel>
      </StyledSlideSection>
   )
}

export default ImageSlider
