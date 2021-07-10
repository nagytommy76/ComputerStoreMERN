import React from 'react'
import { StyledSlideSection } from './SliderStyle'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
   return (
      <StyledSlideSection>
         <Carousel autoPlay infiniteLoop interval={6000}>
            {images.map((image, index) => (
               <div key={index}>
                  <img src={image} alt={image + index} />
               </div>
            ))}
         </Carousel>
      </StyledSlideSection>
   )
}

export default ImageSlider
