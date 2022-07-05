import React, { useState } from 'react'
import { styled } from '@mui/material'
import { mobileWindowSize } from '../Theme/GlobalStyles'

import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState<boolean>(false)

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 150) {
         setIsVisible(true)
      } else if (scrolled <= 150) {
         setIsVisible(false)
      }
   }

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }

   window.addEventListener('scroll', toggleVisible)

   const StyledIconButton = styled(IconButton)({
      position: 'fixed',
      right: '50px',
      bottom: '50px',
      fontSize: '160px',

      [`@media (max-width: ${mobileWindowSize})`]: {
         right: '5px',
      },
   })

   const StyledIcon = styled(DoubleArrowIcon)({
      transform: 'rotate(-90deg)',
      fontSize: '50px',
      [`@media (max-width: ${mobileWindowSize})`]: {
         fontSize: '40px',
      },
   })

   return (
      <Fade in={isVisible}>
         <StyledIconButton size='large' color='primary' onClick={scrollToTop}>
            <StyledIcon />
         </StyledIconButton>
      </Fade>
   )
}

export default ScrollToTop
