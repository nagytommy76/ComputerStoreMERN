import React, { useContext } from 'react'
import { StyledSlideSection } from './SliderStyle'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { VgaDetailsContext } from '../../../Vga/VgaDetails/VgaDetailsContext/DetailsContext'

const ImageSlider = () => {
   const { pictureUrls } = useContext(VgaDetailsContext)
   return (
      <StyledSlideSection>
         <Carousel autoPlay infiniteLoop interval={6000}>
            {pictureUrls.map((image, index) => (
               <div key={index}>
                  <img src={image} alt={image + index} />
               </div>
            ))}
         </Carousel>
      </StyledSlideSection>
   )
}

export default ImageSlider
