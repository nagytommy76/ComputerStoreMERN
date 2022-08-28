import React, { useState } from 'react'

const useImgHandle = (pictureUrls: string[]) => {
   const [currentPic, setCurrentPic] = useState<number>(0)
   const [direction, setDirection] = useState<'left' | 'up' | 'down' | 'right'>('right')
   const [isSlide, setIsSlide] = useState<boolean>(true)

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
   return {
      previousImage,
      nextImage,
      currentPic,
      direction,
      isSlide,
   }
}

export default useImgHandle
