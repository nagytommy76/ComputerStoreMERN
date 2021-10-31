import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { StyledSlideSection, StyledImageContainer, StyledImage, RightArrow, LeftArrow } from './SliderStyle'
import { LocationType } from '../../../BaseTypes'

import { IconButton, Slide } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const ImageSlider = () => {
   let location = useLocation<LocationType>()
   const { pictureUrls } = location.state
   const [currentPic, setCurrentPic] = useState<number>(0)
   const [direction, setDirection] = useState<'left' | 'up' | 'down' | 'right'>('down')
   const [isSlide, setIsSlide] = useState<boolean>(true)
   const NodeRef = useRef(null)
   // https://levelup.gitconnected.com/adding-transitions-to-a-react-carousel-with-material-ui-b95825653c1b
   const nextImage = () => {
      setDirection('left')
      setIsSlide(false)
      setTimeout(() => {
         setCurrentPic(currentPic === pictureUrls.length - 1 ? 0 : currentPic + 1)
         setDirection('right')
         setIsSlide(true)
      }, 500)
   }

   const previousImage = () => {
      setDirection('right')
      setIsSlide(false)
      setTimeout(() => {
         setCurrentPic(currentPic === 0 ? pictureUrls.length - 1 : currentPic - 1)
         setDirection('left')
         setIsSlide(true)
      }, 500)
   }

   return (
      <StyledSlideSection>
         <StyledImageContainer>
            <RightArrow>
               <IconButton onClick={nextImage} color='primary' size='large'>
                  <ArrowForwardIosIcon color='primary' />
               </IconButton>
            </RightArrow>
            <LeftArrow>
               <IconButton onClick={previousImage} color='primary' size='large'>
                  <ArrowBackIosNewIcon color='primary' />
               </IconButton>
            </LeftArrow>
            <Slide direction={direction} in={isSlide} container={NodeRef.current}>
               <a href={pictureUrls[currentPic]} target='_blank' rel='noreferrer'>
                  <StyledImage src={pictureUrls[currentPic]} alt='' />
               </a>
            </Slide>
         </StyledImageContainer>
      </StyledSlideSection>
   )
}

export default ImageSlider
