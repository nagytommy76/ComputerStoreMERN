import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LocationType } from '../../../BaseTypes'

import Slide from '@mui/material/Slide'
import { StyledSlideSection, StyledImageContainer, StyledImage } from './SliderStyle'

const RightArrow = React.lazy(() => import('./RightArrow'))
const LeftArrow = React.lazy(() => import('./LeftArrow'))

const ImageSlider = () => {
   let { state } = useLocation()
   const { pictureUrls } = state as LocationType

   const [currentPic, setCurrentPic] = useState<number>(0)
   const [direction, setDirection] = useState<'left' | 'up' | 'down' | 'right'>('right')
   const [isSlide, setIsSlide] = useState<boolean>(true)
   const NodeRef = useRef(null)

   const nextImage = () => {
      if (pictureUrls.length > 1) {
         setDirection('right')
         setIsSlide(false)
         setTimeout(() => {
            setCurrentPic(currentPic === pictureUrls.length - 1 ? 0 : currentPic + 1)
            setDirection('left')
            setIsSlide(true)
         }, 500)
      }
   }

   const previousImage = () => {
      if (pictureUrls.length > 1) {
         setDirection('left')
         setIsSlide(false)
         setTimeout(() => {
            setCurrentPic(currentPic === 0 ? pictureUrls.length - 1 : currentPic - 1)
            setDirection('right')
            setIsSlide(true)
         }, 500)
      }
   }

   return (
      <StyledSlideSection>
         <StyledImageContainer ref={NodeRef}>
            <RightArrow nextImage={nextImage} currentPic={currentPic} />
            <LeftArrow previousImage={previousImage} currentPic={currentPic} />
            <Slide direction={direction} in={isSlide} container={NodeRef.current}>
               <div>
                  <a href={pictureUrls[currentPic]} target='_blank' rel='noreferrer'>
                     <StyledImage src={pictureUrls[currentPic]} alt='' />
                  </a>
               </div>
            </Slide>
         </StyledImageContainer>
      </StyledSlideSection>
   )
}

export default ImageSlider
